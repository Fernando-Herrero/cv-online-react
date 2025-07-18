import "./ProfessionalExperience.css";
import { CheckBoxItem } from "../CheckBoxItem/CheckBoxItem.jsx";

export const ProfessionalExperience = ({ activeTab, experience, selectedItems, toggleExperienceItems }) => {
	const renderCompanyAndPosition = (isInteractive, baseKey, company, position) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						checked={selectedItems?.experience?.[`${baseKey}-company`] || false}
						onChange={() => toggleExperienceItems(`${baseKey}-company`)}
						label={<strong>{company}</strong>}
					/>

					<CheckBoxItem
						checked={selectedItems?.experience?.[`${baseKey}-position`] || false}
						onChange={() => toggleExperienceItems(`${baseKey}-position`)}
						label={position}
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

	const renderLocationAndPeriod = (isInteractive, baseKey, location, period) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						checked={selectedItems?.experience?.[`${baseKey}-location`] || false}
						onChange={() => toggleExperienceItems(`${baseKey}-location`)}
						label={<strong>{location}</strong>}
					/>

					<CheckBoxItem
						checked={selectedItems?.experience?.[`${baseKey}-period`] || false}
						onChange={() => toggleExperienceItems(`${baseKey}-period`)}
						label={period}
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

	const renderResponsabilities = (isInteractive, baseKey, responsabilities) => {
		return responsabilities.map((responsability, i) => {
			const key = `${baseKey}-responsability-${i}`;

			return isInteractive ? (
				<CheckBoxItem
					key={key}
					checked={selectedItems?.experience?.[key] || false}
					onChange={() => toggleExperienceItems(key)}
					label={responsability}
				/>
			) : (
				<li key={key}>{responsability}</li>
			);
		});
	};

	return (
		<section className="section-container">
			<h2>Professional Experience</h2>
			{experience.map(({ position, company, period, location, responsibilities }, index) => {
				const baseKey = `${position}-${company}`;
				const isInteractive = activeTab === "Interactive";

				return (
					<div key={`${baseKey}-${index}`} className="experience-content">
						<div className="experience-company-date">
							<div className={`experience-company ${isInteractive ? "interactive-mode" : ""}`}>
								{renderCompanyAndPosition(
									isInteractive,
									baseKey,
									company,
									position,
									selectedItems,
									toggleExperienceItems
								)}
							</div>
							<div className="experience-date">
								{renderLocationAndPeriod(
									isInteractive,
									baseKey,
									location,
									period,
									selectedItems,
									toggleExperienceItems
								)}
							</div>
						</div>

						<div className="experience-responsabilities">
							{renderResponsabilities(
								isInteractive,
								baseKey,
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
