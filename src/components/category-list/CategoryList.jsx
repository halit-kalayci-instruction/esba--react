import React, {useEffect, useState} from "react";
import CategoryService from "../../services/category/categoryService";
import {ListBox} from "primereact/listbox";

export default function CategoryList() {
	const [categories, setCategories] = useState([{id: null, name: "All"}]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = () => {
		let categoryService = new CategoryService();
		categoryService.getAll().then(response => {
			let allItems = [...categories, ...response.data];
			setCategories(allItems);
		});
	};

	return (
		<ListBox
			value={selectedCategory}
			options={categories}
			onChange={e => console.log(e.value.id)}
			optionLabel="name"
			style={{width: "15rem"}}
		/>
	);
}
