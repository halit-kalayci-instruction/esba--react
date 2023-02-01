import React, {useEffect} from "react";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
// let props = {productName: "Ürün 1", x: "1", y: "1"};
// let {productName} = props;

export default function ProductCard({product}) {
	useEffect(() => {
		console.log(product);
	}, []);

	const footer = (
		<div className="flex flex-wrap justify-content-end gap-2">
			<Button className="mx-2" label="Sepete Ekle" icon="pi pi-shopping-cart" />
			<Link to={"/product/" + product.id}>
				<Button
					label="Detay"
					icon="pi pi-arrow-right"
					className="p-button-outlined p-button-secondary"
				/>
			</Link>
		</div>
	);

	// Category ismi yazdırılacak..
	return (
		<div className="card flex justify-content-center">
			<Card
				title={product.name}
				subTitle={product.unitsInStock}
				footer={footer}
				className="md:w-25rem"
			>
				<p className="m-0">{product.quantityPerUnit}</p>
			</Card>
		</div>
	);
}

// export function ProductCardWithProps(props) {
// 	return <div>{props.productName}</div>;
// }
