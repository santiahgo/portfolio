export const ExperienceCard = ({ title, company, description, location, start, end, skills }: Experience) => {
    return (
        <div className="flex flx-col h-min p-4 border">
            <div className="flex flex-col gap-2">
                <h4 className="project-title text-primary-text">{ title }</h4>
            </div>
        </div>
    );
}