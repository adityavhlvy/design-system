# adityavhlvy design system

The shell and tokens shared by the portfolio and the QR tool. Two apps, one
source for the header, footer, logo, nav, and colour system.

## What is inside

- `Header` and `Footer`, the same components both apps render.
- `LogoMark`, `MarkLoader`, `StaticMark`.
- `ChannelList`.
- `NAV`, the single navigation list.
- `useTheme`, `setTheme`.
- `buttonClass`, `fieldClass`, `chipClass`.
- `tokens.css`, the colours, type, and mark keyframes.

## The link contract

The package does not depend on a router. Each app passes `renderLink`, which
decides whether a link is a client-side route or a plain anchor.

```tsx
import { Header } from "@adityavhlvy/design-system";

<Header
  activePath={pathname}
  onSearch={() => setCommandOpen(true)}
  renderLink={({ to, className, children, ...rest }) => (
    <Link to={to} className={className} {...rest}>
      {children}
    </Link>
  )}
/>
```

The QR app renders the same header with an absolute anchor to the portfolio
origin. That keeps the shell identical without sharing a router.

## Install

```bash
bun add "github:adityavhlvy/design-system#v1"
```

`dist/` is committed, so a git install needs no build step.

## Build

```bash
bun install
bun run build
```
