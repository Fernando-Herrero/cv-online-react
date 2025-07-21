import { ResumeButton } from "../ResumeButton/ResumeButton";
import "./ShowModal.css";

export const ShowModal = ({ showModal, setShowModal, selectedItems }) => {
	const hasSelectedItems = Object.values(selectedItems).some((category) =>
		Object.values(category).some((isSelected) => isSelected)
	);

	return (
		<section className="show-modal-container">
			{!hasSelectedItems && <p>There isn't any item selected</p>}
			<ResumeButton showModal={showModal} setShowModal={setShowModal} />
		</section>
	);
};
