import { CalendarEvent, EventResizeState } from '../components/week-view-types';
interface UseEventResizeOptions {
    hourHeight: number;
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
    events: CalendarEvent[];
    days: Date[];
    dayColumnWidth: number;
    timeAxisWidth: number;
    onEventChange?: (event: CalendarEvent) => void;
    onEventClick?: (event: CalendarEvent) => void;
    onResizeNavigate?: (daysDelta: number) => void;
}
interface UseEventResizeReturn {
    resizeState: EventResizeState | null;
    handleResizeMouseDown: (e: React.MouseEvent, event: CalendarEvent, edge: "top" | "bottom") => void;
}
export declare function useEventResize({ hourHeight, scrollContainerRef, events, days, dayColumnWidth, timeAxisWidth, onEventChange, onEventClick, onResizeNavigate, }: UseEventResizeOptions): UseEventResizeReturn;
export {};
