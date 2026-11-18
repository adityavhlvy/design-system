import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PiArrowUpRightBold, PiEnvelopeSimpleBold, PiGithubLogoBold, PiGitlabLogoBold, PiInstagramLogoBold, PiLinkBold, PiLinkedinLogoBold, PiPhoneBold, PiSpotifyLogoBold, } from "react-icons/pi";
import clsx from "clsx";
const ICON = {
    Email: PiEnvelopeSimpleBold,
    Phone: PiPhoneBold,
    LinkedIn: PiLinkedinLogoBold,
    GitHub: PiGithubLogoBold,
    GitLab: PiGitlabLogoBold,
    Instagram: PiInstagramLogoBold,
    Spotify: PiSpotifyLogoBold,
};
/** The one contact list: every channel, same row shape, same order, on every page. */
export function ChannelList({ channels, className }) {
    return (_jsx("ul", { className: clsx("grid border-t border-current/15 sm:grid-cols-2 sm:gap-x-10", className), children: channels.map((c) => {
            const Icon = ICON[c.name] ?? PiLinkBold;
            return (_jsx("li", { className: "border-b border-current/15", children: _jsxs("a", { href: c.href, ...(c.external ? { target: "_blank", rel: "noreferrer me" } : {}), className: "group flex min-h-14 items-center gap-4 py-3 transition-colors hover:text-sea", children: [_jsx(Icon, { "aria-hidden": "true", className: "shrink-0 text-xl" }), _jsx("span", { className: "font-medium", children: c.name }), _jsx("span", { className: "min-w-0 flex-1 truncate text-right text-sm opacity-70", children: c.handle }), _jsx(PiArrowUpRightBold, { "aria-hidden": "true", className: "shrink-0 opacity-60 transition-transform duration-300 group-hover:rotate-45" })] }) }, c.name));
        }) }));
}
