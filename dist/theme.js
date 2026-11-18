import { useSyncExternalStore } from "react";
const listeners = new Set();
const read = () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
export function setTheme(next) {
    document.documentElement.dataset.theme = next;
    try {
        localStorage.setItem("theme", next);
    }
    catch {
        // Private mode: the choice just will not persist.
    }
    listeners.forEach((l) => l());
}
export function useTheme() {
    const theme = useSyncExternalStore((l) => (listeners.add(l), () => listeners.delete(l)), read, () => "light");
    return { theme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") };
}
