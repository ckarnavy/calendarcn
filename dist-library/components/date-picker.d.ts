interface DatePickerProps {
    onDateSelect?: (date: Date) => void;
    currentDate?: Date;
    visibleDays?: Date[];
}
export declare function DatePicker({ onDateSelect, currentDate, visibleDays }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
