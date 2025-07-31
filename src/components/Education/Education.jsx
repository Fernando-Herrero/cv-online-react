import { ItemSection } from "../ItemSection/ItemSection";

export const Education = (props) => {
	return (
		<ItemSection
			title="Education"
			emoji="🧠"
			items={props.education}
			sectionName="education"
			activeTab={props.activeTab}
			selectedItems={props.selectedItems}
			toggleItems={props.toggleItems}
			renderContent={({ institution, degree, location, period }) => (
				<>
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
				</>
			)}
		/>
	);
};
