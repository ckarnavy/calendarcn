"use client";

import * as React from "react";
import { addDays, addWeeks, format, startOfDay, startOfWeek } from "date-fns";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PanelLeftIcon,
  PanelRightIcon,
} from "lucide-react";

import { CommandMenu } from "@/components/command-menu";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import { useTheme } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ViewDropdown } from "@/components/view-dropdown";
import {
  WeekView,
  getCalendarHeaderInfo,
  getVisibleDays,
} from "@/components/week-view";
import type {
  CalendarCNProps,
  ViewSettings,
  ViewType,
} from "@/components/week-view-types";

function normalizeCurrentDate(view: ViewType, date: Date) {
  if (view === "day") {
    return startOfDay(date);
  }

  return startOfWeek(date, { weekStartsOn: 0 });
}

function getNextViewSettings(
  previousSettings: ViewSettings,
  patch: Partial<ViewSettings>,
) {
  return {
    ...previousSettings,
    ...patch,
  };
}

export function CalendarCN(props: CalendarCNProps) {
  return (
    <SidebarProvider className="h-screen">
      <CalendarCNContent {...props} />
    </SidebarProvider>
  );
}

function CalendarCNContent({
  currentDate,
  events,
  selectedEventId = null,
  view,
  numberOfDays,
  viewSettings,
  onCurrentDateChange,
  onEventChange,
  onSelectedEventIdChange,
  onViewChange,
  onNumberOfDaysChange,
  onViewSettingsChange,
}: CalendarCNProps) {
  const { theme, setTheme } = useTheme();
  const { open: rightSidebarOpen, toggleSidebar } = useSidebar();
  const [commandMenuOpen, setCommandMenuOpen] = React.useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = React.useState(true);
  const [visibleDays, setVisibleDays] = React.useState<Date[]>(() =>
    getVisibleDays(normalizeCurrentDate(view, currentDate), view),
  );

  const normalizedCurrentDate = React.useMemo(
    () => normalizeCurrentDate(view, currentDate),
    [currentDate, view],
  );
  const selectedEvent = React.useMemo(
    () => events.find((event) => event.id === selectedEventId) ?? null,
    [events, selectedEventId],
  );
  const { monthName, weekNumber, year } = getCalendarHeaderInfo(
    visibleDays[0] ?? normalizedCurrentDate,
    0,
  );

  const setSelectedEventId = React.useCallback(
    (eventId: string | null) => {
      onSelectedEventIdChange?.(eventId);
    },
    [onSelectedEventIdChange],
  );

  const updateViewSettings = React.useCallback(
    (patch: Partial<ViewSettings>) => {
      onViewSettingsChange?.(getNextViewSettings(viewSettings, patch));
    },
    [onViewSettingsChange, viewSettings],
  );

  const goToToday = React.useCallback(() => {
    onCurrentDateChange(normalizeCurrentDate(view, new Date()));
  }, [onCurrentDateChange, view]);

  const goToPrev = React.useCallback(() => {
    onCurrentDateChange(
      view === "day"
        ? addDays(normalizedCurrentDate, -1)
        : addWeeks(normalizedCurrentDate, -1),
    );
  }, [normalizedCurrentDate, onCurrentDateChange, view]);

  const goToNext = React.useCallback(() => {
    onCurrentDateChange(
      view === "day"
        ? addDays(normalizedCurrentDate, 1)
        : addWeeks(normalizedCurrentDate, 1),
    );
  }, [normalizedCurrentDate, onCurrentDateChange, view]);

  const goToDate = React.useCallback(
    (date: Date) => {
      onCurrentDateChange(date);
    },
    [onCurrentDateChange],
  );

  const goToDateWeek = React.useCallback(
    (date: Date) => {
      onCurrentDateChange(normalizeCurrentDate(view, date));
    },
    [onCurrentDateChange, view],
  );

  const switchView = React.useCallback(
    (newView: ViewType) => {
      if (newView === view) {
        return;
      }

      onViewChange(newView);

      if (newView === "day") {
        onCurrentDateChange(startOfDay(new Date()));
        return;
      }

      onCurrentDateChange(
        startOfWeek(normalizedCurrentDate, { weekStartsOn: 0 }),
      );
    },
    [normalizedCurrentDate, onCurrentDateChange, onViewChange, view],
  );

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

  React.useEffect(() => {
    setVisibleDays(getVisibleDays(normalizedCurrentDate, view));
  }, [normalizedCurrentDate, view]);

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
        updateViewSettings({ showWeekends: !viewSettings.showWeekends });
        return;
      }

      if (
        event.key === "d" &&
        event.shiftKey &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        updateViewSettings({
          showDeclinedEvents: !viewSettings.showDeclinedEvents,
        });
        return;
      }

      if (event.key === "," && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        return;
      }

      if (event.key === "Escape") {
        setSelectedEventId(null);
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
        onNumberOfDaysChange?.(Number(event.key));
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
    onNumberOfDaysChange,
    setSelectedEventId,
    switchView,
    toggleSidebar,
    updateViewSettings,
    viewSettings.showDeclinedEvents,
    viewSettings.showWeekends,
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
        currentDate={normalizedCurrentDate}
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
                {view === "day" && format(normalizedCurrentDate, "EEEE, MMM d")}
                {view === "week" && `Week ${weekNumber}`}
                {view === "month" && format(normalizedCurrentDate, "MMMM")}
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
              view={view}
              numberOfDays={numberOfDays}
              viewSettings={viewSettings}
              onSwitchView={switchView}
              onSetNumberOfDays={(days) => onNumberOfDaysChange?.(days)}
              onToggleWeekends={() =>
                updateViewSettings({ showWeekends: !viewSettings.showWeekends })
              }
              onToggleDeclinedEvents={() =>
                updateViewSettings({
                  showDeclinedEvents: !viewSettings.showDeclinedEvents,
                })
              }
              onToggleWeekNumbers={() =>
                updateViewSettings({
                  showWeekNumbers: !viewSettings.showWeekNumbers,
                })
              }
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
                  {view === "day" ? "Previous day" : "Previous week"}
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
                  {view === "day" ? "Next day" : "Next week"}
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
            view={view}
            currentDate={normalizedCurrentDate}
            events={events}
            onEventClick={(event) => setSelectedEventId(event.id)}
            selectedEventId={selectedEvent?.id}
            onBackgroundClick={() => setSelectedEventId(null)}
            onDateChange={goToDate}
            onVisibleDaysChange={setVisibleDays}
            onEventChange={onEventChange}
            isSidebarOpen={rightSidebarOpen}
            onDockToSidebar={() => {
              if (!rightSidebarOpen) {
                toggleSidebar();
              }
            }}
            onClosePopover={() => setSelectedEventId(null)}
            onPrevWeek={goToPrev}
            onNextWeek={goToNext}
          />
        </div>
      </SidebarInset>
      <SidebarLeft
        events={events}
        selectedEvent={selectedEvent}
        onEventChange={onEventChange}
        onPrevWeek={goToPrev}
        onNextWeek={goToNext}
      />
    </>
  );
}
