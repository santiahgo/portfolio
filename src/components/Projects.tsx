import gatherly from '../assets/images/gatherly.png';
import hangout from '../assets/images/49ersHangout.png';
import dolla from '../assets/images/dolla.png';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
	// 5 projects for now
	let projects: Project[] = [
		{
			projectName: 'Gatherly',
			description:
				'An event hosting application to make it easy to rent and rent out spaces for events in the United States.',
			image: gatherly,
			github: 'https://github.com/ITSC-4155-Group-1/4155-Project',
			skills: [
				'JavaScript',
				'Vue.js',
				'Node.js',
				'Express.js',
				'MongoDB',
				'Bootstrap',
				'Figma',
				'CSS',
				'HTML',
			],
		},
		{
			projectName: 'Unzipping Grading Tool',
			description:
				'A grading tool for unzipping assignments in a zip file, making it easier to unzip and begin grading assignments.',
			image: null,
			github: 'https://github.com/santiahgo/unzip_tool',
			skills: ['Shell'],
		},
		{
			projectName: 'Go Interpreter',
			description: 'Learning Go by creating an interpreter for a Scheme-like language',
			image: null,
			github: 'https://github.com/santiahgo/go_interpreter',
			skills: ['Go'],
		},
		{
			projectName: '49ersHangout',
			description:
				'This application was built for the sole purpose of creating, hosting, and exploring events.',
			image: hangout,
			github: 'https://github.com/santiahgo/4166-fifth-project',
			skills: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'CSS', 'HTML', 'EJS'],
		},
		{
			projectName: 'Dolla',
			description:
				'Dolla is a pure front-end web application with the idea of allowing users to send and receive money.',
			image: dolla,
			github: 'https://github.com/santiahgo/dolla',
			skills: ['JavaScript', 'React.js', 'HTML', 'CSS'],
		},
	];

	return (
		<div className="w-full">
			{
				projects.map(project => {
					return <ProjectCard {...project} key={project.projectName} />;
				})
			}
		</div>
	);
};
