import { Header } from "../Header/Header";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import "./ShowModal.css";

export const ShowModal = ({ showModal, setShowModal, selectedItems, activeTab, cvData }) => {
	const hasSelectedItems = Object.values(selectedItems).some((category) =>
		Object.values(category).some((isSelected) => isSelected)
	);

	const renderExperienceAndEducation = (section) => {
		const sectionData = selectedItems[section];

		if (!sectionData || Object.keys(sectionData).length === 0) return;

		return (
			<section className="resume-section">
				{section === "experience" ? <h2>Professional Experience</h2> : <h2>Education</h2>}

				<ul>
					{Object.entries(sectionData).map(([key, value]) => (
						<li key={key}>{value}</li>
					))}
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
						renderExperienceAndEducation("experience")}
					{selectedItems.education &&
						Object.values(selectedItems.education).length > 0 &&
						renderExperienceAndEducation("education")}
				</div>
			)}

			<ResumeButton showModal={showModal} setShowModal={setShowModal} />
		</section>
	);
};
