import { useEffect, useState } from 'react';
import logo from '../assets/images/Santiago.svg';

interface NavBarProps {
	active: string;
	handleSetActiveLink: (link: string) => void;
}

export const NavBar = ({ active, handleSetActiveLink }: NavBarProps) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<nav
			className={`sticky z-10 duration-75 ${isScrolled ? 'bg-background' : 'bg-transparent'} top-0 flex items-center justify-between py-6 transition-colors`}
		>
			<div>
				<a href="#">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<ul className="flex gap-9">
				<a
					href="#"
					className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out ${active === 'experience' ? 'border-b-primary-text text-primary-text border-b-2' : ''}`}
					onClick={() => handleSetActiveLink('experience')}
				>
					<li>Experience</li>
				</a>
				<a
					href="#"
					className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out ${active === 'projects' ? 'border-b-primary-text text-primary-text border-b-2' : ''}`}
					onClick={() => handleSetActiveLink('projects')}
				>
					<li>Projects</li>
				</a>
			</ul>
		</nav>
	);
};
