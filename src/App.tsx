import { ThemeProvider } from './providers/ThemeProvider';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';

function App() {
	return (
		<ThemeProvider>
			<div className="bg-background min-h-screen w-screen">
				<div className="m-auto w-7xl">
					<NavBar />
					<div className="flex gap-10">
						<div className="mt-9 w-full">
							<Introduction />
						</div>
						<div className="flex w-full justify-end">
							{/* 
								gonna have experience, projects, and contact components
							*/}
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
