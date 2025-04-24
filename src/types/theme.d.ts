type ThemeMode = 'dark' | 'light' | 'system';

type Theme = {
	mode: ThemeMode;
};

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}