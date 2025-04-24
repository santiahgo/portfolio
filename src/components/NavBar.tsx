export function NavBar() {
	return (
		<nav className="flex justify-end py-3">
			<ul className="flex gap-4 me-5">
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
