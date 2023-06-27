import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
	return <div className={`${classes.card} && ${props.className}`}>{props.children}</div>; // Here instead of card we also used the props.classname because 
    //from the Adduser if any classnames are appended from the props. this statement can use it
    
};
export default Card;
