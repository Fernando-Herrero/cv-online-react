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
			{items.map((item) => (
				<div key={item.id} className="item-content">
					{isInteractive ? (
						<label className="item-checked-wrapper">
							<input
								type="checkbox"
								checked={!!selectedItems?.[sectionName]?.[item.id]}
								onChange={() => toggleItems(sectionName, item.id)}
							/>
							<div className="item-details">{renderContent(item)}</div>
						</label>
					) : (
						<div className="item-details">{renderContent(item)}</div>
					)}
				</div>
			))}
		</section>
	);
};
