type Theme = "light" | "dark";
export declare function setTheme(next: Theme): void;
export declare function useTheme(): {
    theme: Theme;
    toggle: () => void;
};
export {};
