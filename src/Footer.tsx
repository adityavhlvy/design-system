import { ChannelList } from "./ChannelList";
import { LogoMark } from "./LogoMark";
import { NAV } from "./nav";
import { wrap } from "./wrap";
import type { Channel, ShellProfile } from "./types";
import type { RenderLink } from "./Header";

export interface FooterProps {
  profile: ShellProfile;
  channels: Channel[];
  renderLink: RenderLink;
}

export function Footer({ profile, channels, renderLink }: FooterProps) {
  return (
    <footer className="overflow-hidden bg-sunk pt-20 md:pt-28">
      <div className={`${wrap} grid gap-12 md:grid-cols-12 md:gap-6`}>
        <ChannelList channels={channels} className="md:col-span-6" />
        <nav aria-label="Footer" className="grid grid-cols-2 gap-6 md:col-span-5 md:col-start-8">
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                {renderLink({ to: item.to, className: "hover:text-sea", children: item.label })}
              </li>
            ))}
          </ul>
          <p className="col-span-2 text-mute">{profile.quote}</p>
        </nav>
      </div>

      <div className={`${wrap} mt-20 flex flex-wrap items-center justify-between gap-4 text-sm text-mute md:mt-24`}>
        <span>
          © {new Date().getFullYear()} {profile.name}. Map cells binned from Indonesian province boundaries.
        </span>
        {renderLink({
          to: "/",
          className: "group inline-flex items-center gap-3 text-ink",
          "aria-label": "Home",
          children: <LogoMark arrive={false} className="w-12" />,
        })}
      </div>

      <p aria-hidden="true" className={`${wrap} display mt-8 -mb-[0.2em] text-[min(6.6vw,96px)] leading-none whitespace-nowrap`}>
        {profile.name}
      </p>
    </footer>
  );
}
