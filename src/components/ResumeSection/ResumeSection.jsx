import { EducationItemResume } from "../EducationItemResume/EducationItemResume";
import { ExperienceItemResume } from "../ExperienceItemResume/ExperienceItemResume";

export const ResumeSection = ({ section, selectedItems, cvData }) => {
	const sectionData = selectedItems[section];

	if (!sectionData || Object.keys(sectionData).length === 0) return null;

	const titles = {
		experience: "Professional Experience",
		education: "Education",
		technicalSkills: "Skills",
		languages: "Languages",
	};
	const title = titles[section];

	const isSkillsOrLanguages = section === "technicalSkills" || section === "languages";

	const renderItem = (section, ItemComponent) => {
		return cvData[section]
			.filter((item) => sectionData[item.id])
			.map((item) => <ItemComponent key={item.id} data={item} />);
	};

	return (
		<section className="resume-section">
			<h2>{title}</h2>

			{section === "experience" && renderItem("experience", ExperienceItemResume)}

			{section === "education" && renderItem("education", EducationItemResume)}

			{isSkillsOrLanguages && (
				<div>
					{Object.entries(sectionData).map(([key, value]) => {
						if (section === "technicalSkills") {
							return <p key={key}>{value.name}</p>;
						}
						if (section === "languages") {
							return (
								<p key={key}>
									{value.name}({value.level})
								</p>
							);
						}
						return null;
					})}
				</div>
			)}
		</section>
	);
};
