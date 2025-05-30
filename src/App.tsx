import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Experience } from './components/Experience';
import { Introduction } from './components/Introduction';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

function App() {
	const [activeLink, setActiveLink] = useState('experience');
	const isFirstRender = useRef(true);

	const handleSetActiveLink = useCallback(
		(link: string) => {
			setActiveLink(link);
		},
		[activeLink]
	);

	useEffect(() => {
		isFirstRender.current = false;
	}, []);

	const styles = {
		initial: {
			opacity: 0,
			x: 100,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
		exit: {
			opacity: 0,
			x: -100,
		},
	};

	return (
		<div className="bg-background w-full">
			<div className="m-auto w-7xl">
				<NavBar active={activeLink} handleSetActiveLink={handleSetActiveLink} />
				<div className="mt-9 flex gap-10">
					<aside className="w-full">
						<Introduction />
					</aside>
					<section className="flex w-full overflow-hidden">
						<AnimatePresence mode="wait">
							{activeLink === 'experience' && (
								<motion.div
									key="experience"
									variants={styles}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{
										duration: 0.5,
										type: 'spring',
										bounce: 0.2,
										delay: isFirstRender.current ? 0.5 : 0,
									}}
									className="block"
								>
									<Experience />
								</motion.div>
							)}
							{activeLink === 'projects' && (
								<motion.div
									key="projects"
									variants={styles}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{
										duration: 0.5,
										type: 'spring',
										bounce: 0.2,
										delay: isFirstRender.current ? 0.5 : 0,
									}}
									className="block"
								>
									<Projects />
								</motion.div>
							)}
						</AnimatePresence>
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
