import "./CheckBoxItem.css";

export const CheckBoxItem = ({ checked, onChange, label, showBullet = false }) => {
	return (
		<label>
			{showBullet && <span className="custom-bullet"></span>}
			{label}
			<input type="checkbox" checked={checked} onChange={onChange} />
		</label>
	);
};
