import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
	let experiences: Experience[] = [
		{
			title: 'Lead Instructional Assistant',
			company: 'The University of North Carolina at Charlotte',
			description: [
				'Managed a group of five instructional assistants during the semester by holding weekly meetings and relaying information from the professor to them',
				'Guided and taught 120+ students Java Object Oriented Programming concepts',
				"Debugged several students' projects using languages and frameworks such as Express.js, EJS, JavaScript, and MongoDB",
			],
			location: 'Charlotte, NC',
			start: 'August 2023',
			end: 'May 2025',
			skills: [
				'Java',
				'Python',
				'EJS',
				'HTML',
				'CSS',
				'Javascript',
				'Node.js',
				'MongoDB',
				'Express.js',
				'Git',
				'GitHub',
				'Problem Solving',
				'Leadership',
				'Communication',
				'Teamwork',
				'Time Management',
				'People Management',
			],
		},
		{
			title: 'Technology Intern, Front-End Engineer',
			company: 'TIAA',
			description: [
				'Attended daily scrum meetings to discuss stories',
				"Utilized Angular.js structural directives to conditionally display information based on the user's JWT token",
				'Implemented unit tests with Jest/Jasmine and end-to-end tests using Cypress/Cucumber, verifying solutions adhered to coding standards',
				'Designed and implemented an interactive UI with Streamlit, incorporating dynamic data extractedfrom articles using prompt engineering',
			],
			location: 'Charlotte, NC',
			start: 'June 2024',
			end: 'August 2024',
			skills: [
				'Angular.js',
				'TypeScript',
				'Scrum',
				'Git',
				'GitLab',
				'Figma',
				'Scrum',
				'Teamwork',
				'Communication',
				'Streamlit',
				'Python',
				'MongoDB',
				'Jest',
				'Jasmine',
				'Cypress',
			],
		},
		{
			title: 'Technology Intern, Front-End Engineer',
			company: 'TIAA',
			description: [
				"Redesigned a component to keep user interactions from resetting using React's useState hook",
				'Gained an understanding of version control and how changes are deployed into production',
				'Designed a user-friendly application on Figma and implemented the design using HTML and CSS',
			],
			location: 'Charlotte, NC',
			start: 'June 2023',
			end: 'August 2023',
			skills: [
				'ReactJS',
				'TypeScript',
				'Scrum',
				'Git',
				'GitLab',
				'Figma',
				'Scrum',
				'Teamwork',
				'Communication',
			],
		},
		{
			title: 'Maintenance Technician',
			company: 'The University of North Carolina at Charlotte',
			description: [
                "Inspected and maintained UNC Charlotte's dormitories, ensuring they were clean and in good condition",
                "Ensured that all furniture and appliances were working properly",
                "Collaborated with the maintenance team to address any issues that arose",
                "Provided feedback to the maintenance team on how to improve the dormitories' cleanliness and maintenance"
            ],
			location: 'Charlotte, NC',
			start: 'May 2022',
			end: 'July 2022',
			skills: [
				'Problem Solving',
				'Time Management',
				'Communication',
				'Attention to Detail',
				'Painting',
				'Teamwork',
				'Safety Awareness',
			],
		},
		{
			title: 'Career Explore Intern',
			company: 'Red Ventures',
			description: [
                'Attended a 6-week internship to gain experience in the field of finance, marketing, and technology',
                'Worked with a team of interns to develop a website using HTML and CSS',
                'Networked with several companies to gain exposure to their career opportunities',
            ],
			location: 'Remote',
			start: 'June 2021',
			end: 'July 2021',
			skills: [
				'Problem Solving',
				'Time Management',
				'Communication',
				'Teamwork',
				'Networking',
				'Financial Literacy',
				'Leadership',
				'HTML',
				'CSS',
			],
		},
		{
			title: 'Career Explore Intern',
			company: 'Red Ventures',
			description: [
                'Attended a 6-week internship to gain experience in the field of finance, marketing, and technology',
                'Participated in several financial literacy activities to improve financial literacy skills',
                'Gained an understanding of the importance of planning ahead and developing a budget',
            ],
			location: 'Remote',
			start: 'June 2020',
			end: 'July 2020',
			skills: [
				'Problem Solving',
				'Time Management',
				'Communication',
				'Teamwork',
				'Networking',
				'Financial Literacy',
				'Leadership',
			],
		},
	];

	return (
		<div className="flex w-full flex-col gap-6 p-0.5">
			{
                experiences.map(experience => {
                    return <ExperienceCard {...experience} key={experience.start} />
                })
            }
		</div>
	);
};
