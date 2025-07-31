import "./SelectedItems.css";

export const SelectItemResume = ({ data, className }) => {
	const { name, level, flag } = data;
	return (
		<div className="resume-skills-languages">
			<p>
				{name}
				{flag && <span>{flag}</span>}
			</p>
			{level && (
				<p>
					<span>({level})</span>
				</p>
			)}
		</div>
	);
};
