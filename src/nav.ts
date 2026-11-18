export interface NavItem {
  to: string;
  label: string;
}

export const NAV: NavItem[] = [
  { to: "/projects", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/certifications", label: "Credentials" },
  { to: "/hire", label: "Hire me" },
  { to: "/contact", label: "Contact" },
  { to: "/tools", label: "Tools" },
  { to: "/brand", label: "Brand" },
];
