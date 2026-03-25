import * as React from "react";
import { zodValidator } from "@tanstack/zod-adapter";
import { createFileRoute } from "@tanstack/react-router";
import {
  addDays,
  addWeeks,
  format,
  isValid,
  parseISO,
  startOfDay,
  startOfWeek,
} from "date-fns";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PanelLeftIcon,
  PanelRightIcon,
} from "lucide-react";
import { z } from "zod";

import { CommandMenu } from "@/components/command-menu";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ViewDropdown } from "@/components/view-dropdown";
import {
  WeekView,
  getCalendarHeaderInfo,
  getVisibleDays,
} from "@/components/week-view";
import type {
  CalendarEvent,
  ViewSettings,
  ViewType,
} from "@/components/week-view-types";
import { generateMockEvents } from "@/lib/mock-events";

const VIEW_TYPES = ["day", "week", "month"] as const;
const DATE_FORMAT = "yyyy-MM-dd";

function parseBooleanParam(value: unknown) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  return undefined;
}

function parseDateParam(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const parsedDate = parseISO(value);

  if (!isValid(parsedDate)) {
    return undefined;
  }

  return format(parsedDate, DATE_FORMAT);
}

const searchSchema = z.object({
  date: z.preprocess(
    parseDateParam,
    z.string().default(() => format(new Date(), DATE_FORMAT)),
  ),
  days: z.coerce.number().int().min(2).max(9).catch(7),
  selectedEventId: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string().optional(),
  ),
  showDeclinedEvents: z.preprocess(parseBooleanParam, z.boolean().catch(true)),
  showWeekNumbers: z.preprocess(parseBooleanParam, z.boolean().catch(true)),
  showWeekends: z.preprocess(parseBooleanParam, z.boolean().catch(true)),
  view: z.enum(VIEW_TYPES).catch("week"),
});

export const Route = createFileRoute("/")({
  component: IndexPage,
  validateSearch: zodValidator(searchSchema),
});

function getRouteDate(view: ViewType, dateString: string) {
  const parsedDate = parseISO(dateString);

  if (!isValid(parsedDate)) {
    return view === "day"
      ? startOfDay(new Date())
      : startOfWeek(new Date(), { weekStartsOn: 0 });
  }

  if (view === "day") {
    return startOfDay(parsedDate);
  }

  return startOfWeek(parsedDate, { weekStartsOn: 0 });
}

function getDateString(date: Date) {
  return format(date, DATE_FORMAT);
}

function IndexPage() {
  return (
    <SidebarProvider className="h-screen">
      <PageContent />
    </SidebarProvider>
  );
}

