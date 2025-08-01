import { useState } from "react";
import { storage } from "../helpers/storage";

export const useSelectedItems = () => {
	const saveItems = storage.get("selectedItems");
	const [selectedItems, setSelectedItems] = useState(
		saveItems || {
			experience: {},
			education: {},
			technicalSkills: {},
			languages: {},
		}
	);
	const toggleItems = (section, id) => {
		setSelectedItems((prev) => {
			const newSection = { ...prev[section] };

			if (newSection[id]) {
				delete newSection[id];
			} else {
				newSection[id] = true;
			}

			const update = { ...prev, [section]: newSection };

			storage.save("selectedItems", update);

			return update;
		});
	};

	return { selectedItems, toggleItems };
};
