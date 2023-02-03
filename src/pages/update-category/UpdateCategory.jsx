import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import CategoryService from "../../services/category/categoryService";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button} from "primereact/button";
import * as Yup from "yup";
import toastr from "toastr";
import BaseInput from "../../components/base-input/BaseInput";

// useParams ile sayfaya gelen category id'sini alacağız
// bu kategori id ile kategorinin detayını API'den istek atarak çekeceğiz.
// gelen kategori bilgilerini formda initial değerlere atayacağız.
// formik alanlarımızı ve validation schemamızı oluşturacağız
// formikde input ve errormessage alanlarını oluşturacağız
// form submit olduğunda gönderilecek put request için servis ve component kodlarını geliştireceğiz.
export default function UpdateCategory() {
	// useParams => routerdaki parametreleri okumak için gerekli react-router-dom hookudur.
	const params = useParams();
	// useNavigate => routerda navigasyon işlemleri için kullanılan hook (fonksiyon)
	const navigate = useNavigate();
	// formik implementasyonunda formun başlangıç değerini tutar.
	const [initialValues, setinitialValues] = useState({});

	// validation schema => validation kurallarını alanlara bind ettiğimiz şema.
	const yupSchema = Yup.object().shape({
		name: Yup.string().required("Kategori adı zorunludur.").min(2),
		description: Yup.string().required("Kategori açıklaması zorunludur."),
	});

	const onFormSubmit = values => {
		let categoryService = new CategoryService();
		categoryService
			.update(values)
			.then(response => {
				toastr.success("Kategori başarıyla güncellendi.");
				navigate("/products");
			})
			.catch(error => {
				toastr.error("Kategori güncellenirken hata oluştu.");
			});
	};

	useEffect(() => {
		let categoryService = new CategoryService();
		categoryService.getById(params.id).then(response => {
			//initialValues = response.data;
			setinitialValues(response.data);
			console.log(initialValues);
		});
	}, []);
	// react variables vs javascript variables
	// useState => react variable
	// let const var => javascript variable
	// WATCHER
	// const [initialValues, setinitialValues] = useState({}); => izleniyo
	// const myValue = 20; => izlenmiyo
	return (
		<div>
			<Formik
				initialValues={initialValues}
				enableReinitialize={true}
				validationSchema={yupSchema}
				onSubmit={values => {
					onFormSubmit(values);
				}}
			>
				<Form>
					<div className="row w-50 m-auto">
						<div className="col-12 my-2">
							<BaseInput label="Kategori Adı" name="name" type="text" />
						</div>
						<div className="col-12 my-2">
							<BaseInput
								label="Kategori Açıklaması"
								name="description"
								type="text"
							/>
						</div>
						<div className="col-12 my-2">
							<Button type="submit" label="Kaydet" />
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
