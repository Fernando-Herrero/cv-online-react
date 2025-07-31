import { EducationItemResume } from "../EducationItemResume/EducationItemResume";
import { ExperienceItemResume } from "../ExperienceItemResume/ExperienceItemResume";
import { SelectItemResume } from "../SelectItemResume/SelectItemResume";
import "./ResumeSection.css";

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

	const renderItem = (section, ItemComponent, className) => {
		return cvData[section]
			.filter((item) => sectionData[item.id])
			.map((item) => <ItemComponent key={item.id} data={item} className={className} />);
	};

	return (
		<section className="resume-section">
			<h2>{title}</h2>

			{section === "technicalSkills" || section === "languages" ? (
				<div className={section === "technicalSkills" ? "skills-resume" : "languages-resume"}>
					{section === "technicalSkills" && renderItem("technicalSkills", SelectItemResume, "skills-resume")}
					{section === "languages" && renderItem("languages", SelectItemResume, "languages-resume")}
				</div>
			) : (
				<>
					{section === "experience" && renderItem("experience", ExperienceItemResume)}
					{section === "education" && renderItem("education", EducationItemResume)}
				</>
			)}
		</section>
	);
};
