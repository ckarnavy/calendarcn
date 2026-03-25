# CalendarCN Library Integration

## Build The Local Package

From this repository:

```bash
pnpm build:lib
```

This creates a local package in `dist-library/`.

## Add It To Another TanStack Start App

From the consuming app:

```bash
pnpm add /absolute/path/to/calendarcn
```

Wrap the route or app with `ThemeProvider`, then render `CalendarCN` with controlled state:

```tsx
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCN,
  ThemeProvider,
  type CalendarEvent,
  type ViewSettings,
  type ViewType,
} from "calendarcn";

const DEFAULT_VIEW_SETTINGS: ViewSettings = {
  showDeclinedEvents: true,
  showWeekNumbers: true,
  showWeekends: true,
};

export const Route = createFileRoute("/")({
  component: CalendarRoute,
});

function CalendarRoute() {
  const [currentDate, setCurrentDate] = React.useState(() => new Date());
  const [events, setEvents] = React.useState<CalendarEvent[]>([]);
  const [selectedEventId, setSelectedEventId] = React.useState<string | null>(
    null,
  );
  const [view, setView] = React.useState<ViewType>("week");
  const [numberOfDays, setNumberOfDays] = React.useState(7);
  const [viewSettings, setViewSettings] = React.useState<ViewSettings>(
    DEFAULT_VIEW_SETTINGS,
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CalendarCN
        currentDate={currentDate}
        events={events}
        selectedEventId={selectedEventId}
        view={view}
        numberOfDays={numberOfDays}
        viewSettings={viewSettings}
        onCurrentDateChange={setCurrentDate}
        onEventChange={(updatedEvent) => {
          setEvents((previousEvents) =>
            previousEvents.map((event) =>
              event.id === updatedEvent.id ? updatedEvent : event,
            ),
          );
        }}
        onSelectedEventIdChange={setSelectedEventId}
        onViewChange={setView}
        onNumberOfDaysChange={setNumberOfDays}
        onViewSettingsChange={setViewSettings}
      />
    </ThemeProvider>
  );
}
```

## Controlled Props

- `currentDate: Date`
  The reference date for the active view.
- `events: CalendarEvent[]`
  The rendered event collection.
- `selectedEventId?: string | null`
  The currently selected event.
- `view: "day" | "week" | "month"`
  The active view mode.
- `numberOfDays: number`
  The selected multi-day count for the dropdown state.
- `viewSettings: ViewSettings`
  Display toggles for weekends, declined events, and week numbers.
- `onCurrentDateChange(date: Date)`
  Fired by navigation, date picker changes, and calendar drag navigation.
- `onEventChange(event: CalendarEvent)`
  Fired when the user edits an event through drag, resize, or the detail panel.
- `onSelectedEventIdChange(eventId: string | null)`
  Fired when event selection changes.
- `onViewChange(view: ViewType)`
  Fired when the user switches view modes.
- `onNumberOfDaysChange(days: number)`
  Fired from the view dropdown shortcuts.
- `onViewSettingsChange(settings: ViewSettings)`
  Fired when the user toggles weekends, declined events, or week numbers.

## Styling

- The package entry imports CalendarCN styles automatically.
- The generated library also emits `calendarcn/styles.css` if the consuming app prefers an explicit stylesheet import.
- CalendarCN uses global Tailwind/CSS variable styling, so load it near the app root.

## Current Scope

- `CalendarCN` is an opinionated full-shell calendar component, not a headless primitive.
- Theme management is provided by the exported `ThemeProvider`.
- The demo app in this repo remains the reference adapter for TanStack Router search params in [src/routes/index.tsx](../src/routes/index.tsx).
