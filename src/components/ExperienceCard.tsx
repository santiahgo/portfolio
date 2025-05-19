export const ExperienceCard = ({
	title,
	company,
	description,
	location,
	start,
	end,
	skills,
}: Experience) => {
	return (
		<div
			key={start}
			className="border-b-primary-text flex h-min w-full flex-col gap-4 border-b-2 py-4 last:border-b-0"
		>
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<h4 className="project-title text-primary-text">{title}</h4>
					<span className="text-secondary-text normal-text">
						{start} - {end}
					</span>
				</div>
				<span className="text-secondary-text">
					{company} | {location}
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<ul>
					{description.map((desc, index) => (
						<li
							key={index}
							className="text-secondary-text normal-text ml-3.5 list-disc"
						>
							{desc}
						</li>
					))}
				</ul>
				<div>
					<ul className="flex flex-wrap gap-2">
						{skills.map((skill, index) => (
							<li
								key={index}
								className="text-secondary-text normal-text bg-card-background hover:bg-hover hover:text-primary-text rounded-md px-2 py-1 transition-all duration-200 ease-in-out"
							>
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
