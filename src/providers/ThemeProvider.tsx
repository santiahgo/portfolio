import { createContext, useContext, useState } from 'react';

const initialState: ThemeProviderState = {
	theme: { mode: 'dark' },
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = { mode: 'dark' },
	...props
}: ThemeProviderProps) {
	const [storedTheme, setStoredTheme] = useState<Theme>(defaultTheme);

	const value = {
		theme: storedTheme,
		setTheme: (theme: Theme) => {
			setStoredTheme(theme);
		},
	};

	if (storedTheme.mode === 'system') {
		const systemMode = window.matchMedia('(prefers-color-schema: dark)').matches
			? 'dark'
			: 'light';
		return (
			<ThemeProviderContext.Provider { ...props } value={ value }>
				<div className={ `${ storedTheme.mode }` } data-theme={ `${ systemMode }` }>{ children }</div>
			</ThemeProviderContext.Provider>
		);
	}

    return (
        <ThemeProviderContext.Provider { ...props } value={ value }>
            <div className={ `${ storedTheme.mode }` } data-theme={ `${ storedTheme.mode }` }>{ children }</div>
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) throw new Error('useTheme must be within a ThemeProvider');

    return context;
}
