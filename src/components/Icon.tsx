interface IconProps {
	icon: React.ReactNode;
	language: string;
}

export const Icon = ({ icon, language }: IconProps) => {
	return (
		<div className="text-button-link flex flex-col gap-0.5 items-center">
			{icon}
			{language}
		</div>
	);
};
