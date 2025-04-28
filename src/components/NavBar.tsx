import { useEffect, useState } from 'react';
import logo from '../assets/images/Santiago.svg';

export const NavBar = () => {
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
		<nav className={`sticky z-10 duration-75 ${isScrolled ? 'bg-background' : 'bg-transparent'} transition-colors top-0 flex items-center justify-between py-6`}>
			<div>
				<a href="#">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<ul className="flex gap-9">
				<a href="#" className="text-button-link normal-text">
					<li>Experience</li>
				</a>
				<a href="#" className="text-button-link normal-text">
					<li>Projects</li>
				</a>
				<a href="#" className="text-button-link normal-text">
					<li>Contact</li>
				</a>
			</ul>
		</nav>
	);
};
