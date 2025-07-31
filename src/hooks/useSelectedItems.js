import { useState } from "react";

export const useSelectedItems = () => {
	const [selectedItems, setSelectedItems] = useState({
		experience: {},
		education: {},
		technicalSkills: {},
		languages: {},
	});
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

	return { selectedItems, toggleItems };
};