function PageContent() {
  const navigate = Route.useNavigate();
  const search = Route.useSearch();
  const { theme, setTheme } = useTheme();
  const [leftSidebarOpen, setLeftSidebarOpen] = React.useState(true);
  const [events, setEvents] = React.useState(() => generateMockEvents());
  const [commandMenuOpen, setCommandMenuOpen] = React.useState(false);
  const [visibleDays, setVisibleDays] = React.useState<Date[]>(() =>
    getVisibleDays(getRouteDate(search.view, search.date), search.view),
  );
  const { toggleSidebar, open: rightSidebarOpen } = useSidebar();

  const currentDate = React.useMemo(
    () => getRouteDate(search.view, search.date),
    [search.date, search.view],
  );
  const viewSettings = React.useMemo<ViewSettings>(
    () => ({
      showDeclinedEvents: search.showDeclinedEvents,
      showWeekNumbers: search.showWeekNumbers,
      showWeekends: search.showWeekends,
    }),
    [search.showDeclinedEvents, search.showWeekNumbers, search.showWeekends],
  );
  const selectedEvent = React.useMemo(
    () => events.find((event) => event.id === search.selectedEventId) ?? null,
    [events, search.selectedEventId],
  );

  type RouteSearch = typeof search;

  const updateSearch = React.useCallback(
    (updater: (previous: RouteSearch) => RouteSearch) => {
      navigate({
        replace: true,
        search: updater,
      });
    },
    [navigate],
  );

  const handleEventChange = React.useCallback((updatedEvent: CalendarEvent) => {
    setEvents((previousEvents) =>
      previousEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event,
      ),
    );
  }, []);

  const goToToday = React.useCallback(() => {
    updateSearch((previousSearch) => ({
      ...previousSearch,
      date:
        previousSearch.view === "day"
          ? getDateString(startOfDay(new Date()))
          : getDateString(startOfWeek(new Date(), { weekStartsOn: 0 })),
    }));
  }, [updateSearch]);

  const goToPrev = React.useCallback(() => {
    updateSearch((previousSearch) => {
      const previousDate = getRouteDate(
        previousSearch.view,
        previousSearch.date,
      );

      return {
        ...previousSearch,
        date: getDateString(
          previousSearch.view === "day"
            ? addDays(previousDate, -1)
            : addWeeks(previousDate, -1),
        ),
      };
    });
  }, [updateSearch]);

  const goToNext = React.useCallback(() => {
    updateSearch((previousSearch) => {
      const previousDate = getRouteDate(
        previousSearch.view,
        previousSearch.date,
      );

      return {
        ...previousSearch,
        date: getDateString(
          previousSearch.view === "day"
            ? addDays(previousDate, 1)
            : addWeeks(previousDate, 1),
        ),
      };
    });
  }, [updateSearch]);

  const goToDate = React.useCallback(
    (date: Date) => {
      updateSearch((previousSearch) => ({
        ...previousSearch,
        date: getDateString(date),
      }));
    },
    [updateSearch],
  );

  const goToDateWeek = React.useCallback(
    (date: Date) => {
      updateSearch((previousSearch) => ({
        ...previousSearch,
        date: getDateString(
          previousSearch.view === "day"
            ? startOfDay(date)
            : startOfWeek(date, { weekStartsOn: 0 }),
        ),
      }));
    },
    [updateSearch],
  );

  const switchView = React.useCallback(
    (newView: ViewType) => {
      updateSearch((previousSearch) => {
        if (newView === previousSearch.view) {
          return previousSearch;
        }

        if (newView === "day") {
          return {
            ...previousSearch,
            date: getDateString(startOfDay(new Date())),
            view: newView,
          };
        }

        return {
          ...previousSearch,
          date: getDateString(
            startOfWeek(
              getRouteDate(previousSearch.view, previousSearch.date),
              {
                weekStartsOn: 0,
              },
            ),
          ),
          view: newView,
        };
      });
    },
    [updateSearch],
  );

  const setNumberOfDays = React.useCallback(
    (days: number) => {
      updateSearch((previousSearch) => ({
        ...previousSearch,
        days,
      }));
    },
    [updateSearch],
  );

  const toggleWeekends = React.useCallback(() => {
    updateSearch((previousSearch) => ({
      ...previousSearch,
      showWeekends: !previousSearch.showWeekends,
    }));
  }, [updateSearch]);

  const toggleDeclinedEvents = React.useCallback(() => {
    updateSearch((previousSearch) => ({
      ...previousSearch,
      showDeclinedEvents: !previousSearch.showDeclinedEvents,
    }));
  }, [updateSearch]);

  const toggleWeekNumbers = React.useCallback(() => {
    updateSearch((previousSearch) => ({
      ...previousSearch,
      showWeekNumbers: !previousSearch.showWeekNumbers,
    }));
  }, [updateSearch]);

  const cycleTheme = React.useCallback(() => {
    if (theme === "system") {
      setTheme("light");
      return;
    }

    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("system");
  }, [setTheme, theme]);

  const { monthName, weekNumber, year } = getCalendarHeaderInfo(
    visibleDays[0] ?? currentDate,
    0,
  );

  React.useEffect(() => {
    setVisibleDays(getVisibleDays(currentDate, search.view));
  }, [currentDate, search.view]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setCommandMenuOpen((previousOpen) => !previousOpen);
        return;
      }

      if (event.metaKey && event.key === "/") {
        event.preventDefault();
        setLeftSidebarOpen((previousOpen) => !previousOpen);
        return;
      }

      if (
        event.key === "e" &&
        event.shiftKey &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleWeekends();
        return;
      }

      if (
        event.key === "d" &&
        event.shiftKey &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleDeclinedEvents();
        return;
      }

      if (event.key === "," && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        return;
      }

      if (event.key === "Escape") {
        updateSearch((previousSearch) => ({
          ...previousSearch,
          selectedEventId: undefined,
        }));
        return;
      }

      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey
      ) {
        event.preventDefault();
        toggleSidebar();
        return;
      }

      if (event.key === "t" || event.key === "T") {
        event.preventDefault();
        goToToday();
        return;
      }

      if (event.key === "1" || event.key === "d" || event.key === "D") {
        event.preventDefault();
        switchView("day");
        return;
      }

      if (event.key === "0" || event.key === "w" || event.key === "W") {
        event.preventDefault();
        switchView("week");
        return;
      }

      if (/^[2-9]$/.test(event.key)) {
        event.preventDefault();
        setNumberOfDays(Number(event.key));
        return;
      }

      if (event.key === "j" || event.key === "J" || event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrev();
        return;
      }

      if (
        event.key === "k" ||
        event.key === "K" ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        goToNext();
        return;
      }

      if (
        event.key === "M" &&
        event.shiftKey &&
        !event.metaKey &&
        !event.ctrlKey
      ) {
        event.preventDefault();
        cycleTheme();
        return;
      }

      if (event.key === "m") {
        event.preventDefault();
        switchView("month");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    cycleTheme,
    goToNext,
    goToPrev,
    goToToday,
    setNumberOfDays,
    switchView,
    toggleDeclinedEvents,
    toggleSidebar,
    toggleWeekends,
    updateSearch,
  ]);

  return (
    <>
      <CommandMenu
        open={commandMenuOpen}
        onOpenChange={setCommandMenuOpen}
        onGoToToday={goToToday}
        onGoToPrev={goToPrev}
        onGoToNext={goToNext}
        onSwitchView={switchView}
        onToggleLeftSidebar={() =>
          setLeftSidebarOpen((previousOpen) => !previousOpen)
        }
        onToggleRightSidebar={toggleSidebar}
        onCycleTheme={cycleTheme}
      />
      <SidebarRight
        open={leftSidebarOpen}
        onDateSelect={goToDateWeek}
        currentDate={currentDate}
        visibleDays={visibleDays}
      />
      <SidebarInset className="flex flex-col overflow-hidden">
        <header className="bg-background sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7 text-muted-foreground"
                  onClick={() =>
                    setLeftSidebarOpen((previousOpen) => !previousOpen)
                  }
                >
                  <PanelLeftIcon />
                  <span className="sr-only">Toggle Calendar Sidebar</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {leftSidebarOpen ? "Close" : "Open"} sidebar{" "}
                <Kbd className="ml-1">⌘</Kbd> <Kbd>/</Kbd>
              </TooltipContent>
            </Tooltip>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-xl">
              <span className="font-extrabold">{monthName}</span>{" "}
              <span className="font-extrabold">{year}</span>{" "}
              <span className="text-muted-foreground text-xs">
                {search.view === "day" && format(currentDate, "EEEE, MMM d")}
                {search.view === "week" && `Week ${weekNumber}`}
                {search.view === "month" && format(currentDate, "MMMM")}
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-2 px-4">
            <Avatar className="size-7">
              <AvatarImage
                src="https://github.com/vmnog.png"
                alt="Victor Nogueira"
              />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
            <ViewDropdown
              view={search.view}
              numberOfDays={search.days}
              viewSettings={viewSettings}
              onSwitchView={switchView}
              onSetNumberOfDays={setNumberOfDays}
              onToggleWeekends={toggleWeekends}
              onToggleDeclinedEvents={toggleDeclinedEvents}
              onToggleWeekNumbers={toggleWeekNumbers}
            />
            <Button
              variant="secondary"
              size="sm"
              className="px-3"
              onClick={goToToday}
            >
              Today
            </Button>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="size-8 text-muted-foreground"
                onClick={goToPrev}
              >
                <ChevronLeftIcon className="size-4" />
                <span className="sr-only">
                  {search.view === "day" ? "Previous day" : "Previous week"}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 text-muted-foreground"
                onClick={goToNext}
              >
                <ChevronRightIcon className="size-4" />
                <span className="sr-only">
                  {search.view === "day" ? "Next day" : "Next week"}
                </span>
              </Button>
            </div>
            {!rightSidebarOpen && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7 text-muted-foreground"
                    onClick={toggleSidebar}
                  >
                    <PanelRightIcon />
                    <span className="sr-only">Toggle Navigation Sidebar</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Open context panel <Kbd className="ml-1">/</Kbd>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </header>
        <div className="flex flex-1 flex-col overflow-hidden">
          <WeekView
            view={search.view}
            currentDate={currentDate}
            events={events}
            onEventClick={(event) => {
              updateSearch((previousSearch) => ({
                ...previousSearch,
                selectedEventId: event.id,
              }));
            }}
            selectedEventId={selectedEvent?.id}
            onBackgroundClick={() => {
              updateSearch((previousSearch) => ({
                ...previousSearch,
                selectedEventId: undefined,
              }));
            }}
            onDateChange={goToDate}
            onVisibleDaysChange={setVisibleDays}
            onEventChange={handleEventChange}
            isSidebarOpen={rightSidebarOpen}
            onDockToSidebar={() => {
              if (!rightSidebarOpen) {
                toggleSidebar();
              }
            }}
            onClosePopover={() => {
              updateSearch((previousSearch) => ({
                ...previousSearch,
                selectedEventId: undefined,
              }));
            }}
            onPrevWeek={goToPrev}
            onNextWeek={goToNext}
          />
        </div>
      </SidebarInset>
      <SidebarLeft
        events={events}
        selectedEvent={selectedEvent}
        onEventChange={handleEventChange}
        onPrevWeek={goToPrev}
        onNextWeek={goToNext}
      />
    </>
  );
}
