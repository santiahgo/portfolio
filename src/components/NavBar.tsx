import { useEffect, useState } from 'react';
import logo from '../assets/images/Santiago.svg';
import { ThemeModeToggle } from './ThemeModeToggle';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

interface NavBarProps {
	active: string;
	handleSetActiveLink: (link: string) => void;
}

export const NavBar = ({ active, handleSetActiveLink }: NavBarProps) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

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
			id="navbar"
		>
			<div>
				<img src={logo} alt="logo" />
			</div>

			<div className="hidden sm:flex items-center gap-9">
				<ul className="flex gap-9">
					<a
						className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out hover:cursor-pointer ${active === 'experience' ? 'border-b-primary-text text-primary-text border-b-2' : ''}`}
						onClick={() => handleSetActiveLink('experience')}
					>
						<li>Experience</li>
					</a>
					<a
						className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out hover:cursor-pointer ${active === 'projects' ? 'border-b-primary-text text-primary-text border-b-2' : ''}`}
						onClick={() => handleSetActiveLink('projects')}
					>
						<li>Projects</li>
					</a>
				</ul>
				<ThemeModeToggle />
			</div>


			<div className="flex items-center gap-4 sm:hidden">
				<ThemeModeToggle />
				<button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-button-link">
					{showMobileMenu ? <IoCloseOutline size={24} /> : <RxHamburgerMenu size={24} />}
				</button>
			</div>

			{/* mobile menu */}
			{showMobileMenu && (
				<div className="absolute top-full left-0 w-full bg-background shadow-md sm:hidden">
					<ul className="flex flex-col items-center gap-4 py-4">
						<a
							className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out hover:cursor-pointer ${active === 'experience' ? 'border-b-primary-text text-primary-text border-b-2' : ''}`}
							onClick={() => {
								handleSetActiveLink('experience')
								setShowMobileMenu(false);
							}}
						>
							<li>Experience</li>
						</a>
						<a
							className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out hover:cursor-pointer ${active === 'projects' ? 'border-b-primary-text text-primary-text border-b-2' : ''}`}
							onClick={() => {
								handleSetActiveLink('projects')
								setShowMobileMenu(false);
							}}
						>
							<li>Projects</li>
						</a>
					</ul>
				</div>
			)}
		</nav>
	);
};
