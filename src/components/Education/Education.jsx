export const Education = ({ activeTab, education, selectedItems, toggleCheckedItems }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>🧠 Education</h2>
			{education.map(({ id, institution, degree, location, period }) => (
				<div key={id} className="item-content">
					{isInteractive ? (
						<label className="item-checked-wrapper">
							<input
								type="checkbox"
								checked={!!selectedItems?.education?.[id]}
								onChange={() => toggleCheckedItems("education", id)}
							/>

							<div className="item-details">
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
						</label>
					) : (
						<div className="item-details">
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
					)}
				</div>
			))}
		</section>
	);
};
