import { Header } from "../Header/Header";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import "./ShowModal.css";

export const ShowModal = ({ showModal, setShowModal, selectedItems, activeTab, cvData }) => {
	const hasSelectedItems = Object.values(selectedItems).some((category) =>
		Object.values(category).some((isSelected) => isSelected)
	);

	const renderSection = (section) => {
		const sectionData = selectedItems[section];

		if (!sectionData || Object.keys(sectionData).length === 0) return;
		let title = "";
		if (section === "experience") title = "Professional Experience";
		if (section === "education") title = "Education";
		if (section === "technicalSkills") title = "Skills";
		if (section === "languages") title = "Languages";

		const isSkillsOrLanguages = section === "technicalSkills" || section === "languages";

		return (
			<section className="resume-section">
				<h2>{title}</h2>

				<ul>
					{Object.entries(sectionData).map(([key, value]) => {
						if (isSkillsOrLanguages) {
							if (section === "technicalSkills") {
								return <li key={key}>{value.name}</li>;
							}
							if (section === "languages") {
								return (
									<li key={key}>
										{value.name}({value.level})
									</li>
								);
							}
						} else {
							return <li key={key}>{value}</li>;
						}
					})}
				</ul>
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
