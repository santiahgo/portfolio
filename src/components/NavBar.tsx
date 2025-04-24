export const NavBar = () => {
	return (
		<nav className="flex justify-end pt-5">
			<ul className="flex gap-4">
				<a href="#" className="text-button-link normal-text px-3 py-4">
					<li>Experience</li>
				</a>
				<a href="#" className="text-button-link normal-text px-3 py-4">
					<li>Projects</li>
				</a>
				<a href="#" className="text-button-link normal-text px-3 py-4">
					<li>Contact</li>
				</a>
			</ul>
		</nav>
	);
}
