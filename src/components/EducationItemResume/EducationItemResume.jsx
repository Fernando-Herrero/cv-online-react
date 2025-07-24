export const EducationItemResume = ({ data, valuesSelection }) => {
	const { institution, degree, location, period } = data;
	const hasAnySelected =
		valuesSelection.includes(institution) ||
		valuesSelection.includes(degree) ||
		valuesSelection.includes(location) ||
		valuesSelection.includes(period);

	if (!hasAnySelected) return null;

	return (
		<div>
			{valuesSelection.includes(institution) && <p>{institution}</p>}
			{valuesSelection.includes(degree) && <p>{degree}</p>}
			{valuesSelection.includes(location) && <p>{location}</p>}
			{valuesSelection.includes(period) && <p>{period}</p>}
		</div>
	);
};
