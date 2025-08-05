export const ItemSection = ({
	title,
	emoji,
	items,
	sectionName,
	activeTab,
	selectedItems,
	toggleItems,
	renderContent,
}) => {
	const isInteractive = activeTab === "Interactive";

	return (
		<section className="section-container">
			<h2>
				{emoji} {title}
			</h2>
			{items.map((item) => {
				const isChecked = !!selectedItems?.[sectionName]?.[item.id];
				return (
					<div key={item.id} className={`item-content ${isChecked ? "border-line" : ""}`}>
						{isInteractive ? (
							<label className="item-checked-wrapper">
								<input
									type="checkbox"
									checked={isChecked}
									onChange={() => toggleItems(sectionName, item.id)}
								/>
								<div className="item-text-interactive">{renderContent(item)}</div>
							</label>
						) : (
							<>{renderContent(item)}</>
						)}
					</div>
				);
			})}
		</section>
	);
};
