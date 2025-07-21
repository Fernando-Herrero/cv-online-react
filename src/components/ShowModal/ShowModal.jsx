import { Header } from "../Header/Header";
import { ResumeButton } from "../ResumeButton/ResumeButton";
import "./ShowModal.css";

export const ShowModal = ({ showModal, setShowModal, selectedItems, activeTab, cvData }) => {
	const hasSelectedItems = Object.values(selectedItems).some((category) =>
		Object.values(category).some((isSelected) => isSelected)
	);

	return (
		<section className="show-modal-container">
			{!hasSelectedItems && <p>There isn't any item selected</p>}
			{hasSelectedItems && (
				<Header activeTab={activeTab} personalInfo={cvData.personalInfo} summary={cvData.summary} />
			)}
			<ResumeButton showModal={showModal} setShowModal={setShowModal} />
		</section>
	);
};
