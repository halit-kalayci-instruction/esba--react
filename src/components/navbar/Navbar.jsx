import React from "react";
import {Menubar} from "primereact/menubar";
function Navbar() {
	const items = [
		{
			label: "File",
			icon: "pi pi-fw pi-clock",
		},
		{
			label: "Edit",
			icon: "pi pi-fw pi-pencil",
		},
		{
			label: "Users",
			icon: "pi pi-fw pi-user",
		},
		{
			label: "Events",
			icon: "pi pi-fw pi-calendar",
		},
		{
			label: "Quit",
			icon: "pi pi-fw pi-power-off",
		},
	];

	return (
		<div className="card">
			<Menubar model={items} />
		</div>
	);
}

export default Navbar;
