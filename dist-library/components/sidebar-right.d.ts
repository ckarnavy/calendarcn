export type CalendarColor = "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "gray";
export interface CalendarItem {
    name: string;
    color: CalendarColor;
    visible: boolean;
    isSubscribed?: boolean;
}
export interface CalendarAccount {
    email: string;
    calendars: CalendarItem[];
}
interface SidebarRightProps {
    open?: boolean;
    onDateSelect?: (date: Date) => void;
    currentDate?: Date;
    visibleDays?: Date[];
}
export declare function SidebarRight({ open, onDateSelect, currentDate, visibleDays, }: SidebarRightProps): import("react/jsx-runtime").JSX.Element;
export {};
