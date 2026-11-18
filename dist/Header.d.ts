import { type ReactNode } from "react";
export interface ShellLinkProps {
    to: string;
    className: string;
    children: ReactNode;
    onClick?: () => void;
    "aria-label"?: string;
    "aria-current"?: "page";
}
export type RenderLink = (props: ShellLinkProps) => ReactNode;
export interface HeaderProps {
    activePath: string;
    onSearch: () => void;
    renderLink: RenderLink;
}
export declare function Header({ activePath, onSearch, renderLink }: HeaderProps): import("react").JSX.Element;
