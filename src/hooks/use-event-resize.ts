"use client";

import { isSameDay, startOfDay } from "date-fns";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  CalendarEvent,
  EventResizeState,
} from "@/components/week-view-types";

interface UseEventResizeOptions {
  hourHeight: number;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  events: CalendarEvent[];
  days: Date[];
  dayColumnWidth: number;
  timeAxisWidth: number;
  onEventChange?: (event: CalendarEvent) => void;
  onEventClick?: (event: CalendarEvent) => void;
}

interface UseEventResizeReturn {
  resizeState: EventResizeState | null;
  handleResizeMouseDown: (
    e: React.MouseEvent,
    event: CalendarEvent,
    edge: "top" | "bottom",
  ) => void;
}

const DRAG_THRESHOLD_PX = 4;
const SNAP_MINUTES = 15;
const MIN_DURATION_MINUTES = 15;
const AUTO_SCROLL_ZONE_PX = 60;
const AUTO_SCROLL_MAX_SPEED = 12;

function snapToGrid(minutes: number): number {
  return Math.round(minutes / SNAP_MINUTES) * SNAP_MINUTES;
}

function addMinutesToDate(date: Date, minutes: number): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  result.setMinutes(minutes);
  return result;
}

function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

interface ResizeInfo {
  eventId: string;
  event: CalendarEvent;
  edge: "top" | "bottom";
  startClientY: number;
  isResizing: boolean;
  originalStartMinutes: number;
  originalEndMinutes: number;
  originalStartDate: Date;
  originalEndDate: Date;
}

