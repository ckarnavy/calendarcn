import { ViewType } from './week-view-types';
interface CommandMenuProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onGoToToday: () => void;
    onGoToPrev: () => void;
    onGoToNext: () => void;
    onSwitchView: (view: ViewType) => void;
    onToggleLeftSidebar: () => void;
    onToggleRightSidebar: () => void;
    onCycleTheme: () => void;
}
export declare function CommandMenu({ open, onOpenChange, onGoToToday, onGoToPrev, onGoToNext, onSwitchView, onToggleLeftSidebar, onToggleRightSidebar, onCycleTheme, }: CommandMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
