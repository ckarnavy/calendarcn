interface UseHorizontalScrollOptions {
    containerRef: React.RefObject<HTMLDivElement | null>;
    dayColumnWidth: number;
    onNavigate: (daysDelta: number) => void;
    disabled?: boolean;
}
interface UseHorizontalScrollReturn {
    scrollOffset: number;
    slideOffset: number;
    isScrolling: boolean;
    isAnimating: boolean;
    triggerSlideAnimation: (daysDelta: number) => void;
}
export declare function useHorizontalScroll({ containerRef, dayColumnWidth, onNavigate, disabled, }: UseHorizontalScrollOptions): UseHorizontalScrollReturn;
export {};
