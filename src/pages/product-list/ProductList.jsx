import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProductService from "../../services/product/productService";
import ProductCard from "../../components/product-card/ProductCard";
export default function ProductList() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		let productService = new ProductService();
		productService
			.getAll()
			.then(response => {
				setProducts(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div>
			<p>Product List</p>
			{products.map(product => (
				<ProductCard product={product} />
			))}
			<Link to="/">Ana Sayfaya Dön</Link>
		</div>
	);
}
