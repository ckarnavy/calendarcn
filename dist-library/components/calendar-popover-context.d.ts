import { ViewType } from './week-view-types';
import * as React from "react";
/**
 * Context to provide the collision boundary element, header inset,
 * and current view type for event detail popovers.
 * - boundary: the outer calendar container (so popovers can position freely)
 * - headerHeight: the height of the weekday header + all-day row,
 *   used as top collision padding so popovers never overlap the header.
 * - view: current calendar view ("day" | "week") — in day view, the collision
 *   boundary is skipped so Radix uses the viewport for positioning.
 * - boundaryRight: the right-edge x-coordinate (in viewport px) of the
 *   calendar boundary. Used in day view to place a fixed-position popover
 *   anchor at the calendar's right edge so popovers match Notion Calendar.
 */
interface CalendarPopoverBoundaryValue {
    boundary: HTMLElement | null;
    headerHeight: number;
    view: ViewType;
    /** Right edge of the calendar boundary in viewport pixels. */
    boundaryRight: number;
    /**
     * Bottom edge of the header (weekday + all-day row) in viewport pixels.
     * Used as collision padding top in day view so the popover never overlaps
     * the header area when the collision boundary is the viewport.
     */
    headerBottom: number;
}
export declare function CalendarPopoverBoundaryProvider({ boundaryRef, headerRef, view, children, }: {
    boundaryRef: React.RefObject<HTMLElement | null>;
    headerRef: React.RefObject<HTMLElement | null>;
    view?: ViewType;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useCalendarPopoverBoundary(): CalendarPopoverBoundaryValue;
export {};
