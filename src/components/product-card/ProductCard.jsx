import React, {useEffect} from "react";
// let props = {productName: "Ürün 1", x: "1", y: "1"};
// let {productName} = props;

export default function ProductCard({productName, addToCart}) {
	useEffect(() => {}, []);

	const onBtnClick = () => {
		// üst componentden verilen fonksiyonu istenilen parametre ile çağır..
		addToCart(productName);
	};

	return (
		<div>
			<h3>{productName}</h3>
			<button onClick={onBtnClick}>Sepete Ekle</button>
		</div>
	);
}

// export function ProductCardWithProps(props) {
// 	return <div>{props.productName}</div>;
// }
