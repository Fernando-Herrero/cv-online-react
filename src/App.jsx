import { useState } from "react";
import "./App.css";
import { CvTabsNavigation } from "./components/CvTabsNavigation/CvTabsNavigation";
import { TABS } from "./components/CvTabsNavigation/Tabs";
import { Header } from "./components/Header/Header";
import { ProfessionalExperience } from "./components/ProfesionalExperience/ProfessionalExperience";
import { ResumeButton } from "./components/ResumeButton/ResumeButton";
import { ShowModal } from "./components/ShowModal/ShowModal";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills/Skills";

const cvData = {
	personalInfo: {
		fullName: "Fernando Herrero Núñez",
		title: "Junior Frontend Developer",
		location: "Madrid, Spain",
		email: "herrerofernando@gmail.com",
		phone: "636325089",
		linkedin: "https://www.linkedin.com/in/fernando-herrero-nunez/",
		github: "https://github.com/Fernando-Herrero",
	},
	summary: `Junior Front Stack Developer with experience in web development using modern technologies like React, React Native, Node.js, and TypeScript.
With over 5 years living abroad, I have developed strong self-improvement skills and resilience. Passionate about continuous growth and teamwork to achieve common goals.
Specialties: React, React Native, Node.js, Testing, HTML, CSS, JavaScript, TypeScript, Hexagonal Architecture, Web Fundamentals, and Artificial Intelligence.
Sports enthusiast, especially fitness and football.`,

	experience: [
		{
			id: "exp1",
			position: "Junior Frontend Stack Developer",
			company: "Rocket418",
			period: "Dec 2023 - Present",
			location: "Spain (Remote)",
			responsibilities: [
				"Developed the www.uniformeazul.com platform using React, TypeScript, Node.js, and Express.",
				"Applied Hexagonal Architecture for scalable and testable code.",
				"Collaborated in an Agile (Scrum) environment using GitHub, CI/CD pipelines and code reviews.",
			],
		},
		{
			id: "exp2",
			position: "Kitchen Manager",
			company: "Archie's",
			period: "Jan 2019 - Dec 2023",
			location: "United Kingdom",
			responsibilities: [
				"Led kitchen operations including planning, food preparation, hygiene, and inventory management.",
				"Managed a team ensuring efficiency, quality, and compliance with safety standards.",
			],
		},
	],

	education: [
		{
			id: "edu2",
			degree: "Web Development Bootcamps & Self-Taught Training",
			institution: "Various",
			location: "Online / Self-paced",
			period: "Ongoing",
		},
		{
			id: "edu1",
			degree: "Bachelor's Degree in Human Nutrition and Dietetics",
			institution: "Autonomous University of Madrid",
			location: "Madrid, Spain",
			period: "2014 – 2018",
		},
	],

	technicalSkills: [
		{ id: "skill1", name: "JavaScript" },
		{ id: "skill2", name: "TypeScript" },
		{ id: "skill3", name: "React" },
		{ id: "skill4", name: "React Native" },
		{ id: "skill5", name: "Node.js" },
		{ id: "skill6", name: "Express.js" },
		{ id: "skill7", name: "Redux" },
		{ id: "skill8", name: "HTML5" },
		{ id: "skill9", name: "CSS3" },
		{ id: "skill10", name: "Git & GitHub" },
		{ id: "skill11", name: "Hexagonal Architecture" },
		{ id: "skill12", name: "Testing" },
		{ id: "skill13", name: "CI/CD" },
		{ id: "skill14", name: "Agile & Scrum Methodologies" },
	],

	languages: [
		{ id: "lang1", name: "Spanish", level: "Native" },
		{ id: "lang2", name: "English", level: "Advanced" },
	],
};

function App() {
	const [activeTab, setActiveTab] = useState(TABS.SIMPLE);
	const [selectedItems, setSelectedItems] = useState({
		experience: {},
		education: {},
		technicalSkills: {},
		languages: {},
	});
	const [showModal, setShowModal] = useState(false);

	const toggleCheckedItems = (section, key) => {
		setSelectedItems((prev) => ({ ...prev, [section]: { ...prev[section], [key]: !prev[section][key] } }));
	};

	const toggleItemSelected = (id) => {
		setSelectedItems((prev) => {
			const skillsMap = { ...prev.technicalSkills };

			if (skillsMap[id]) {
				delete skillsMap[id];
			} else {
				const skill = skills.find((skill) => skill.id === id);
				if (skill) {
					skillsMap[id] = skill;
				}
			}
			return { ...prev, technicalSkills: skillsMap };
		});
	};

	return (
		<div className="app-container">
			<CvTabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<Header activeTab={activeTab} personalInfo={cvData.personalInfo} summary={cvData.summary} />
			<ProfessionalExperience
				activeTab={activeTab}
				experience={cvData.experience}
				selectedItems={selectedItems}
				toggleCheckedItems={toggleCheckedItems}
			/>
			<Education
				activeTab={activeTab}
				education={cvData.education}
				selectedItems={selectedItems}
				toggleCheckedItems={toggleCheckedItems}
			/>
			<Skills
				activeTab={activeTab}
				skills={cvData.technicalSkills}
				selectedItems={selectedItems}
				toggleItemSelected={toggleItemSelected}
			/>

			{activeTab === "Interactive" && <ResumeButton showModal={showModal} setShowModal={setShowModal} />}
			{showModal && (
				<>
					<div className="overlay"></div>
					<ShowModal
						showModal={showModal}
						setShowModal={setShowModal}
						selectedItems={selectedItems}
						activeTab={activeTab}
						cvData={cvData}
					/>
				</>
			)}
		</div>
	);
}

export default App;
