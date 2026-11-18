import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChannelList } from "./ChannelList";
import { LogoMark } from "./LogoMark";
import { NAV } from "./nav";
import { wrap } from "./wrap";
export function Footer({ profile, channels, renderLink }) {
    return (_jsxs("footer", { className: "overflow-hidden bg-sunk pt-20 md:pt-28", children: [_jsxs("div", { className: `${wrap} grid gap-12 md:grid-cols-12 md:gap-6`, children: [_jsx(ChannelList, { channels: channels, className: "md:col-span-6" }), _jsxs("nav", { "aria-label": "Footer", className: "grid grid-cols-2 gap-6 md:col-span-5 md:col-start-8", children: [_jsx("ul", { className: "space-y-2", children: NAV.map((item) => (_jsx("li", { children: renderLink({ to: item.to, className: "hover:text-sea", children: item.label }) }, item.to))) }), _jsx("p", { className: "col-span-2 text-mute", children: profile.quote })] })] }), _jsxs("div", { className: `${wrap} mt-20 flex flex-wrap items-center justify-between gap-4 text-sm text-mute md:mt-24`, children: [_jsxs("span", { children: ["\u00A9 ", new Date().getFullYear(), " ", profile.name, ". Map cells binned from Indonesian province boundaries."] }), renderLink({
                        to: "/",
                        className: "group inline-flex items-center gap-3 text-ink",
                        "aria-label": "Home",
                        children: _jsx(LogoMark, { arrive: false, className: "w-12" }),
                    })] }), _jsx("p", { "aria-hidden": "true", className: `${wrap} display mt-8 -mb-[0.2em] text-[min(6.6vw,96px)] leading-none whitespace-nowrap`, children: profile.name })] }));
}
