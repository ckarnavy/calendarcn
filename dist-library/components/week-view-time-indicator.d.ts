import { WeekViewTimeIndicatorProps } from './week-view-types';
/**
 * Current time indicator showing time badge and horizontal lines
 * - Time badge with current time (e.g., "5:48PM") on the left
 * - Thick line on today's column
 * - Thin line on other day columns
 * Updates position every minute
 */
export declare function WeekViewTimeIndicator({ days, hourHeight, scrollDays, scrollStyle, behindSelection, className, }: WeekViewTimeIndicatorProps): import("react/jsx-runtime").JSX.Element | null;
