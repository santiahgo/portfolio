import { ThemeProvider } from './providers/ThemeProvider';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Experience } from './components/Experience';

function App() {
	return (
		<ThemeProvider>
			<div className="bg-background min-h-screen w-full">
				<div className="m-auto w-7xl">
					<NavBar />
					<div className="mt-9 flex gap-10">
						<div className="w-full">
							<Introduction />
						</div>
						<div className="flex w-full">
							<Experience />
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
