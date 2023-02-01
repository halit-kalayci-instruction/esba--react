import React, {useEffect} from "react";
// let props = {productName: "Ürün 1", x: "1", y: "1"};
// let {productName} = props;

export default function ProductCard({product}) {
	useEffect(() => {}, []);

	return (
		<div>
			<h3>{product.name}</h3>
			<h5>{product.unitPrice}</h5>
		</div>
	);
}

// export function ProductCardWithProps(props) {
// 	return <div>{props.productName}</div>;
// }
