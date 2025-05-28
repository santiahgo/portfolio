import { createContext, useContext, useLayoutEffect, useState } from 'react';

const initialState: ThemeProviderState = {
	theme: { mode: 'dark' },
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = { mode: 'system' },
	...props
}: ThemeProviderProps) {
	const [storedTheme, setStoredTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme ? { mode: savedTheme as ThemeMode } : defaultTheme;
	});

	const value = {
		theme: storedTheme,
		setTheme: (theme: Theme) => {
			localStorage.setItem('theme', theme.mode);
			setStoredTheme(theme);
		},
	};

	useLayoutEffect(() => {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const mode =
			storedTheme.mode === 'system' ? (prefersDark ? 'dark' : 'light') : storedTheme.mode;

		document.documentElement.className = storedTheme.mode;
		document.documentElement.setAttribute('data-theme', mode);
	}, [storedTheme]);

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);
	if (context === undefined) throw new Error('useTheme must be within a ThemeProvider');
	return context;
};
