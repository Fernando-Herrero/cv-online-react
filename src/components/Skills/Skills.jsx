import { ButtonItem } from "../ButtonItem/ButtonItem";
import "./Skills.css";

export const Skills = ({ activeTab, skills, selectedItems, toggleItems }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>🛠️ Skills</h2>
			<div className={`items-content ${isInteractive ? "interactive-mode" : ""}`}>
				{isInteractive ? (
					skills.map(({ name, id, icon: Icon, color }) => {
						const isSelected = selectedItems.technicalSkills && id in selectedItems.technicalSkills;

						return (
							<ButtonItem
								key={id}
								isSelected={isSelected}
								name={name}
								onClick={() => toggleItems("technicalSkills", id)}
								icon={Icon}
								color={color}
							/>
						);
					})
				) : (
					<ul className="items-list">
						{skills.map(({ name, id, icon: Icon, color }) => (
							<li key={id}>
								{Icon && <Icon size={18} color={color} />}
								<span>{name}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};
