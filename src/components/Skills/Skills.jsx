import "./Skills.css";

export const Skills = ({ activeTab, skills, selectedItems, toggleItemSelected }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>Skills</h2>
			<div className={`skills-items-content ${isInteractive ? "interactive-mode" : ""}`}>
				{isInteractive ? (
					skills.map(({ name, id }) => {
						const isSelected = id in selectedItems.technicalSkills;

						return (
							<button
								key={id}
								className={`skill-item ${isSelected ? "selected" : ""}`}
								onClick={() => toggleItemSelected(id)}
							>
								{name}
							</button>
						);
					})
				) : (
					<ul className="technical-skills-list">
						{skills.map(({ name, id }) => {
							return <li key={id}>{name}</li>;
						})}
					</ul>
				)}
			</div>
		</section>
	);
};
