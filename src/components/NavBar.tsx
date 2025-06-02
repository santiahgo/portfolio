import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/images/Santiago.svg';
import { ThemeModeToggle } from './ThemeModeToggle';

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
			className={`sticky z-10 duration-75 ${isScrolled ? 'bg-background' : 'bg-transparent'} top-0 flex w-full items-center justify-between py-6 transition-colors`}
		>
			<div>
				<img src={logo} alt="logo" />
			</div>

			<div className="hidden items-center gap-9 sm:flex">
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
				<button
					onClick={() => setShowMobileMenu(!showMobileMenu)}
					className="text-button-link hover:cursor-pointer"
				>
					{!showMobileMenu && <RxHamburgerMenu size={24} />}
				</button>
			</div>

			{/* mobile menu */}
			<div
				className={`bg-background fixed inset-0 z-50 flex flex-col items-center justify-center transition-transform duration-300 sm:hidden ${
					showMobileMenu ? 'translate-y-0' : '-translate-y-full'
				}`}
			>
				<button
					className="text-button-link absolute top-8 right-5 hover:cursor-pointer"
					onClick={() => setShowMobileMenu(false)}
				>
					<IoCloseOutline size={24} />
				</button>
				<ul className="flex h-full flex-col items-center justify-center gap-4">
					<a
						href="#experience"
						className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out hover:cursor-pointer`}
						onClick={() => {
							handleSetActiveLink('experience');
							setShowMobileMenu(false);
						}}
					>
						<li>Experience</li>
					</a>
					<a
						href="#projects"
						className={`text-button-link normal-text hover:text-primary-text border-b-2 border-transparent transition-all duration-300 ease-in-out hover:cursor-pointer`}
						onClick={() => {
							handleSetActiveLink('projects');
							setShowMobileMenu(false);
						}}
					>
						<li>Projects</li>
					</a>
				</ul>
			</div>
		</nav>
	);
};
