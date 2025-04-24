import { ThemeProvider } from './components/ThemeProvider';

function App() {
	return (
		<ThemeProvider>
			<div className="bg-background min-h-screen">
				<h1 className="hero-heading text-primary-text">Hi, I'm Santiago</h1>
			</div>
		</ThemeProvider>
	);
}

export default App;
