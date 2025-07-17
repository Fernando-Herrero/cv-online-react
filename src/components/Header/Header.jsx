import { useState } from "react";
import "./Header.css";

export const Header = ({ personalInfo, summary }) => {
	const { fullName, title, location, email, phone, linkedin, github } = personalInfo;
	const [hideSummary, setHideSummary] = useState(false);

	const onClickSummary = () => {
		setHideSummary((prev) => !prev);
	};

	return (
		<section className="header-container">
			<div className="header-name-content">
				<h1 className="header-name">{fullName}</h1>

				<div className="header-content">
					<p>{title}</p>
					<p>{location}</p>
					<a href={`mailto:${email}`}>{email}</a>
					<a href={`tel:${phone}`}>+{phone}</a>
					<a href={linkedin} target="_blank">
						Linkedin
					</a>
					<a href={github} target="_blank">
						Github
					</a>
				</div>
			</div>

			<button className="summary-btn" onClick={onClickSummary}>
				{hideSummary ? "Show summary" : "Hide summary"}
			</button>
			{!hideSummary && (
				<div className="header-summary">
					<p className="summary-text">{summary}</p>
				</div>
			)}
		</section>
	);
};
