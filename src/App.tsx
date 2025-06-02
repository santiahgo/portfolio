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
		<div className="bg-background min-h-screen w-full">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
				<NavBar active={activeLink} handleSetActiveLink={handleSetActiveLink} />
				<div className="mt-8 flex flex-col gap-10 xl:grid xl:grid-cols-2">
					<aside className="w-full self-start xl:sticky xl:top-[121px]">
						<Introduction />
					</aside>
					<section className="w-full">
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
									className="w-full"
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
									className="w-full"
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
