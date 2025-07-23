import "./ButtonItem.css";

export const ButtonItem = ({ isSelected, onClick, name, level }) => {
	return (
		<button className={`button-item ${isSelected ? "selected" : ""}`} onClick={onClick}>
			{level ? `${name}(${level})` : name}
		</button>
	);
};
