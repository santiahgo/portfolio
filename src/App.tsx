import { ThemeProvider } from './providers/ThemeProvider';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';

function App() {
	return (
		<ThemeProvider>
			<div className="bg-background min-h-screen w-screen">
				<div className='w-7xl m-auto'>
					<NavBar />
					<Introduction />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
