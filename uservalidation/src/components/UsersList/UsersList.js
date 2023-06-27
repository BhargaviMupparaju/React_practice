import React from "react";
import classes from "./UsersList.module.css";

import Card from "../UI/Card";

const UserList = (props) => {
	return (
		<Card>
			<ul className={classes.users}>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} years old )
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
