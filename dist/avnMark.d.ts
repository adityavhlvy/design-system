export type Pt = {
    x: number;
    y: number;
};
export declare const PHI: number;
/** Main mark, 48 px and up: ΛVN zigzag plus the wave. Box is φ:1. */
export declare const MARK: {
    H: number;
    spine: Pt[];
    /** Centreline run past both terminals by t. A thick stroke along it reveals the zigzag in order. */
    trace: string;
    r: number;
    /** viewBox that hugs the drawing, overshoot included. */
    box: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    zig: string;
    wave: string;
    /** Stroke angle from the baseline, in degrees. The same for every stroke. */
    angle: number;
    strokes: number;
    t: number;
    o: number;
    slope: number;
};
/** Small mark, under 48 px: ΛV alone, which is also N. Heavier stroke, same angle. */
export declare const SMALL: {
    H: number;
    spine: Pt[];
    /** Centreline run past both terminals by t. A thick stroke along it reveals the zigzag in order. */
    trace: string;
    r: number;
    /** viewBox that hugs the drawing, overshoot included. */
    box: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    zig: string;
    wave: string;
    /** Stroke angle from the baseline, in degrees. The same for every stroke. */
    angle: number;
    strokes: number;
    t: number;
    o: number;
    slope: number;
};
/** Clear space on every side: H/φ², about 8 units. */
export declare const CLEAR: number;
/**
 * 16 px favicon, drawn on the pixel grid. Cap and base sit on whole rows, the
 * flat terminals are exactly 2 px wide, and the outer edges climb 5 px over
 * 14 rows, so every outer corner lands on a pixel corner. That moves the
 * angle by under one degree from the main mark.
 */
export declare const FAVICON: string;
