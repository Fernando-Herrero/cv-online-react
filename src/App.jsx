import { useState } from "react";
import "./App.css";
import { TabsNavigation } from "./components/TabsNavigation/TabsNavigation";
import { TABS } from "./components/TabsNavigation/Tabs";
import { Header } from "./components/Header/Header";
import { ProfessionalExperience } from "./components/ProfesionalExperience/ProfessionalExperience";
import { ResumeButton } from "./components/ResumeButton/ResumeButton";
import { ShowModal } from "./components/ShowModal/ShowModal";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills/Skills";
import { Languages } from "./components/Languages/Languages";
import { DarkTheme } from "./components/DarkTheme/DarkTheme";
import { cvData } from "./cvData";
import { useSelectedItems } from "./hooks/useSelectedItems.js";
import { storage } from "./helpers/storage.js";

export const App = () => {
	const saveTab = storage.get("activeTab");
	const [activeTab, setActiveTab] = useState(saveTab || TABS.TRADITIONAL);
	const [showModal, setShowModal] = useState(false);
	const { selectedItems, toggleItems } = useSelectedItems();

	return (
		<div className="app-container">
			<div className="dark-theme-container-app">
				<DarkTheme />
			</div>
			<TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<Header activeTab={activeTab} personalInfo={cvData.personalInfo} summary={cvData.summary} />
			<ProfessionalExperience
				activeTab={activeTab}
				experience={cvData.experience}
				selectedItems={selectedItems}
				toggleItems={toggleItems}
			/>
			<Education
				activeTab={activeTab}
				education={cvData.education}
				selectedItems={selectedItems}
				toggleItems={toggleItems}
			/>
			<Skills
				activeTab={activeTab}
				skills={cvData.technicalSkills}
				selectedItems={selectedItems}
				toggleItems={toggleItems}
			/>
			<Languages
				activeTab={activeTab}
				languages={cvData.languages}
				selectedItems={selectedItems}
				toggleItems={toggleItems}
			/>

			{activeTab === "Interactive" && <ResumeButton showModal={showModal} setShowModal={setShowModal} />}
			{showModal && (
				<ShowModal
					showModal={showModal}
					setShowModal={setShowModal}
					selectedItems={selectedItems}
					activeTab={activeTab}
					cvData={cvData}
				/>
			)}
		</div>
	);
};
