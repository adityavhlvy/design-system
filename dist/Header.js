import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { PiListBold, PiMagnifyingGlassBold, PiMoonBold, PiSunBold, PiXBold } from "react-icons/pi";
import clsx from "clsx";
import { LogoMark } from "./LogoMark";
import { NAV } from "./nav";
import { useTheme } from "./theme";
import { ease } from "./motion";
const TOP = NAV.filter((item) => item.to !== "/hire");
const isActive = (path, to) => to === "/" ? path === "/" : path === to || path.startsWith(`${to}/`);
export function Header({ activePath, onSearch, renderLink }) {
    const { theme, toggle } = useTheme();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    // Slide away while reading down, come back the moment the reader scrolls up.
    useMotionValueEvent(scrollY, "change", (y) => {
        const prev = scrollY.getPrevious() ?? 0;
        setHidden(y > prev && y > 240);
        setScrolled(y > 8);
    });
    useEffect(() => setMenuOpen(false), [activePath]);
    useEffect(() => {
        if (!menuOpen)
            return;
        const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [menuOpen]);
    const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
    return (_jsxs(_Fragment, { children: [_jsx(motion.header, { animate: { y: hidden && !menuOpen ? "-100%" : 0 }, transition: { duration: 0.45, ease }, className: clsx("fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300", menuOpen
                    ? "border-transparent bg-paper"
                    : scrolled
                        ? "border-line bg-paper/80 backdrop-blur-md"
                        : "border-transparent bg-transparent"), children: _jsxs("div", { className: "mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 md:px-10", children: [renderLink({
                            to: "/",
                            className: "group mr-auto flex items-center gap-2.5",
                            "aria-label": "adityavhlvy, home",
                            children: (_jsxs(_Fragment, { children: [_jsx(LogoMark, { className: "w-12" }), _jsx("span", { className: "text-[15px] font-semibold tracking-tight [font-variation-settings:'wdth'_112]", children: "adityavhlvy" })] })),
                        }), _jsx("nav", { "aria-label": "Primary", className: "hidden lg:block", children: _jsx("ul", { className: "flex items-center gap-1", children: TOP.map((item) => {
                                    const active = isActive(activePath, item.to);
                                    return (_jsx("li", { children: renderLink({
                                            to: item.to,
                                            className: "relative block px-3 py-2 text-sm",
                                            "aria-current": active ? "page" : undefined,
                                            children: (_jsxs(_Fragment, { children: [_jsx("span", { className: clsx("transition-colors", active ? "text-ink" : "text-mute hover:text-ink"), children: item.label }), active && (_jsx(motion.span, { layoutId: "nav-mark", className: "absolute inset-x-3 -bottom-px h-0.5 bg-sea", transition: { type: "spring", stiffness: 420, damping: 36 } }))] })),
                                        }) }, item.to));
                                }) }) }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsxs("button", { type: "button", onClick: onSearch, "aria-label": "Jump to a page or project", className: "hidden h-9 items-center gap-2 px-2 text-mute transition-colors hover:text-ink sm:flex", children: [_jsx(PiMagnifyingGlassBold, { "aria-hidden": "true" }), _jsx("kbd", { className: "border border-line px-1.5 py-0.5 font-mono text-[11px] leading-none", children: isMac ? "⌘K" : "Ctrl K" })] }), _jsx("button", { type: "button", onClick: toggle, "aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme", className: "grid size-9 place-items-center text-mute transition-colors hover:text-ink", children: _jsx(AnimatePresence, { mode: "wait", initial: false, children: _jsx(motion.span, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.25 }, children: theme === "dark" ? _jsx(PiSunBold, { "aria-hidden": "true" }) : _jsx(PiMoonBold, { "aria-hidden": "true" }) }, theme) }) }), renderLink({
                                    to: "/hire",
                                    className: "ml-2 hidden h-9 items-center gap-2 bg-sea px-4 text-sm font-medium text-on-sea transition-colors hover:bg-ink hover:text-paper md:inline-flex",
                                    children: (_jsxs(_Fragment, { children: [_jsxs("span", { "aria-hidden": "true", className: "relative flex size-1.5", children: [_jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-current opacity-60" }), _jsx("span", { className: "relative size-1.5 rounded-full bg-current" })] }), "Hire me"] })),
                                }), _jsx("button", { type: "button", onClick: () => setMenuOpen((open) => !open), "aria-expanded": menuOpen, "aria-controls": "mobile-menu", "aria-label": menuOpen ? "Close menu" : "Open menu", className: "grid size-9 place-items-center lg:hidden", children: menuOpen ? _jsx(PiXBold, { "aria-hidden": "true" }) : _jsx(PiListBold, { "aria-hidden": "true" }) })] })] }) }), _jsx(AnimatePresence, { children: menuOpen && (_jsxs(motion.div, { id: "mobile-menu", initial: { clipPath: "inset(0 0 100% 0)" }, animate: { clipPath: "inset(0 0 0% 0)" }, exit: { clipPath: "inset(0 0 100% 0)" }, transition: { duration: 0.5, ease }, className: "fixed inset-0 z-30 flex flex-col bg-paper px-5 pt-24 pb-8 lg:hidden", children: [_jsx("nav", { "aria-label": "Mobile", children: _jsx("ul", { className: "space-y-1", children: [{ to: "/", label: "Home" }, ...NAV].map((item, index) => (_jsx(motion.li, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.12 + index * 0.05, duration: 0.5, ease }, children: renderLink({
                                        to: item.to,
                                        className: clsx("display block py-2 text-5xl", isActive(activePath, item.to) ? "text-sea" : "text-ink"),
                                        onClick: () => setMenuOpen(false),
                                        children: item.label,
                                    }) }, item.to))) }) }), _jsxs("button", { type: "button", onClick: () => {
                                setMenuOpen(false);
                                onSearch();
                            }, className: "mt-auto flex h-11 items-center gap-2 self-start border border-line px-4 text-sm text-mute", children: [_jsx(PiMagnifyingGlassBold, { "aria-hidden": "true" }), " Jump to a project"] })] })) })] }));
}
