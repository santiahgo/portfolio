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
		<div className="border-b-primary-text flex h-min w-full flex-col gap-4 border-b-2 py-4 last:border-b">
			<div className="flex flex-col gap-2">
				<h4 className="project-title text-primary-text">{title}</h4>
				<span className="text-secondary-text">
					{company} | {start} - {end}
				</span>
				<h5 className="text-secondary-text break-words">{location}</h5>
			</div>
			<div className="flex flex-col gap-2">
				<ul>
					{description.map((desc, index) => (
						<li key={index} className="ml-3.5 list-disc text-secondary-text normal-text">
							{desc}
						</li>
					))}
				</ul>
                <div>
                    <ul className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-secondary-text normal-text bg-card-background px-2 py-1 rounded-md">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
			</div>
		</div>
	);
};
