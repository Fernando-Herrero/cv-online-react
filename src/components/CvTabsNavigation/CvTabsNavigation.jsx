import "./CvTbasNavigation.css";
import { TABS } from "./Tabs";

export const CvTabsNavigation = ({ activeTab, setActiveTab }) => {
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
		</nav>
	);
};
