import { CheckBoxItem } from "../CheckBoxItem/CheckBoxItem";

export const Education = ({ activeTab, education, selectedItems, toggleCheckedItems }) => {
	const renderInstitutionAndDegree = (isInteractive, id, institution, degree) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						label={<strong>{institution}</strong>}
						checked={selectedItems?.education?.[`${id}-institution`] || false}
						onChange={() => toggleCheckedItems("education", `${id}-institution`)}
					/>

					<CheckBoxItem
						label={degree}
						checked={selectedItems?.education?.[`${id}-degree`] || false}
						onChange={() => toggleCheckedItems("education", `${id}-degree`)}
					/>
				</>
			);
		}
		return (
			<>
				<p>
					<strong>{institution}</strong>
				</p>
				<p>{degree}</p>
			</>
		);
	};

	const renderLocationAndPeriod = (isInteractive, id, location, period) => {
		if (isInteractive) {
			return (
				<>
					<CheckBoxItem
						label={<strong>{location}</strong>}
						checked={selectedItems?.education?.[`${id}-location`] || false}
						onChange={() => toggleCheckedItems("education", `${id}-location`)}
					/>

					<CheckBoxItem
						label={period}
						checked={selectedItems?.education?.[`${id}-period`] || false}
						onChange={() => toggleCheckedItems("education", `${id}-period`)}
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

	return (
		<section className="section-container">
			<h2>Education</h2>
			{education.map(({ institution, degree, period, location, id }) => {
				const isInteractive = activeTab === "Interactive";

				return (
					<div key={id} className="item-content">
						<div className="item-header">
							<div className={`item-title-group ${isInteractive ? "interactive-mode" : ""}`}>
								{renderInstitutionAndDegree(isInteractive, id, institution, degree)}
							</div>
							<div className={`item-subtitle-group ${isInteractive ? "interactive-mode" : ""}`}>
								{renderLocationAndPeriod(isInteractive, id, location, period)}
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
};
