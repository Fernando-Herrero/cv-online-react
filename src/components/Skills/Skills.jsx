import { CheckBoxItem } from "../CheckBoxItem/CheckBoxItem";
import "./Skills.css";

export const Skills = ({ activeTab, skills, selectedItems, toggleCheckedItems }) => {
	const isInteractive = activeTab === "Interactive";
	return (
		<section className="section-container">
			<h2>Skills</h2>
			{isInteractive ? (
				skills.map(({ name, id }) => (
					<CheckBoxItem
						key={id}
						label={name}
						checked={selectedItems?.technicalSkills?.[id] || false}
						onChange={() => toggleCheckedItems("technicalSkills", id)}
						showBullet={true}
					/>
				))
			) : (
				<ul className="technical-skills-list">
					{skills.map(({ name, id }) => {
						return <li key={id}>{name}</li>;
					})}
				</ul>
			)}
		</section>
	);
};
