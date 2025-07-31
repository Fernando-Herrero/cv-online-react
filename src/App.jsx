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
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiTailwindcss,
	SiRedux,
	SiHtml5,
	SiCss3,
	SiGit,
	SiGithub,
	SiFigma,
} from "react-icons/si";
import { FaCubes, FaRocket, FaCheckCircle, FaRegLightbulb, FaTachometerAlt } from "react-icons/fa";
import { DarkTheme } from "./components/DarkTheme/DarkTheme";
import rocketLogo from "./assets/Rocket-logo.png";
import archiesLogo from "./assets/archies.png";

const cvData = {
	personalInfo: {
		fullName: "Fernando Herrero Núñez",
		title: "Frontend Developer",
		location: "Madrid, Spain",
		email: "herrerofernando.94@gmail.com",
		// phone: "",
		linkedin: "https://www.linkedin.com/in/fernando-herrero-nunez/",
		github: "https://github.com/Fernando-Herrero",
	},
	summary: `Frontend Developer with experience in web development using modern technologies like React, and TypeScript.
With over 5 years living abroad, I have developed strong self-improvement skills and resilience. Passionate about continuous growth and teamwork to achieve common goals.
Specialties: React, HTML, CSS, JavaScript, TypeScript, Hexagonal Architecture, Web Fundamentals, and Artificial Intelligence.
Sports enthusiast, especially fitness and football.`,

	experience: [
		{
			id: "exp1",
			image: rocketLogo,
			position: "Frontend Developer",
			company: "Rocket418",
			period: "Mar 2024 - Present",
			location: "Spain (Remote)",
			responsibilities: [
				"Frontend development of www.uniformeazul.com using React, TypeScript, HTML, CSS, and JavaScript with a focus on clean, maintainable code.",
				"Implemented best practices for scalability, performance, and accessibility, continuously refactoring code to align with modern standards.",
				"Collaborated within a Scrum team, contributing to planning, code reviews, and continuous integration workflows via GitHub and CI/CD pipelines.",
				"Took initiative in guiding teammates, resolving technical blockers, and ensuring consistent architectural decisions across the frontend codebase.",
				"Adopted component-driven development with reusable UI patterns to improve development speed and consistency.",
			],
		},
		{
			id: "exp2",
			image: archiesLogo,
			position: "Kitchen Manager",
			company: "Archie's",
			period: "Jan 2019 - Dec 2023",
			location: "United Kingdom",
			responsibilities: [
				"Supervised daily kitchen operations, including staff scheduling, food preparation, inventory control, and cleanliness standards.",
				"Managed procurement of kitchen supplies and ingredients, ensuring cost-efficiency and availability of essential items.",
				"Led, trained, and motivated a diverse team to maintain productivity, high food quality, and compliance with health and safety regulations.",
				"Resolved operational issues and handled high-pressure situations with effective problem-solving and communication skills.",
				"Maintained direct communication with front-of-house staff to ensure smooth service flow and quick response to special kitchen requests or conflicts.",
			],
		},
	],

	education: [
		{
			id: "edu2",
			degree: "Master's degree in web and mobile programming + AI",
			institution: "Eleven Code School",
			location: "Online / Self-paced",
			period: "Feb 2024 - Ongoing",
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
		{ id: "skill1", name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
		{ id: "skill2", name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
		{ id: "skill3", name: "React", icon: SiReact, color: "#61DAFB" },
		{ id: "skill4", name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
		// { id: "skill4", name: "React Native", icon: SiReact, color: "#61DAFB" },
		// { id: "skill5", name: "Node.js", icon: SiNodedotjs, color: "#339933" },
		// { id: "skill6", name: "Express.js", icon: SiExpress, color: "#000000" },
		{ id: "skill7", name: "Redux", icon: SiRedux, color: "#764ABC" },
		{ id: "skill8", name: "HTML5", icon: SiHtml5, color: "#E34F26" },
		{ id: "skill9", name: "CSS3", icon: SiCss3, color: "#1572B6" },
		{ id: "skill6", name: "Git", icon: SiGit, color: "#F05032" },
		{ id: "skill10", name: "GitHub", icon: SiGithub, color: "#181717" },
		{ id: "skill11", name: "Figma", icon: SiFigma, color: "#F24E1E" },
		{ id: "skill12", name: "Hexagonal Architecture", icon: FaCubes, color: "#6B7280" },
		// { id: "skill12b", name: "Testing", icon: SiTestinglibrary, color: "#E33332" },
		{ id: "skill13", name: "CI/CD", icon: FaRocket, color: "#EF4444" },
		{ id: "skill14", name: "Agile & Scrum Methodologies", icon: FaCheckCircle, color: "#10B981" },
		{ id: "skill15", name: "Clean Code and good Practices", icon: FaRegLightbulb, color: "#FBBF24" },
		{ id: "skill16", name: "Web Performance", icon: FaTachometerAlt, color: "#2563EB" },
	],

	languages: [
		{ id: "lang1", name: "Spanish", level: "Native", flag: "🇪🇸" },
		{ id: "lang2", name: "English", level: "Advanced", flag: "🇬🇧" },
	],
};

function App() {
	const [activeTab, setActiveTab] = useState(TABS.TRADITIONAL);
	const [selectedItems, setSelectedItems] = useState({
		experience: {},
		education: {},
		technicalSkills: {},
		languages: {},
	});
	const [showModal, setShowModal] = useState(false);

	const toggleItems = (section, id) => {
		setSelectedItems((prev) => {
			const newSection = { ...prev[section] };

			if (newSection[id]) {
				delete newSection[id];
			} else {
				newSection[id] = true;
			}

			console.log("New selected state:", { ...prev, [section]: newSection });

			return {
				...prev,
				[section]: newSection,
			};
		});
	};

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
}

export default App;
