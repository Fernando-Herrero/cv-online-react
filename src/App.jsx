import "./App.css";

const cvData = {
	personalInfo: {
		fullName: "Fernando Herrero Núñez",
		title: "Junior Frontend Stack Developer",
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
			degree: "Bachelor's Degree in Human Nutrition and Dietetics",
			institution: "Autonomous University of Madrid",
			location: "Madrid, Spain",
			period: "2014 – 2018",
		},
		{
			degree: "Web Development Bootcamps & Self-Taught Training",
			institution: "Various",
			location: "Online / Self-paced",
			period: "Ongoing",
		},
	],
	technicalSkills: [
		"JavaScript (Advanced)",
		"TypeScript (Advanced)",
		"React (Advanced)",
		"React Native (Advanced)",
		"Node.js (Advanced)",
		"Express.js (Intermediate)",
		"Redux (Intermediate)",
		"HTML5 (Advanced)",
		"CSS3 (Advanced)",
		"Git & GitHub (Advanced)",
		"Hexagonal Architecture",
		"Testing (Jest, etc.)",
		"CI/CD (Intermediate)",
		"Agile & Scrum Methodologies",
	],

	languages: [
		{ name: "Spanish", level: "Native" },
		{ name: "English", level: "Advanced" },
	],
};

function App() {
	return (
		<>
			<h1>My CV online</h1>
		</>
	);
}

export default App;
