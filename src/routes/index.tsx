import * as React from "react";
import { zodValidator } from "@tanstack/zod-adapter";
import { createFileRoute } from "@tanstack/react-router";
import { format, isValid, parseISO } from "date-fns";
import { z } from "zod";

import { CalendarCN } from "@/components/calendar-cn";
import type { ViewType } from "@/components/week-view-types";
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
    return new Date();
  }

  return parsedDate;
}

function getDateString(date: Date) {
  return format(date, DATE_FORMAT);
}

function IndexPage() {
  const navigate = Route.useNavigate();
  const search = Route.useSearch();
  const [events, setEvents] = React.useState(() => generateMockEvents());

  return (
    <CalendarCN
      currentDate={getRouteDate(search.view, search.date)}
      events={events}
      selectedEventId={search.selectedEventId ?? null}
      view={search.view}
      numberOfDays={search.days}
      viewSettings={{
        showDeclinedEvents: search.showDeclinedEvents,
        showWeekNumbers: search.showWeekNumbers,
        showWeekends: search.showWeekends,
      }}
      onCurrentDateChange={(date) => {
        navigate({
          replace: true,
          search: (previousSearch) => ({
            ...previousSearch,
            date: getDateString(date),
          }),
        });
      }}
      onEventChange={(updatedEvent) => {
        setEvents((previousEvents) =>
          previousEvents.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event,
          ),
        );
      }}
      onSelectedEventIdChange={(eventId) => {
        navigate({
          replace: true,
          search: (previousSearch) => ({
            ...previousSearch,
            selectedEventId: eventId ?? undefined,
          }),
        });
      }}
      onViewChange={(view) => {
        navigate({
          replace: true,
          search: (previousSearch) => ({
            ...previousSearch,
            view,
          }),
        });
      }}
      onNumberOfDaysChange={(days) => {
        navigate({
          replace: true,
          search: (previousSearch) => ({
            ...previousSearch,
            days,
          }),
        });
      }}
      onViewSettingsChange={(viewSettings) => {
        navigate({
          replace: true,
          search: (previousSearch) => ({
            ...previousSearch,
            showDeclinedEvents: viewSettings.showDeclinedEvents,
            showWeekNumbers: viewSettings.showWeekNumbers,
            showWeekends: viewSettings.showWeekends,
          }),
        });
      }}
    />
  );
}
