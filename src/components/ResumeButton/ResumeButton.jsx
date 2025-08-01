import "./ResumeButton.css";

export const ResumeButton = ({ showModal, setShowModal }) => {
	const onResumeClick = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<button className="toggle-btn" onClick={onResumeClick}>
			{showModal ? "Hide Resume" : "Resume"}
		</button>
	);
};
