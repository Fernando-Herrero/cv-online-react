export const ExperienceItemResume = ({ data }) => {
	const { id, image, company, position, location, period, responsibilities } = data;

	return (
		<div className="item-details experience-resume">
			<div className="item-title-group">
				<span className="item-logo-title">
					<img src={image} alt={company} className="item-logo" />
					<p>
						<strong>{company}</strong>
					</p>
				</span>
				<p>{position}</p>
			</div>
			<div className="item-title-group">
				<p>
					<strong>{location}</strong>
				</p>
				<p>{period}</p>
			</div>
			<ul className="experience-responsabilities">
				{responsibilities?.map((res, i) => (
					<li key={`${id}-${i}`}>{res}</li>
				))}
			</ul>
		</div>
	);
};
