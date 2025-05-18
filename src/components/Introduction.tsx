import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { Icon } from './Icon';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiAngular,
	SiPython,
	SiReact,
	SiExpress,
	SiEjs,
	SiTypescript,
	SiGo,
	SiVuedotjs,
	SiMongodb,
	SiTailwindcss,
	SiJest,
	SiJasmine,
	SiGit,
	SiLinkedin,
	SiGithub,
} from 'react-icons/si';
import Slider from 'react-slick';
import { EmailForm } from './EmailForm';
import { useSpring, animated } from '@react-spring/web'

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

function CustomNextArrow(props: any) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function CustomPrevArrow(props: any) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

export const Introduction = () => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, [])
	
	const carouselSettings = {
		infinite: true,
		speed: 2000,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1,
		centerPadding: '75px',
		cssEase: 'linear',
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
	};

	const slideIn = useSpring({
		opacity: animate ? 1 : 0,
		transform: animate ? 'translateX(0)' : 'translateX(-100%)',
		config: { tension: 150, friction: 15 },
		delay: 500
	})

	return (
		<animated.div style={slideIn} className="sticky top-32 flex h-[80vh] w-xl flex-col justify-between">
			<div className="flex w-xl flex-col gap-3">
				<div className="flex flex-col gap-2">
					<h1 className="hero-heading text-primary-text">Santiago Orozco Buri</h1>
					<Slider {...carouselSettings}>
						{iconLanguage.map((pair, index) => {
							return (
								<Icon
									icon={<pair.icon size={22} />}
									language={pair.language}
									key={index}
								/>
							);
						})}
					</Slider>
				</div>
				<div className="text-secondary-text">
					<p className='normal-text'>
						I am a recent Bachelor of Science in Computer Science graduate with a minor
						in Mathematics. I have experience in several languages such as Javascript,
						Typescript, HTML, CSS, Python, and Java. I am passionate frontend engineer
						who isn't afraid to tackle new problems.
					</p>
				</div>
				<EmailForm />
			</div>
			<div className="text-border flex gap-4">
				<a
					href="https://www.linkedin.com/in/sorozcob/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-hover"
				>
					<SiLinkedin size={28} />
				</a>
				<a
					href="https://github.com/santiahgo"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-hover"
				>
					<SiGithub size={28} />
				</a>
			</div>
		</animated.div>
	);
};
