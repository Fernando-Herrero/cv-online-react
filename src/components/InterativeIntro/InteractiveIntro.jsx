import { useEffect, useState } from "react";
import "./InteractiveIntro.css";
import { storage } from "../../helpers/storage";

export const InteractiveIntro = ({ onToggleClose }) => {
	const [animateOut, setAnimateOut] = useState(false);

	const handleClose = () => {
		setAnimateOut(true);
	};

	useEffect(() => {
		if (animateOut) {
			const timer = setTimeout(() => {
				onToggleClose();
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [animateOut, onToggleClose]);

	return (
		<>
			<div className={`overlay ${animateOut ? "fade-out" : "fade-in"}`}></div>
			<div className={`interactive-tab-info ${animateOut ? "fade-out-scale" : "fade-in-scale"}`}>
				<h3>Interactive Tab</h3>
				<p>
					This is the Interactive Tab, where you can select the information you need using inputs and buttons.
					All selected data will be gathered into a final summary file to help you compile everything
					efficiently.
				</p>
				<button
					className="toggle-btn"
					onClick={() => {
						storage.save("messageIntro", true);
						handleClose();
					}}
				>
					Got it!
				</button>
			</div>
		</>
	);
};
