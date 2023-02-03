import {ErrorMessage, Field} from "formik";
import React from "react";

export default function BaseInput(props) {
	return (
		<>
			<label>{props.label}</label>
			<Field className="form-control" type={props.type} name={props.name} />
			<ErrorMessage name={props.name}>
				{msg => <div className="text-danger text-start">{msg}</div>}
			</ErrorMessage>
		</>
	);
}

// {props.type == "select" ?? (
// 	<>
// 		<label>{props.label}</label>
// 		<Field
// 			className={"form-select " + props.className}
// 			as="select"
// 			name={props.name}
// 		>
// 			{props.data.map(opt => (
// 				<option value={opt[props.valueKey]}>
// 					{props.nameKeys.map(key => {
// 						return opt[key] + " ";
// 					})}
// 				</option>
// 			))}
// 		</Field>
// 		<ErrorMessage name={props.name}>
// 			{msg => <div className="text-danger text-start">{msg}</div>}
// 		</ErrorMessage>
// 	</>
// )}
// {props.type != "select" ?? (
// 	<>
// 		<Field className="form-control" type={props.type} name={props.name} />
// 		<ErrorMessage name={props.name}>
// 			{msg => <div className="text-danger text-start">{msg}</div>}
// 		</ErrorMessage>
// 	</>
// )}
