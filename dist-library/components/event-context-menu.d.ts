import { CalendarEvent } from './week-view-types';
import * as React from "react";
interface EventContextMenuProps {
    event: CalendarEvent;
    position: {
        x: number;
        y: number;
    };
    onClose: () => void;
    onEventChange?: (event: CalendarEvent) => void;
}
export declare function EventContextMenu({ event, position, onClose, onEventChange, }: EventContextMenuProps): React.ReactPortal;
export {};
