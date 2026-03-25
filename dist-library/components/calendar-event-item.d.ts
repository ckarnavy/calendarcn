import { CalendarEvent, CalendarEventItemProps, EventColor } from './week-view-types';
import * as React from "react";
export declare const eventColorStyles: Record<EventColor, {
    bg: string;
    bgHover: string;
    border: string;
    borderLine: string;
    text: string;
}>;
export declare function CalendarEventItem({ positionedEvent, hourHeight, isPast: isPastProp, isSelected, onClick, dragVariant, overrideStart, overrideEnd, onDragMouseDown, onResizeMouseDown, onEventChange, cursorY, cursorX, fixedWidth, fixedHeight, onContextMenuOpenChange, isSidebarOpen, onDockToSidebar, onClosePopover, onPrevWeek, onNextWeek, className, }: CalendarEventItemProps): import("react/jsx-runtime").JSX.Element;
/** Drag visual variant for all-day events */
export type AllDayDragVariant = "ghost" | "placeholder" | "dragging";
export interface AllDayEventItemProps {
    event: CalendarEvent;
    isPast?: boolean;
    isSelected?: boolean;
    onClick?: (event: CalendarEvent) => void;
    className?: string;
    /** For multi-day events: position info */
    spanStart?: boolean;
    spanEnd?: boolean;
    /** Mousedown handler to initiate horizontal resize or drag */
    onResizeMouseDown?: (e: React.MouseEvent, event: CalendarEvent, edge: "left" | "right" | "move") => void;
    /** Callback when an event is changed (e.g. color change from context menu) */
    onEventChange?: (event: CalendarEvent) => void;
    /** Callback when context menu open state changes */
    onContextMenuOpenChange?: (open: boolean) => void;
    /** Whether the right sidebar is open (controls popover visibility) */
    isSidebarOpen?: boolean;
    /** Callback to dock popover to sidebar */
    onDockToSidebar?: () => void;
    /** Callback to close popover (deselect event) */
    onClosePopover?: () => void;
    /** Navigate to previous week */
    onPrevWeek?: () => void;
    /** Navigate to next week */
    onNextWeek?: () => void;
    /**
     * Percentage of the event's width that is hidden off-screen to the left.
     * Used in day view to offset the title into the visible area so multi-day
     * events always show their title \u2014 \u201csticky title\u201d effect.
     */
    titleOffsetPercent?: number;
    /** Visual variant during drag operations */
    dragVariant?: AllDayDragVariant;
}
export declare function AllDayEventItem({ event, isPast: isPastProp, isSelected, onClick, className, spanStart, spanEnd, onResizeMouseDown, onEventChange, onContextMenuOpenChange, isSidebarOpen, onDockToSidebar, onClosePopover, onPrevWeek, onNextWeek, titleOffsetPercent, dragVariant, }: AllDayEventItemProps): import("react/jsx-runtime").JSX.Element;
