import { createContext, useContext, useEffect, useState, useMemo } from "react";
import type { ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { readonly children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (globalThis.window !== undefined) {
        // 1. Check if the user has manually chosen a theme before
        const saved = localStorage.getItem("theme") as Theme;
        if (saved) return saved;
        }
        // 2. If no saved preference, ALWAYS default to dark
        return "dark"; 
    });

    useEffect(() => {
        const root = globalThis.window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}