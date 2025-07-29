import { ButtonItem } from "../ButtonItem/ButtonItem";

export const Languages = ({ activeTab, languages, selectedItems, toggleItemSelected }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>Languages</h2>
			<div className={`items-content ${isInteractive ? "interactive-mode" : ""}`}>
				{isInteractive ? (
					languages.map(({ name, id, level, flag }) => {
						const isSelected = id in selectedItems.languages;

						return (
							<ButtonItem
								key={id}
								isSelected={isSelected}
								name={name}
								onClick={() => toggleItemSelected("languages", id)}
								level={level}
								flag={flag}
							/>
						);
					})
				) : (
					<ul className="items-list">
						{languages.map(({ name, id, level, flag }) => {
							return <li key={id}>{name}({level}){flag}</li>;
						})}
					</ul>
				)}
			</div>
		</section>
	);
};
