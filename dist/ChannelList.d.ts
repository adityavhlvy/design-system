import type { Channel } from "./types";
/** The one contact list: every channel, same row shape, same order, on every page. */
export declare function ChannelList({ channels, className }: {
    channels: Channel[];
    className?: string;
}): import("react").JSX.Element;
