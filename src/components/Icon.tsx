interface IconProps {
	icon: React.ReactNode;
	language: string;
}

export const Icon = ({ icon, language }: IconProps) => {
	return (
		<div className="text-button-link caption flex w-[50px] flex-col items-center gap-1">
			{icon}
			{language}
		</div>
	);
};
