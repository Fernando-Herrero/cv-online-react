import { Header } from "../Header/Header";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import { ResumeSection } from "../ResumeSection/ResumeSection";
import "./ShowModal.css";

export const ShowModal = ({ showModal, setShowModal, selectedItems, activeTab, cvData }) => {
	const hasSelectedItems = Object.values(selectedItems).some((category) =>
		Object.values(category).some((isSelected) => isSelected)
	);

	return (
		<>
			<div className="overlay"></div>
			<section className={`show-modal-container ${hasSelectedItems ? "" : "no-items-selected"}`}>
				{!hasSelectedItems && <p className="no-items-message">There isn't any item selected</p>}
				{hasSelectedItems && (
					<div className="show-modal-resume">
						<Header activeTab={activeTab} personalInfo={cvData.personalInfo} summary={cvData.summary} />
						{<ResumeSection section="experience" selectedItems={selectedItems} cvData={cvData} />}
						{<ResumeSection section="education" selectedItems={selectedItems} cvData={cvData} />}
						{<ResumeSection section="technicalSkills" selectedItems={selectedItems} cvData={cvData} />}
						{<ResumeSection section="languages" selectedItems={selectedItems} cvData={cvData} />}
					</div>
				)}

				<ResumeButton showModal={showModal} setShowModal={setShowModal} />
			</section>
		</>
	);
};
