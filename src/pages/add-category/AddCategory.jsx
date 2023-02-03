import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {Button} from "primereact/button";
import * as Yup from "yup";
import CategoryService from "../../services/category/categoryService";
import {useNavigate} from "react-router-dom";
import toastr from "toastr";

const yupSchema = Yup.object().shape({
	name: Yup.string()
		.required("Kategori ismi zorunludur")
		.min(2, "Kategori ismi en az 2 haneli olmalıdır"),
	description: Yup.string().required("Açıklama zorunludur"),
});

export default function AddCategory() {
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
						<p>Kategori Adı</p>
						<Field name="name" />
						<ErrorMessage name="name">
							{msg => <p className="text-danger">{msg}</p>}
						</ErrorMessage>

						<p>Kategori Açıklama</p>
						<Field name="description" />
						<ErrorMessage name="description">
							{msg => <p className="text-danger">{msg}</p>}
						</ErrorMessage>

						<br></br>
						<Button label="Submit" type="submit" />
					</Form>
				)}
			</Formik>
		</div>
	);
}
