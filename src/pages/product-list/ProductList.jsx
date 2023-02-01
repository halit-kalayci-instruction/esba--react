import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProductService from "../../services/product/productService";
import ProductCard from "../../components/product-card/ProductCard";
import {ProgressSpinner} from "primereact/progressspinner";
import CategoryList from "../../components/category-list/CategoryList";
export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [isLoading, setisLoading] = useState(true);
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
			})
			.finally(() => {
				setisLoading(false);
			});
	};

	const fetchProductsByCategory = id => {
		if (id == null) {
			fetchProducts();
			return;
		}
		// Product Service'den kategoriye göre filter
		let productService = new ProductService();
		productService.getProductsByCategoryId(id).then(response => {
			setProducts(response.data);
		});
	};

	// conditional rendering
	return (
		<div>
			{isLoading == true ? (
				<ProgressSpinner />
			) : (
				<div className="row">
					<div className="col-3">
						<CategoryList></CategoryList>
					</div>
					<div className="col-8">
						<div className="row">
							{products.map(product => (
								<div className="col-4 my-5">
									<ProductCard product={product} />
								</div>
							))}
						</div>
					</div>
				</div>
			)}
			<Link to="/">Ana Sayfaya Dön</Link>
		</div>
	);
}
