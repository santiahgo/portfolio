import { ThemeProvider } from './providers/ThemeProvider';
import { NavBar } from './components/NavBar'

function App() {
	return (
		<ThemeProvider>
			<div className="bg-background min-h-screen w-screen">
				<NavBar />
			</div>
		</ThemeProvider>
	);
}

export default App;
