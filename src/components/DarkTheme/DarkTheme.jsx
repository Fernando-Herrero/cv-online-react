import { useEffect, useState } from "react";
import "./DarkTheme.css";

export const DarkTheme = () => {
	const [isDark, setIsDark] = useState(false);

	const onDarkTheme = () => {
		setIsDark((prev) => !prev);
	};

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
		}
	}, [isDark]);

	return (
		<div className="dark-theme-container-component">
			<div className="dark-theme-icon" onClick={onDarkTheme}>
				☀️
			</div>
			<div className={`dark-theme-slider ${isDark ? "dark" : ""}`}></div>
			<div className="dark-theme-icon" onClick={onDarkTheme}>
				🌙
			</div>
		</div>
	);
};
