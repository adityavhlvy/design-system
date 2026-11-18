import type { Channel, ShellProfile } from "./types";
import type { RenderLink } from "./Header";
export interface FooterProps {
    profile: ShellProfile;
    channels: Channel[];
    renderLink: RenderLink;
}
export declare function Footer({ profile, channels, renderLink }: FooterProps): import("react").JSX.Element;
