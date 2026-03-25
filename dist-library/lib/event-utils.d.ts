import { CalendarEvent, PositionedEvent, WeekDay } from '../components/week-view-types';
/** Returns true when a timed event spans across midnight into a different day. */
export declare function isMultiDayEvent(event: CalendarEvent): boolean;
/**
 * Filters events for a specific day (excluding all-day and multi-day events)
 */
export declare function getEventsForDay(events: CalendarEvent[], day: WeekDay): CalendarEvent[];
/**
 * Gets all-day events that span a specific day
 */
export declare function getAllDayEventsForDay(events: CalendarEvent[], day: WeekDay): CalendarEvent[];
/**
 * Calculates positioned events for rendering in the grid.
 * @param rightGapPercent - right gap in percentage. Defaults to 8.
 *   Pass 0 for day view so events fill the full column width.
 */
export declare function calculatePositionedEvents(events: CalendarEvent[], day: WeekDay, rightGapPercent?: number): PositionedEvent[];
/**
 * Groups all-day events by their visual row (for stacking)
 */
export interface AllDayEventRow {
    event: CalendarEvent;
    startColumn: number;
    endColumn: number;
    row: number;
}
export declare function calculateAllDayEventRows(events: CalendarEvent[], days: WeekDay[]): AllDayEventRow[];
