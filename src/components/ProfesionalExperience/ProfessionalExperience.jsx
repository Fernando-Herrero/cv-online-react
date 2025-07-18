import "./ProfessionalExperience.css";
import { CheckBoxItem } from "../CheckBoxItem/CheckBoxItem.jsx";

export const ProfessionalExperience = ({ activeTab, experience, selectedItems, toggleExperienceItems }) => {
	const renderCompanyAndPosition = (isInteractive, id, company, position) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						label={<strong>{company}</strong>}
						checked={selectedItems?.experience?.[`${id}-company`] || false}
						onChange={() => toggleExperienceItems(`${id}-company`)}
					/>

					<CheckBoxItem
						label={position}
						checked={selectedItems?.experience?.[`${id}-position`] || false}
						onChange={() => toggleExperienceItems(`${id}-position`)}
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
						onChange={() => toggleExperienceItems(`${id}-location`)}
					/>

					<CheckBoxItem
						label={period}
						checked={selectedItems?.experience?.[`${id}-period`] || false}
						onChange={() => toggleExperienceItems(`${id}-period`)}
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
						onChange={() => toggleExperienceItems(key)}
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
					<div key={id} className="experience-content">
						<div className="experience-company-date">
							<div className={`experience-company ${isInteractive ? "interactive-mode" : ""}`}>
								{renderCompanyAndPosition(
									isInteractive,
									id,
									company,
									position,
									selectedItems,
									toggleExperienceItems
								)}
							</div>
							<div className={`experience-date ${isInteractive ? "interactive-mode" : ""}`}>
								{renderLocationAndPeriod(
									isInteractive,
									id,
									location,
									period,
									selectedItems,
									toggleExperienceItems
								)}
							</div>
						</div>

						<div className={`experience-responsabilities ${isInteractive ? "interactive-mode" : ""}`}>
							{renderResponsabilities(
								isInteractive,
								id,
								responsibilities,
								selectedItems,
								toggleExperienceItems
							)}
						</div>
					</div>
				);
			})}
		</section>
	);
};
