import "./TabsNavigation.css";
import { TABS } from "./Tabs";
import { InteractiveIntro } from "../InterativeIntro/InteractiveIntro";
import { useState } from "react";

export const TabsNavigation = ({ activeTab, setActiveTab }) => {
	const [showIntro, setShowIntro] = useState(true);

	const onToggleClose = () => {
		setShowIntro((prev) => !prev);
	};
	return (
		<nav className="nav-tabs">
			{Object.entries(TABS).map(([property, value]) => (
				<button
					key={property}
					className={`tab ${activeTab === value ? "active" : ""}`}
					onClick={() => setActiveTab(value)}
					data-tab={value.toLowerCase()}
				>
					{value}
				</button>
			))}
			{activeTab === "Interactive" && showIntro && <InteractiveIntro onToggleClose={onToggleClose} />}
		</nav>
	);
};
