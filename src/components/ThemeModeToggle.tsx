import { useTheme } from '../providers/ThemeProvider';
import { GoMoon } from 'react-icons/go';
import { GoSun } from 'react-icons/go';

export const ThemeModeToggle = () => {
	const { theme, setTheme } = useTheme();

	const isDark = theme.mode === 'dark';

	const toggleTheme = () => {
		setTheme({ mode: isDark ? 'light' : 'dark' });
	};

	return (
		<label
			htmlFor="theme-toggle"
			className="bg-button-link relative inline-flex h-9 w-20 cursor-pointer items-center justify-between rounded-full px-2"
		>
			<GoSun className="z-10 translate-x-0.5 text-yellow-400" />
			<GoMoon className="z-10 -translate-x-1.5 text-indigo-400" />

			<input
				type="checkbox"
				id="theme-toggle"
				className="sr-only"
				checked={isDark}
				onChange={toggleTheme}
			/>

			<span
				className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-white shadow-md transition-transform duration-300 ${
					isDark ? 'translate-x-10' : 'translate-x-0'
				}`}
			></span>
		</label>
	);
};
