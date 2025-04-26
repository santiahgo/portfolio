import logo from '../assets/images/Santiago.svg'

export const NavBar = () => {
	return (
		<nav className="flex justify-between items-center pt-8">
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
}
