import "./ExperienceEducation.css";

export const ProfessionalExperience = ({ activeTab, experience, selectedItems, toggleCheckedItems }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>💼 Professional Experience</h2>
			{experience.map(({ id, image, company, position, location, period, responsibilities }) => (
				<div key={id} className="item-content">
					{isInteractive ? (
						<label className="item-checked-wrapper">
							<input
								type="checkbox"
								checked={!!selectedItems?.experience?.[id]}
								onChange={() => toggleCheckedItems("experience", id)}
							/>

							<div className="item-details">
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
									{responsibilities.map((res, i) => (
										<li key={`${id}-${i}`}>{res}</li>
									))}
								</ul>
							</div>
						</label>
					) : (
						<>
							<div className="item-details">
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
							</div>

							<ul className="experience-responsabilities">
								{responsibilities.map((res, i) => (
									<li key={`${id}-${i}`}>{res}</li>
								))}
							</ul>
						</>
					)}
				</div>
			))}
		</section>
	);
};
