import { ButtonItem } from "../ButtonItem/ButtonItem";

export const Languages = ({ activeTab, languages, selectedItems, toggleItemSelected }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>Languages</h2>
			<div className={`items-content ${isInteractive ? "interactive-mode" : ""}`}>
				{isInteractive ? (
					languages.map(({ name, id, level }) => {
						const isSelected = id in selectedItems.languages;

						return (
							<ButtonItem
								key={id}
								isSelected={isSelected}
								name={name}
								onClick={() => toggleItemSelected("languages", id)}
								level={level}
							/>
						);
					})
				) : (
					<ul className="items-list">
						{languages.map(({ name, id }) => {
							return <li key={id}>{name}</li>;
						})}
					</ul>
				)}
			</div>
		</section>
	);
};
