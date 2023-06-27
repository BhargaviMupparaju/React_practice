import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
	return (
		<button className={classes.button} type={props.type || "button"} onClick={props.onClick}>
			{props.children}
		</button>
	); // Here || is used because if any props button type is undefined
	// the fallback will be 'button'
};

export default Button;
