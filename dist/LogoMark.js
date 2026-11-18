import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { useId } from "react";
import { MARK, SMALL } from "./avnMark";
// The AVN mark. Geometry and meaning: src/lib/avnMark.ts and the /brand page.
// Keyframes: styles.css (.avn-*). Colour comes from `color`, so set text-*.
const viewBox = (m) => `${m.box.x} ${m.box.y} ${m.box.w} ${m.box.h}`;
/** Wide enough to cover the miter tips, which sit t / (2 sin α) off the centreline. */
const TRACE_W = MARK.t * 4;
/**
 * Animated main mark. Writes itself once on mount: the zigzag along its
 * spine, then the wave. Inside a `.group`, hover or keyboard focus redraws
 * the wave. Use it at 48 px wide or more. Below that, use StaticMark small.
 */
export function LogoMark({ className, arrive = true, replay = false, }) {
    const id = useId();
    return (_jsxs("svg", { viewBox: viewBox(MARK), "aria-hidden": "true", className: clsx("avn-mark shrink-0 overflow-visible", arrive && "is-arriving", replay && "is-replaying", className), children: [_jsx("mask", { id: id, maskUnits: "userSpaceOnUse", children: _jsx("path", { d: MARK.trace, pathLength: 1, className: "avn-trace", fill: "none", stroke: "#fff", strokeWidth: TRACE_W }) }), _jsx("path", { d: MARK.zig, mask: `url(#${id})`, className: "fill-current" }), _jsx("path", { d: MARK.wave, pathLength: 1, className: "avn-wave stroke-current", fill: "none", strokeWidth: MARK.t })] }));
}
/** Looping loader: a pen runs the line over a faint copy. Holds still under reduced motion. */
export function MarkLoader({ className, label = "Loading" }) {
    const id = useId();
    return (_jsxs("span", { role: "status", className: clsx("inline-flex flex-col items-center gap-3", className), children: [_jsxs("svg", { viewBox: viewBox(MARK), "aria-hidden": "true", className: "w-full overflow-visible", children: [_jsx("mask", { id: id, maskUnits: "userSpaceOnUse", children: _jsx("path", { d: MARK.trace, pathLength: 1, className: "avn-load", fill: "none", stroke: "#fff", strokeWidth: TRACE_W }) }), _jsx("g", { className: "opacity-15", children: _jsx(StaticPaths, {}) }), _jsx("g", { mask: `url(#${id})`, children: _jsx(StaticPaths, {}) })] }), _jsx("span", { className: "sr-only", children: label })] }));
}
function StaticPaths({ small = false }) {
    if (small)
        return _jsx("path", { d: SMALL.zig, className: "fill-current" });
    return (_jsxs(_Fragment, { children: [_jsx("path", { d: MARK.zig, className: "fill-current" }), _jsx("path", { d: MARK.wave, className: "stroke-current", fill: "none", strokeWidth: MARK.t })] }));
}
/** Still mark. `small` is ΛV alone, for anything under 48 px wide. */
export function StaticMark({ className, small = false, style }) {
    return (_jsx("svg", { viewBox: viewBox(small ? SMALL : MARK), "aria-hidden": "true", className: clsx("overflow-visible", className), style: style, children: _jsx(StaticPaths, { small: small }) }));
}
