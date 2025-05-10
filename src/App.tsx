import { useEffect, useState, useCallback } from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import { NavBar } from './components/NavBar';
import { Introduction } from './components/Introduction';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {
	const [activeLink, setActiveLink] = useState('experience');

	const handleSetActiveLink = useCallback((link: string) => {
		setActiveLink(link);
	}, [activeLink]);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveLink(entry.target.id);
					}
				});
			}
		);

		document.querySelectorAll('section').forEach(section => {
			observer.observe(section);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<ThemeProvider>
			<div className="bg-background min-h-screen w-full">
				<div className="m-auto w-7xl">
					<NavBar active={activeLink} handleSetActiveLink={handleSetActiveLink} />
					<div className="mt-9 flex gap-10">
						<aside className="w-full">
							<Introduction />
						</aside>
						<section
							id="experience"
							className={`flex w-full ${activeLink === 'experience' ? 'block' : 'hidden'}`}
						>
							{activeLink === 'experience' ? <Experience /> : null}
						</section>
						<section
							id="projects"
							className={`flex w-full ${activeLink === 'projects' ? 'block' : 'hidden'}`}
						>
							{ activeLink === 'projects' ? <Projects /> : null }
						</section>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
