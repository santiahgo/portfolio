interface IconProps {
	icon: React.ReactNode;
	language: string;
}

export const Icon = ({ icon, language }: IconProps) => {
	return (
		<div className="text-button-link caption flex flex-col gap-1 items-center w-[50px]">
			{icon}
			{language}
		</div>
	);
};
