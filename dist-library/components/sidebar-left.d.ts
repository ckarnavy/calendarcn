import { Sidebar } from './ui/sidebar';
import { CalendarEvent } from './week-view-types';
import * as React from "react";
interface SidebarLeftProps extends React.ComponentProps<typeof Sidebar> {
    events?: CalendarEvent[];
    selectedEvent?: CalendarEvent | null;
    onEventChange?: (event: CalendarEvent) => void;
    onPrevWeek?: () => void;
    onNextWeek?: () => void;
}
export declare function SidebarLeft({ events, selectedEvent, onEventChange, onPrevWeek, onNextWeek, ...props }: SidebarLeftProps): import("react/jsx-runtime").JSX.Element;
export {};
