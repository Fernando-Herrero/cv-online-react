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
				<div className="show-modal-resume">
					<Header activeTab={activeTab} personalInfo={cvData.personalInfo} summary={cvData.summary} />
					{selectedItems.experience && Object.values(selectedItems.experience).length > 0 && (
						<div className="selected-items-experience">
							<h2>Experience</h2>
							{selectedItems[experience].map(({ element, value }) => {
								<p>{element}</p>;
							})}
						</div>
					)}
				</div>
			)}

			<ResumeButton showModal={showModal} setShowModal={setShowModal} />
		</section>
	);
};
