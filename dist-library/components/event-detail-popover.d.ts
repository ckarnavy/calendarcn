import { CalendarEvent } from './week-view-types';
interface EventDetailPopoverProps {
    event: CalendarEvent;
    onEventChange?: (event: CalendarEvent) => void;
    onClose: () => void;
    onDockToSidebar: () => void;
    onPrevWeek?: () => void;
    onNextWeek?: () => void;
    /** Which side to prefer for the popover. Defaults to "right". */
    side?: "right" | "bottom" | "left" | "top";
    /** Alignment along the side axis. Defaults to "center". */
    align?: "start" | "center" | "end";
    /**
     * Override the top collision padding. When omitted the header height is
     * used so the popover never overlaps the weekday header. All-day events
     * live *inside* the header, so they pass a small value to avoid being
     * pushed off-screen.
     */
    collisionPaddingTop?: number;
}
export declare function EventDetailPopover({ event, onEventChange, onClose, onDockToSidebar, onPrevWeek, onNextWeek, side, align, collisionPaddingTop, }: EventDetailPopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
