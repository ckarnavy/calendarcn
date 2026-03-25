import { CalendarEvent } from '../components/week-view-types';
/**
 * Generates mock events with fixed dates across January–March 2026.
 *
 * Calendar mapping:
 *   me@vmnog.com       → red     (main email)
 *   Work               → blue    (work projects)
 *   Personal           → purple  (personal)
 *   Family             → orange  (family)
 *   Side Projects      → yellow  (side projects)
 *   Fitness            → green   (gym/sports)
 *   Holidays in Brazil → green   (subscribed)
 */
export declare function generateMockEvents(): CalendarEvent[];
