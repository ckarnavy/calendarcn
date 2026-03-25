import { ViewSettings, ViewType } from './week-view-types';
interface ViewDropdownProps {
    view: ViewType;
    numberOfDays: number;
    viewSettings: ViewSettings;
    onSwitchView: (view: ViewType) => void;
    onSetNumberOfDays: (count: number) => void;
    onToggleWeekends: () => void;
    onToggleDeclinedEvents: () => void;
    onToggleWeekNumbers: () => void;
}
export declare function ViewDropdown({ view, numberOfDays, viewSettings, onSwitchView, onSetNumberOfDays, onToggleWeekends, onToggleDeclinedEvents, onToggleWeekNumbers, }: ViewDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
