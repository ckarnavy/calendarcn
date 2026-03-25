"use client";

import * as React from "react";
import { addDays, addWeeks, format, startOfDay, startOfWeek } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ViewDropdown } from "@/components/view-dropdown";
import {
  WeekView,
  getCalendarHeaderInfo,
  getVisibleDays,
} from "@/components/week-view";
import type {
  CalendarCNEmbeddedProps,
  CalendarEvent,
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

export function CalendarCNEmbedded({
  className,
  currentDate,
  events,
  numberOfDays,
  selectedEventId = null,
  view,
  viewSettings,
  onCurrentDateChange,
  onEventChange,
  onEventClick,
  onSelectedEventIdChange,
  onViewChange,
  onNumberOfDaysChange,
  onViewSettingsChange,
}: CalendarCNEmbeddedProps) {
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

  const handleEventClick = React.useCallback(
    (event: CalendarEvent) => {
      setSelectedEventId(event.id);
      onEventClick?.(event);
    },
    [onEventClick, setSelectedEventId],
  );

  React.useEffect(() => {
    setVisibleDays(getVisibleDays(normalizedCurrentDate, view));
  }, [normalizedCurrentDate, view]);

  return (
    <div
      className={cn(
        "bg-background flex h-full min-h-0 flex-col overflow-hidden rounded-lg border",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b px-4 py-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold">
            {monthName} {year}
          </h3>
          <p className="text-muted-foreground text-sm">
            {view === "day" && format(normalizedCurrentDate, "EEEE, MMM d")}
            {view === "week" && `Week ${weekNumber}`}
            {view === "month" && format(normalizedCurrentDate, "MMMM")}
          </p>
        </div>
        <div className="flex items-center gap-2">
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
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <WeekView
          view={view}
          currentDate={normalizedCurrentDate}
          events={events}
          onEventClick={handleEventClick}
          selectedEventId={selectedEvent?.id}
          onBackgroundClick={() => setSelectedEventId(null)}
          onDateChange={onCurrentDateChange}
          onVisibleDaysChange={setVisibleDays}
          onEventChange={onEventChange}
          isSidebarOpen={false}
          onClosePopover={() => setSelectedEventId(null)}
          onPrevWeek={goToPrev}
          onNextWeek={goToNext}
          className="h-full"
        />
      </div>
    </div>
  );
}
