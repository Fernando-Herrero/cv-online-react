import "./CheckBoxItem.css";

export const CheckBoxItem = ({ checked, onChange, label }) => {
	return (
		<label>
			<input type="checkbox" checked={checked} onChange={onChange} />
			{label}
		</label>
	);
};
