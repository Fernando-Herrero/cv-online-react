import "./ProfessionalExperience.css";
import { CheckBoxItem } from "../CheckBoxItem/CheckBoxItem.jsx";

export const ProfessionalExperience = ({ activeTab, experience, selectedItems, toggleCheckedItems }) => {
	const renderCompanyAndPosition = (isInteractive, id, company, position) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						label={<strong>{company}</strong>}
						checked={selectedItems?.experience?.[`${id}-company`] || false}
						onChange={() => toggleCheckedItems("experience", `${id}-company`, company)}
					/>

					<CheckBoxItem
						label={position}
						checked={selectedItems?.experience?.[`${id}-position`] || false}
						onChange={() => toggleCheckedItems("experience", `${id}-position`, position)}
					/>
				</>
			);
		}
		return (
			<>
				<p>
					<strong>{company}</strong>
				</p>
				<p>{position}</p>
			</>
		);
	};

	const renderLocationAndPeriod = (isInteractive, id, location, period) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						label={<strong>{location}</strong>}
						checked={selectedItems?.experience?.[`${id}-location`] || false}
						onChange={() => toggleCheckedItems("experience", `${id}-location`, location)}
					/>

					<CheckBoxItem
						label={period}
						checked={selectedItems?.experience?.[`${id}-period`] || false}
						onChange={() => toggleCheckedItems("experience", `${id}-period`, period)}
					/>
				</>
			);
		}
		return (
			<>
				<p>
					<strong>{location}</strong>
				</p>
				<p>{period}</p>
			</>
		);
	};

	const renderResponsabilities = (isInteractive, id, responsabilities) => {
		if (isInteractive) {
			return responsabilities.map((responsability, i) => {
				const key = `${id}-${i}`;

				return (
					<CheckBoxItem
						key={key}
						label={responsability}
						checked={selectedItems?.experience?.[key] || false}
						onChange={() => toggleCheckedItems("experience", key, responsability)}
						showBullet={true}
					/>
				);
			});
		}
		return (
			<ul>
				{responsabilities.map((responsability, i) => {
					const key = `${id}-${i}`;
					return <li key={key}>{responsability}</li>;
				})}
			</ul>
		);
	};

	return (
		<section className="section-container">
			<h2>Professional Experience</h2>
			{experience.map(({ position, company, period, location, responsibilities, id }) => {
				const isInteractive = activeTab === "Interactive";

				return (
					<div key={id} className="item-content">
						<div className="item-header">
							<div className={`item-title-group ${isInteractive ? "interactive-mode" : ""}`}>
								{renderCompanyAndPosition(isInteractive, id, company, position)}
							</div>
							<div className={`item-subtitle-group ${isInteractive ? "interactive-mode" : ""}`}>
								{renderLocationAndPeriod(isInteractive, id, location, period)}
							</div>
						</div>

						<div className={`experience-responsabilities ${isInteractive ? "interactive-mode" : ""}`}>
							{renderResponsabilities(isInteractive, id, responsibilities)}
						</div>
					</div>
				);
			})}
		</section>
	);
};
