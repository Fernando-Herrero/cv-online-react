import "./ButtonItem.css";

export const ButtonItem = ({ isSelected, onClick, name, level, icon: Icon, color, flag }) => {
	return (
		<button className={`button-item ${isSelected ? "selected" : ""}`} onClick={onClick}>
			{Icon && <Icon className="icon" size={18} color={color} />}
			<div className="button-text">
				<span className="name-flag">
					{name} {flag && <span className="flag">{flag}</span>}
				</span>
				{level && <span className="level">({level})</span>}
			</div>
		</button>
	);
};
