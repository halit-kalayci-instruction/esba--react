import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>404</h1>
				<h3>Aradığınız sayfaya ulaşılamıyor.</h3>
				<Link to="/">Ana sayfaya dön</Link>
			</div>
		);
	}
}

//rcc
