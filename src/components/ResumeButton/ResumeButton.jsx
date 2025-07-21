import "./ResumeButton.css";

export const ResumeButton = ({ showModal, setShowModal }) => {
	const onResumeClick = () => {
		console.log(setShowModal);
		setShowModal((prev) => !prev);
	};

	return (
		<button className="resume-btn" onClick={onResumeClick}>
			{showModal ? "Hide Resume" : "Resume"}
		</button>
	);
};
