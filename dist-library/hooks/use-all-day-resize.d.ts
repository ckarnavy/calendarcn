import { AllDayResizeState, CalendarEvent } from '../components/week-view-types';
interface UseAllDayResizeOptions {
    days: Date[];
    dayColumnWidth: number;
    allDayContainerRef: React.RefObject<HTMLDivElement | null>;
    events: CalendarEvent[];
    onEventChange?: (event: CalendarEvent) => void;
    onEventClick?: (event: CalendarEvent) => void;
}
interface UseAllDayResizeReturn {
    allDayResizeState: AllDayResizeState | null;
    handleAllDayResizeMouseDown: (e: React.MouseEvent, event: CalendarEvent, edge: "left" | "right" | "move", startColumn: number, endColumn: number) => void;
}
export declare function useAllDayResize({ days, dayColumnWidth, allDayContainerRef, events, onEventChange, onEventClick, }: UseAllDayResizeOptions): UseAllDayResizeReturn;
export {};
