import { ItemSection } from "../ItemSection/ItemSection";
import "./ExperienceEducation.css"

export const ProfessionalExperience = (props) => {
	return (
		<ItemSection
			title="Professional Experience"
			emoji="💼"
			items={props.experience}
			sectionName="experience"
			activeTab={props.activeTab}
			selectedItems={props.selectedItems}
			toggleCheckedItems={props.toggleCheckedItems}
			renderContent={({ id, image, company, position, location, period, responsibilities }) => (
				<>
					<div className="item-title-group">
						<span className="item-logo-title">
							<img src={image} alt={company} className="item-logo" />
							<p>
								<strong>{company}</strong>
							</p>
						</span>
						<p>{position}</p>
					</div>
					<div className="item-title-group">
						<p>
							<strong>{location}</strong>
						</p>
						<p>{period}</p>
					</div>
					<ul className="experience-responsabilities">
						{responsibilities?.map((res, i) => (
							<li key={`${id}-${i}`}>{res}</li>
						))}
					</ul>
				</>
			)}
		/>
	);
};
