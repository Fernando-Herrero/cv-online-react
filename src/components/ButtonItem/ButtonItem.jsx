import "./ButtonItem.css";

export const ButtonItem = ({ isSelected, onClick, name, level, icon: Icon, color, flag }) => {
	return (
		<button className={`button-item ${isSelected ? "selected" : ""}`} onClick={onClick}>
			{Icon && <Icon className="icon" size={18} color={color} />}
			{level ? `${name}(${level})` : name}
			{flag && <span className="flag">{flag}</span>}
		</button>
	);
};
