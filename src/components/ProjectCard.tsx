import { LuExternalLink } from 'react-icons/lu';

export const ProjectCard = ({ projectName, description, image, github, skills }: Project) => {
	return (
		<div
			key={projectName}
			className="border-b-primary-text flex h-min w-full gap-3 border-b-2 py-4 last:border-b-0"
		>
			<div className="w-60 flex-shrink-0">
				{image ? (
					<img src={image} alt={projectName} className="mb-4 h-auto w-full rounded" />
				) : (
					<div className="bg-card-background h-40 w-full flex-shrink-0" />
				)}
			</div>
			<div className="flex flex-col gap-2">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:decoration-primary-text text-primary-text project-title flex items-center gap-2 hover:underline"
				>
					<h4>{projectName}</h4>
					<LuExternalLink />
				</a>
				<p className="normal-text text-secondary-text">{description}</p>
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
	);
};
