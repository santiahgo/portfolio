import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
	SiAngular,
	SiCss3,
	SiEjs,
	SiExpress,
	SiGit,
	SiGithub,
	SiGo,
	SiHtml5,
	SiJasmine,
	SiJavascript,
	SiJest,
	SiLinkedin,
	SiMongodb,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from 'react-icons/si';
import Slider from 'react-slick';
import { EmailForm } from './EmailForm';
import { Icon } from './Icon';

const iconLanguage: { language: string; icon: IconType }[] = [
	{ language: 'HTML', icon: SiHtml5 },
	{ language: 'CSS', icon: SiCss3 },
	{ language: 'Tailwind', icon: SiTailwindcss },
	{ language: 'Javascript', icon: SiJavascript },
	{ language: 'Typescript', icon: SiTypescript },
	{ language: 'Angular', icon: SiAngular },
	{ language: 'React', icon: SiReact },
	{ language: 'Vue', icon: SiVuedotjs },
	{ language: 'Express.js', icon: SiExpress },
	{ language: 'EJS', icon: SiEjs },
	{ language: 'Python', icon: SiPython },
	{ language: 'Go', icon: SiGo },
	{ language: 'MongoDB', icon: SiMongodb },
	{ language: 'Jest', icon: SiJest },
	{ language: 'Jasmine', icon: SiJasmine },
	{ language: 'Git', icon: SiGit },
];

export const Introduction = () => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);

	const carouselSettings = {
		infinite: true,
		speed: 1500,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1,
		cssEase: 'linear',
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 9,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	};	

	const slideIn = useSpring({
		opacity: animate ? 1 : 0,
		transform: animate ? 'translateX(0)' : 'translateX(-100%)',
		config: { tension: 150, friction: 15 },
		delay: 500,
	});

	return (
		<animated.div style={slideIn} className="grid w-full grid-cols-1 gap-6">
			<div className="flex flex-col items-start gap-4">
				<h1 className="text-primary-text text-2xl font-bold sm:text-3xl md:text-4xl">
					Santiago Orozco Buri
				</h1>

				<div className="w-full overflow-hidden">
					<Slider {...carouselSettings}>
						{iconLanguage.map((pair, index) => (
							<Icon
								icon={<pair.icon size={24} />}
								language={pair.language}
								key={index}
							/>
						))}
					</Slider>
				</div>
			</div>

			<div className="text-secondary-text text-sm leading-relaxed sm:text-base">
				<p>
					I am a recent Bachelor of Science in Computer Science graduate with a minor in
					Mathematics. I have experience in several languages such as Javascript,
					Typescript, HTML, CSS, Python, and Java. I am a frontend engineer who isn't
					afraid to tackle new problems.
				</p>
			</div>
			<EmailForm />
			<div className="flex justify-start gap-6 pt-2">
				<a
					href="https://www.linkedin.com/in/sorozcob/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-secondary-text hover:text-hover"
				>
					<SiLinkedin size={24} />
				</a>
				<a
					href="https://github.com/santiahgo"
					target="_blank"
					rel="noopener noreferrer"
					className="text-secondary-text hover:text-hover"
				>
					<SiGithub size={24} />
				</a>
			</div>
		</animated.div>
	);
};
