import { ButtonItem } from "../ButtonItem/ButtonItem";
import "./Skills.css";

export const Skills = ({ activeTab, skills, selectedItems, toggleItemSelected }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>Skills</h2>
			<div className={`items-content ${isInteractive ? "interactive-mode" : ""}`}>
				{isInteractive ? (
					skills.map(({ name, id }) => {
						const isSelected = selectedItems.technicalSkills && id in selectedItems.technicalSkills;

						return (
							<ButtonItem
								key={id}
								isSelected={isSelected}
								name={name}
								onClick={() => toggleItemSelected("technicalSkills", id)}
							/>
						);
					})
				) : (
					<ul className="items-list">
						{skills.map(({ name, id }) => {
							return <li key={id}>{name}</li>;
						})}
					</ul>
				)}
			</div>
		</section>
	);
};
