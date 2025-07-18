import "./ProfessionalExperience.css";
import { CheckBoxItem } from "../CheckBoxItem/CheckBoxItem.jsx";

export const ProfessionalExperience = ({ activeTab, experience, selectedItems, toggleExperienceItems }) => {
	const renderCompanyAndPosition = (isInteractive, id, company, position) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						checked={selectedItems?.experience?.[`${id}-company`] || false}
						onChange={() => toggleExperienceItems(`${id}-company`)}
						label={<strong>{company}</strong>}
					/>

					<CheckBoxItem
						checked={selectedItems?.experience?.[`${id}-position`] || false}
						onChange={() => toggleExperienceItems(`${id}-position`)}
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

	const renderLocationAndPeriod = (isInteractive, id, location, period) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						checked={selectedItems?.experience?.[`${id}-location`] || false}
						onChange={() => toggleExperienceItems(`${id}-location`)}
						label={<strong>{location}</strong>}
					/>

					<CheckBoxItem
						checked={selectedItems?.experience?.[`${id}-period`] || false}
						onChange={() => toggleExperienceItems(`${id}-period`)}
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

	const renderResponsabilities = (isInteractive, id, responsabilities) => {
		return responsabilities.map((responsability, i) => {
			const key = `${id}-${i}`;

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
							<div className="experience-date">
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

						<div className="experience-responsabilities">
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
