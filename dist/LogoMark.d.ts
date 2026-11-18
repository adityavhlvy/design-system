import { type CSSProperties } from "react";
/**
 * Animated main mark. Writes itself once on mount: the zigzag along its
 * spine, then the wave. Inside a `.group`, hover or keyboard focus redraws
 * the wave. Use it at 48 px wide or more. Below that, use StaticMark small.
 */
export declare function LogoMark({ className, arrive, replay, }: {
    className?: string;
    /** Play the writing on mount. */
    arrive?: boolean;
    /** Force the wave redraw from outside, for demos. */
    replay?: boolean;
}): import("react").JSX.Element;
/** Looping loader: a pen runs the line over a faint copy. Holds still under reduced motion. */
export declare function MarkLoader({ className, label }: {
    className?: string;
    label?: string;
}): import("react").JSX.Element;
/** Still mark. `small` is ΛV alone, for anything under 48 px wide. */
export declare function StaticMark({ className, small, style }: {
    className?: string;
    small?: boolean;
    style?: CSSProperties;
}): import("react").JSX.Element;
