import { ViewType, WeekViewProps } from './week-view-types';
/** Width of the time axis column in pixels (4rem = 64px) */
export declare const TIME_AXIS_WIDTH = 64;
/**
 * Returns the month name, year, and week number for the current date
 */
export declare function getCalendarHeaderInfo(currentDate: Date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6): {
    monthName: string;
    year: string;
    weekNumber: number;
};
/**
 * Returns the visible days starting from the given date (used for sidebar highlighting)
 */
export declare function getVisibleDays(currentDate: Date, view?: ViewType): Date[];
/**
 * Main Week View calendar component
 * Displays a week grid with time slots and supports horizontal scroll navigation
 */
export declare function WeekView({ view, currentDate, events, onEventClick, selectedEventId, onBackgroundClick, onDateChange, onVisibleDaysChange, onEventChange, isSidebarOpen, onDockToSidebar, onClosePopover, onPrevWeek, onNextWeek, className, }: WeekViewProps): import("react/jsx-runtime").JSX.Element;
