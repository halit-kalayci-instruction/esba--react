// function component => useEffect
// class component => componentDidMount

import React from "react";

export default function Hello() {
	//JSX'de 1 parent element şart!
	let myNumber = 5;
	return (
		<>
			<div>
				Hello
				<h3>{myNumber}</h3>
			</div>
			<div></div>
		</>
	);
}
