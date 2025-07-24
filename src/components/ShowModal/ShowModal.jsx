import { EducationItemResume } from "../EducationItemResume/EducationItemResume";
import { ExperienceItemResume } from "../ExperienceItemResume/ExperienceItemResume";
import { Header } from "../Header/Header";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import "./ShowModal.css";

export const ShowModal = ({ showModal, setShowModal, selectedItems, activeTab, cvData }) => {
	const hasSelectedItems = Object.values(selectedItems).some((category) =>
		Object.values(category).some((isSelected) => isSelected)
	);

	const renderSection = (section) => {
		const sectionData = selectedItems[section];

		if (!sectionData || Object.keys(sectionData).length === 0) return null;

		const valuesSelection = Object.values(sectionData);

		const titles = {
			experience: "Professional Experience",
			education: "Education",
			technicalSkills: "Skills",
			languages: "Languages",
		};
		const title = titles[section];

		const isSkillsOrLanguages = section === "technicalSkills" || section === "languages";

		return (
			<section className="resume-section">
				<h2>{title}</h2>

				{section === "experience" && (
					<>
						{cvData.experience.map((item) => (
							<ExperienceItemResume key={item.id} data={item} valuesSelection={valuesSelection} />
						))}
					</>
				)}

				{section === "education" && (
					<>
						{cvData.education.map((item) => (
							<EducationItemResume key={item.id} data={item} valuesSelection={valuesSelection} />
						))}
					</>
				)}

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

	return (
		<section className="show-modal-container">
			{!hasSelectedItems && <p>There isn't any item selected</p>}
			{hasSelectedItems && (
				<div className="show-modal-resume">
					<Header activeTab={activeTab} personalInfo={cvData.personalInfo} summary={cvData.summary} />
					{selectedItems.experience &&
						Object.values(selectedItems.experience).length > 0 &&
						renderSection("experience")}
					{selectedItems.education &&
						Object.values(selectedItems.education).length > 0 &&
						renderSection("education")}
					{selectedItems.technicalSkills &&
						Object.values(selectedItems.technicalSkills).length > 0 &&
						renderSection("technicalSkills")}
					{selectedItems.languages &&
						Object.values(selectedItems.languages).length > 0 &&
						renderSection("languages")}
				</div>
			)}

			<ResumeButton showModal={showModal} setShowModal={setShowModal} />
		</section>
	);
};
