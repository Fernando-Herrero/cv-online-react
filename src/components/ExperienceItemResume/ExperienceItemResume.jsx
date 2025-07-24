export const ExperienceItemResume = ({ data, valuesSelection }) => {
	const { company, position, location, period, responsibilities } = data;
	const normalizedValues = valuesSelection.map((v) => v.trim().toLowerCase());

	const hasAnySelected =
		normalizedValues.includes(company?.trim().toLowerCase() || "") ||
		normalizedValues.includes(position?.trim().toLowerCase() || "") ||
		normalizedValues.includes(location?.trim().toLowerCase() || "") ||
		normalizedValues.includes(period?.trim().toLowerCase() || "") ||
		responsibilities.some((responsability) =>
			normalizedValues.includes(responsability?.trim().toLowerCase() || "")
		);

	if (!hasAnySelected) return null;

	return (
		<div>
			{normalizedValues.includes(company?.trim().toLowerCase() || "") && <p>{company}</p>}
			{normalizedValues.includes(position?.trim().toLowerCase() || "") && <p>{position}</p>}
			{normalizedValues.includes(location?.trim().toLowerCase() || "") && <p>{location}</p>}
			{normalizedValues.includes(period?.trim().toLowerCase() || "") && <p>{period}</p>}
			<ul>
				{responsibilities?.map((responsability, i) =>
					normalizedValues.includes(responsability?.trim().toLowerCase() || "") ? (
						<li key={i}>{responsability}</li>
					) : null
				)}
			</ul>
		</div>
	);
};
