export function NavBar() {
	return (
		<nav className="flex justify-end p-2">
			<ul className="flex gap-4">
				<a href="#" className="text-button-link normal-text p-3">
					<li>Experience</li>
				</a>
				<a href="#" className="text-button-link normal-text p-3">
					<li>Projects</li>
				</a>
				<a href="#" className="text-button-link normal-text p-3">
					<li>Contact</li>
				</a>
			</ul>
		</nav>
	);
}
