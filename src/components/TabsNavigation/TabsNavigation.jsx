import "./TabsNavigation.css";
import { TABS } from "./Tabs";
import { InteractiveIntro } from "../InterativeIntro/InteractiveIntro";
import { useState } from "react";
import { storage } from "../../helpers/storage";

export const TabsNavigation = ({ activeTab, setActiveTab }) => {
	const saveIntro = storage.get("messageIntro");
	const [showIntro, setShowIntro] = useState(!saveIntro);

	const onToggleClose = () => {
		setShowIntro((prev) => !prev);
	};
	return (
		<nav className="nav-tabs">
			{Object.entries(TABS).map(([property, value]) => (
				<button
					key={property}
					className={`tab ${activeTab === value ? "active" : ""}`}
					onClick={() => {
						storage.save("activeTab", value);
						setActiveTab(value);
					}}
					data-tab={value.toLowerCase()}
				>
					{value}
				</button>
			))}
			{activeTab === "Interactive" && showIntro && <InteractiveIntro onToggleClose={onToggleClose} />}
		</nav>
	);
};
