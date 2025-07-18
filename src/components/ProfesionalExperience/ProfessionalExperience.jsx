import "./ProfessionalExperience.css";

export const ProfessionalExperience = ({ activeTab, experience, selectedItems, toggleExperienceItems }) => {
	return (
		<section className="section-container">
			<h2>Professional Experience</h2>
			{experience.map(({ position, company, period, location, responsibilities }, index) => {
				const baseKey = `${position}-${company}`;

				return (
					<div key={`${baseKey}-${index}`} className="experience-content">
						<div className="experience-company-date">
							<div className="experience-company">
								{activeTab === "Interactive" ? (
									<>
										<label>
											<input
												type="checkbox"
												checked={selectedItems?.experience?.[`${baseKey}-company`] || false}
												onChange={() => toggleExperienceItems(`${baseKey}-company`)}
											/>
											<strong>{company}</strong>
										</label>

										<label>
											<input
												type="checkbox"
												checked={selectedItems?.experience?.[`${baseKey}-position`] || false}
												onChange={() => toggleExperienceItems(`${baseKey}-position`)}
											/>
											{position}
										</label>
									</>
								) : (
									<>
										<p>
											<strong>{company}</strong>
										</p>
										<p>{position}</p>
									</>
								)}
							</div>
							<div className="experience-date">
								{activeTab === "Interactive" ? (
									<>
										<label>
											<input
												type="checkbox"
												checked={selectedItems?.experience?.[`${baseKey}-location`] || false}
												onChange={() => toggleExperienceItems(`${baseKey}-location`)}
											/>
											{location}
										</label>

										<label>
											<input
												type="checkbox"
												checked={selectedItems?.experience?.[`${baseKey}-period`] || false}
												onChange={() => toggleExperienceItems(`${baseKey}-period`)}
											/>
											{period}
										</label>
									</>
								) : (
									<>
										<p>
											<strong>{location}</strong>
										</p>
										<p>{period}</p>
									</>
								)}
							</div>
						</div>

						<div className="experience-responsabilities">
							{responsibilities.map((responsability, i) => {
								const key = `${baseKey}-responsability-${i}`;

								return activeTab === "Interactive" ? (
									<label key={key}>
										<input
											type="checkbox"
											checked={selectedItems?.experience?.[key] || false}
											onChange={() => toggleExperienceItems(key)}
										/>
										{responsability}
									</label>
								) : (
									<li key={key}>{responsability}</li>
								);
							})}
						</div>
					</div>
				);
			})}
		</section>
	);
};
