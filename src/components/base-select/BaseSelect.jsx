import {ErrorMessage, Field} from "formik";
import React from "react";

export default function BaseSelect(props) {
	return (
		<>
			<label>{props.label}</label>
			<Field
				className={"form-select " + props.className}
				as="select"
				name={props.name}
			>
				{props.data.map(opt => (
					<option value={opt[props.valueKey]}>
						{props.nameKeys.map(key => {
							return opt[key] + " ";
						})}
					</option>
				))}
			</Field>
			<ErrorMessage name={props.name}>
				{msg => <div className="text-danger text-start">{msg}</div>}
			</ErrorMessage>
		</>
	);
}
// categories = [{id:1,name:"deneme",description:""}]
// <BaseSelect data={categories}/>
//