export function useEventResize({
  hourHeight,
  scrollContainerRef,
  events,
  days,
  dayColumnWidth,
  timeAxisWidth,
  onEventChange,
  onEventClick,
}: UseEventResizeOptions): UseEventResizeReturn {
  const [resizeState, setResizeState] = useState<EventResizeState | null>(null);

  const resizeRef = useRef<ResizeInfo | null>(null);
  const onEventChangeRef = useRef(onEventChange);
  const onEventClickRef = useRef(onEventClick);
  const eventsRef = useRef(events);
  const hourHeightRef = useRef(hourHeight);
  const daysRef = useRef(days);
  const dayColumnWidthRef = useRef(dayColumnWidth);
  const timeAxisWidthRef = useRef(timeAxisWidth);

  useEffect(() => {
    onEventChangeRef.current = onEventChange;
  }, [onEventChange]);
  useEffect(() => {
    onEventClickRef.current = onEventClick;
  }, [onEventClick]);
  useEffect(() => {
    eventsRef.current = events;
  }, [events]);
  useEffect(() => {
    hourHeightRef.current = hourHeight;
  }, [hourHeight]);
  useEffect(() => {
    daysRef.current = days;
  }, [days]);
  useEffect(() => {
    dayColumnWidthRef.current = dayColumnWidth;
  }, [dayColumnWidth]);
  useEffect(() => {
    timeAxisWidthRef.current = timeAxisWidth;
  }, [timeAxisWidth]);

  const autoScrollRAFRef = useRef<number | null>(null);
  const autoScrollSpeedRef = useRef(0);

  const handleMouseMoveRef = useRef<((e: MouseEvent) => void) | null>(null);
  const handleMouseUpRef = useRef<(() => void) | null>(null);

  const cancelAutoScroll = useCallback(() => {
    if (autoScrollRAFRef.current !== null) {
      cancelAnimationFrame(autoScrollRAFRef.current);
      autoScrollRAFRef.current = null;
    }
    autoScrollSpeedRef.current = 0;
  }, []);

  const cleanup = useCallback(() => {
    if (handleMouseMoveRef.current) {
      window.removeEventListener("mousemove", handleMouseMoveRef.current);
    }
    if (handleMouseUpRef.current) {
      window.removeEventListener("mouseup", handleMouseUpRef.current);
    }
    cancelAutoScroll();
  }, [cancelAutoScroll]);

  const startAutoScrollLoop = useCallback(() => {
    if (autoScrollRAFRef.current !== null) return;

    const tick = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const speed = autoScrollSpeedRef.current;
      if (speed === 0) {
        autoScrollRAFRef.current = null;
        return;
      }

      container.scrollTop += speed;
      autoScrollRAFRef.current = requestAnimationFrame(tick);
    };

    autoScrollRAFRef.current = requestAnimationFrame(tick);
  }, [scrollContainerRef]);

  useEffect(() => {
    handleMouseMoveRef.current = (e: MouseEvent) => {
      const resize = resizeRef.current;
      if (!resize) return;

      const deltaY = Math.abs(e.clientY - resize.startClientY);
      if (!resize.isResizing && deltaY < DRAG_THRESHOLD_PX) return;

      if (!resize.isResizing) {
        resize.isResizing = true;
      }

      const container = scrollContainerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const absoluteY = e.clientY - containerRect.top + scrollTop;
      const rawMinutes = (absoluteY / hourHeightRef.current) * 60;
      const snappedMinutes = snapToGrid(rawMinutes);

      let newStartMinutes = resize.originalStartMinutes;
      let newEndMinutes = resize.originalEndMinutes;
      let startDate = resize.originalStartDate;
      let endDate = resize.originalEndDate;

      // Column detection (shared for both edges)
      const colWidth = dayColumnWidthRef.current;
      const visibleDays = daysRef.current;
      const gridLeftEdge = containerRect.left + timeAxisWidthRef.current;
      const cursorInGrid = e.clientX - gridLeftEdge;
      const columnIndex = clamp(Math.floor(cursorInGrid / colWidth), 0, visibleDays.length - 1);
      const targetDay = visibleDays[columnIndex];

      if (resize.edge === "top") {
        const isCrossDay = targetDay.getTime() < resize.originalEndDate.getTime() &&
          !isSameDay(targetDay, resize.originalEndDate);

        if (isCrossDay) {
          // Cross-day top: start tracks cursor on target day, end stays on original end day
          // Edge case: cursor at minute 1440 (bottom) of day immediately before end → treat as start-of-end-day
          const dayBeforeEnd = new Date(resize.originalEndDate);
          dayBeforeEnd.setDate(dayBeforeEnd.getDate() - 1);
          dayBeforeEnd.setHours(0, 0, 0, 0);

          if (isSameDay(targetDay, dayBeforeEnd) && snappedMinutes >= 1440) {
            newStartMinutes = 0;
            startDate = resize.originalEndDate;
          } else {
            newStartMinutes = clamp(snappedMinutes, 0, 1440);
            startDate = targetDay;
          }
        } else {
          // Same day: clamp start between 0 and originalEndMinutes - min
          newStartMinutes = clamp(snappedMinutes, 0, resize.originalEndMinutes - MIN_DURATION_MINUTES);
          startDate = resize.originalEndDate;
        }
      } else {
        const isCrossDay = targetDay.getTime() > resize.originalStartDate.getTime() &&
          !isSameDay(targetDay, resize.originalStartDate);

        if (isCrossDay) {
          // Cross-day bottom: keep start on original day, end tracks cursor on target day
          // Edge case: cursor at minute 0 of day immediately after start → treat as end-of-start-day
          const nextDayAfterStart = new Date(resize.originalStartDate);
          nextDayAfterStart.setDate(nextDayAfterStart.getDate() + 1);
          nextDayAfterStart.setHours(0, 0, 0, 0);

          if (isSameDay(targetDay, nextDayAfterStart) && snappedMinutes === 0) {
            newEndMinutes = 1440;
            endDate = resize.originalStartDate;
          } else {
            newEndMinutes = clamp(snappedMinutes, 0, 1440);
            endDate = targetDay;
          }
        } else {
          // Same day: existing same-day clamp logic
          newEndMinutes = clamp(snappedMinutes, resize.originalStartMinutes + MIN_DURATION_MINUTES, 1440);
          endDate = resize.originalStartDate;
        }
      }

      const currentStart = addMinutesToDate(startDate, newStartMinutes);
      const currentEnd = addMinutesToDate(endDate, newEndMinutes);

      setResizeState({
        eventId: resize.eventId,
        event: resize.event,
        originalStart: resize.event.start,
        originalEnd: resize.event.end,
        currentStart,
        currentEnd,
        edge: resize.edge,
        isResizing: true,
        currentEndDate: endDate,
        currentStartDate: startDate,
      });

      // Auto-scroll at top/bottom edges
      const cursorYInContainer = e.clientY - containerRect.top;
      const containerHeight = containerRect.height;

      if (cursorYInContainer < AUTO_SCROLL_ZONE_PX) {
        const dist = cursorYInContainer;
        autoScrollSpeedRef.current =
          -AUTO_SCROLL_MAX_SPEED * (1 - dist / AUTO_SCROLL_ZONE_PX);
        startAutoScrollLoop();
      } else if (cursorYInContainer > containerHeight - AUTO_SCROLL_ZONE_PX) {
        const dist = containerHeight - cursorYInContainer;
        autoScrollSpeedRef.current =
          AUTO_SCROLL_MAX_SPEED * (1 - dist / AUTO_SCROLL_ZONE_PX);
        startAutoScrollLoop();
      } else {
        cancelAutoScroll();
      }
    };

    handleMouseUpRef.current = () => {
      const resize = resizeRef.current;
      if (!resize) return;

      cleanup();

      if (resize.isResizing) {
        setResizeState((prev) => {
          if (!prev) return null;

          const event = eventsRef.current.find((e) => e.id === resize.eventId);
          if (!event) return null;

          const MS_IN_24H = 24 * 60 * 60 * 1000;
          const isLongerThan24h =
            prev.currentEnd.getTime() - prev.currentStart.getTime() > MS_IN_24H;

          onEventChangeRef.current?.({
            ...event,
            start: prev.currentStart,
            end: prev.currentEnd,
            isAllDay: isLongerThan24h,
          });

          return null;
        });
      } else {
        setResizeState(null);
      }

      resizeRef.current = null;
    };
  }, [scrollContainerRef, cleanup, cancelAutoScroll, startAutoScrollLoop]);

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent, event: CalendarEvent, edge: "top" | "bottom") => {
      if (e.button !== 0) return;

      e.stopPropagation();

      onEventClickRef.current?.(event);

      const originalStartMinutes =
        event.start.getHours() * 60 + event.start.getMinutes();
      const originalEndMinutes =
        event.end.getHours() * 60 + event.end.getMinutes();

      const originalStartDate = startOfDay(event.start);
      const originalEndDate = startOfDay(event.end);

      resizeRef.current = {
        eventId: event.id,
        event,
        edge,
        startClientY: e.clientY,
        isResizing: false,
        originalStartMinutes,
        originalEndMinutes,
        originalStartDate,
        originalEndDate,
      };

      setResizeState({
        eventId: event.id,
        event,
        originalStart: event.start,
        originalEnd: event.end,
        currentStart: event.start,
        currentEnd: event.end,
        edge,
        isResizing: false,
        currentEndDate: originalEndDate,
        currentStartDate: originalStartDate,
      });

      if (handleMouseMoveRef.current) {
        window.addEventListener("mousemove", handleMouseMoveRef.current);
      }
      if (handleMouseUpRef.current) {
        window.addEventListener("mouseup", handleMouseUpRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return { resizeState, handleResizeMouseDown };
}
