import { CalendarEvent, EventDragState } from '../components/week-view-types';
interface UseEventDragOptions {
    hourHeight: number;
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
    events: CalendarEvent[];
    days: Date[];
    dayColumnWidth: number;
    timeAxisWidth: number;
    onEventChange?: (event: CalendarEvent) => void;
    onEventClick?: (event: CalendarEvent) => void;
    onDragNavigate?: (daysDelta: number) => void;
}
interface UseEventDragReturn {
    dragState: EventDragState | null;
    handleEventMouseDown: (e: React.MouseEvent, event: CalendarEvent) => void;
}
export declare function useEventDrag({ hourHeight, scrollContainerRef, events, days, dayColumnWidth, timeAxisWidth, onEventChange, onEventClick, onDragNavigate, }: UseEventDragOptions): UseEventDragReturn;
export {};
