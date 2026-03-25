import { WeekViewGridProps } from './week-view-types';
/**
 * Main grid displaying hour/day intersection cells with events
 * Each cell represents one hour in one day
 */
export declare function WeekViewGrid({ days, hours, hourHeight, events, onEventClick, selectedEventId, dragState, onEventDragMouseDown, resizeState, onEventResizeMouseDown, onEventChange, onContextMenuOpenChange, isSidebarOpen, onDockToSidebar, onClosePopover, onPrevWeek, onNextWeek, className, }: WeekViewGridProps): import("react/jsx-runtime").JSX.Element;
