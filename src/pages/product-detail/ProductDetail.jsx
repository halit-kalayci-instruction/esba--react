import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductService from "../../services/product/productService";

export default function ProductDetail() {
	const [product, setProduct] = useState({});
	const query = useParams();

	useEffect(() => {
		fetchProductById();
	}, []);

	const fetchProductById = () => {
		let productService = new ProductService();
		productService.getById(query.id).then(response => {
			setProduct(response.data);
		});
	};

	return (
		<div>
			<p>{product.name}</p>
			<p>{product.supplierId}</p>
		</div>
	);
}
