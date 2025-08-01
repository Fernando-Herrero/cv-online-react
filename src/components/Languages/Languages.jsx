import { ButtonItem } from "../ButtonItem/ButtonItem";
import "./Languages.css"

export const Languages = ({ activeTab, languages, selectedItems, toggleItems }) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>🌍 Languages</h2>
			<div className={`items-content languages-content ${isInteractive ? "interactive-mode" : ""}`}>
				{isInteractive ? (
					languages.map(({ name, id, level, flag }) => {
						const isSelected = id in selectedItems.languages;

						return (
							<ButtonItem
								key={id}
								isSelected={isSelected}
								name={name}
								onClick={() => toggleItems("languages", id)}
								level={level}
								flag={flag}
							/>
						);
					})
				) : (
					<ul className="items-list languages-list">
						{languages.map(({ name, id, level, flag }) => {
							return (
								<li key={id}>
									<div>
										{name}
										{flag}
									</div>
									<span>({level})</span>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</section>
	);
};
