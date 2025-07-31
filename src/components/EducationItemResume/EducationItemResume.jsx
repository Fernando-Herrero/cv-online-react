export const EducationItemResume = ({ data }) => {
	const { institution, degree, location, period } = data;
	return (
		<div className="item-content">
			<div className="item-title-group">
				<p>
					<strong>{institution}</strong>
				</p>
				<p>{degree}</p>
			</div>
			<div className="item-title-group">
				<p>
					<strong>{location}</strong>
				</p>
				<p>{period}</p>
			</div>
		</div>
	);
};
