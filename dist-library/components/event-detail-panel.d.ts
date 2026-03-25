import { CalendarEvent } from './week-view-types';
import * as React from "react";
interface EventDetailPanelProps {
    event: CalendarEvent;
    onEventChange?: (event: CalendarEvent) => void;
    onPrevWeek?: () => void;
    onNextWeek?: () => void;
    /** Extra action buttons rendered in the header row (after the "..." menu). */
    headerActions?: React.ReactNode;
}
export declare function EventDetailPanel({ event, onEventChange, onPrevWeek, onNextWeek, headerActions }: EventDetailPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
