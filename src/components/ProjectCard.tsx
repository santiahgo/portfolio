import { LuExternalLink } from 'react-icons/lu';

export const ProjectCard = ({ projectName, description, image, github, skills }: Project) => {
	return (
		<div
			key={projectName}
			className="border-b-primary-text flex w-full flex-col gap-4 border-b-2 py-4 last:border-b-0 sm:flex-row"
		>
			<div className="w-full flex-shrink-0 sm:w-60">
				{image ? (
					<img
						src={image}
						alt={projectName}
						className="h-auto w-full rounded object-cover"
					/>
				) : (
					<div className="bg-card-background h-40 w-full rounded" />
				)}
			</div>

			<div className="flex flex-col gap-2">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary-text project-title flex items-center gap-2 hover:underline"
				>
					<h4 className="text-base sm:text-lg">{projectName}</h4>
					<LuExternalLink className="text-sm sm:text-base" />
				</a>

				<p className="text-secondary-text text-sm sm:text-base">{description}</p>

				<ul className="flex flex-wrap gap-2">
					{skills.map((skill, index) => (
						<li
							key={index}
							className="text-secondary-text bg-card-background hover:bg-hover hover:text-background dark:hover:text-primary-text rounded-md px-2 py-1 text-xs transition-all duration-200 ease-in-out sm:text-sm"
						>
							{skill}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
