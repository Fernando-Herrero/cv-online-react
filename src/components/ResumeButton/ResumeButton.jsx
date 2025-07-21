import "./ResumeButton.css";

export const ResumeButton = ({ selectedItems }) => {
	const onResumeClick = () => {
		console.log(selectedItems.experience);
	};

	return (
		<button className="resume-btn" onClick={onResumeClick}>
			Resume
		</button>
	);
};
