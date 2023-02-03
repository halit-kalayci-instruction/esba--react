import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {Button} from "primereact/button";
import * as Yup from "yup";
import CategoryService from "../../services/category/categoryService";
import {useNavigate} from "react-router-dom";
import toastr from "toastr";
import BaseInput from "../../components/base-input/BaseInput";
import BaseSelect from "../../components/base-select/BaseSelect";

const yupSchema = Yup.object().shape({
	name: Yup.string()
		.required("Kategori ismi zorunludur")
		.min(2, "Kategori ismi en az 2 haneli olmalıdır"),
	description: Yup.string().required("Açıklama zorunludur"),
});

export default function AddCategory() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let categoryService = new CategoryService();
		categoryService.getAll().then(response => {
			setCategories(response.data);
		});
	}, []);
	const navigate = useNavigate();
	const initialFormValues = {name: "", description: ""};
	const onFormSubmit = values => {
		//kullanıcı butona bastığı anda formun o anki değeri elimde..
		// kod bloğu buraya geldi ise, validationlardan geçmiştir..
		let categoryService = new CategoryService();
		categoryService.add(values).then(response => {
			toastr.success("Kategori başarıyla eklendi..", "Başarılı");
			navigate("/products");
		});
	};

	return (
		<div>
			<h3>Yeni Kategori Ekle</h3>
			<Formik
				initialValues={initialFormValues}
				onSubmit={values => {
					onFormSubmit(values);
				}}
				validationSchema={yupSchema}
			>
				{({errors, touched}) => (
					<Form>
						<BaseInput label="Kategori Adı" name="name" type="text" />
						<BaseInput
							label="Kategori Açıklama"
							name="description"
							type="text"
						/>
						<BaseSelect
							className="border-danger"
							data={categories}
							label="Kategori Seçiniz"
							name="categoryId"
							valueKey="name"
							nameKeys={["id", "name", "description"]}
						/>
						<BaseSelect
							data={categories}
							label="Kategori Seçiniz"
							name="categoryId"
							valueKey="name"
							nameKeys={["id", "name", "description"]}
						/>
						<br></br>
						<Button label="Submit" type="submit" />
					</Form>
				)}
			</Formik>
		</div>
	);
}
