import { useState } from "react";
import "./Header.css";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

export const Header = ({ activeTab, personalInfo, summary }) => {
	const { fullName, title, location, email, linkedin, github } = personalInfo;
	const [hideSummary, setHideSummary] = useState(false);

	const onClickSummary = () => {
		setHideSummary((prev) => !prev);
	};

	return (
		<section className="section-container">
			<div className="header-content">
				<h1 className="header-name">{fullName}</h1>

				<div className="header-text-anc">
					<p className="header-text">
						<FaLaptopCode size={18} />
						<strong>{title}</strong>
					</p>
					<p className="header-text">
						<MdLocationOn size={18} className="icon-location" />
						{location}
					</p>
				</div>

				<div className="header-text-anc">
					<a href={`mailto:${email}`}>
						<SiGmail size={18} color="#D14836" />
					</a>
					<a href={linkedin} target="_blank">
						<SiLinkedin size={18} color="#0A66C2" />
					</a>
					<a href={github} target="_blank">
						<SiGithub size={18} color="#181717" />
					</a>
				</div>
			</div>

			<button className={`summary-btn ${activeTab !== "Interactive" ? "hide" : ""}`} onClick={onClickSummary}>
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
