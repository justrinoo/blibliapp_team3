import React, { useState } from "react";
import Button from "../Button/index";
import { getUser, removeUserSession } from "../../utils/Common";
import { useHistory } from "react-router-dom";
export default function ButtonSign() {
	const user = getUser();

	let history = useHistory();
	const handleLogout = () => {
		removeUserSession();
		history.push("/");
	};
	const [login, isLogin] = useState(false);
	return (
		<>
			{login === false ? (
				<>
					<small className="text-white">{user}</small>
					<li className="nav-item">
						<Button
							Button
							type="link"
							href={`/login`}
							className="btn border-white  text-white mr-3"
						>
							Masuk
						</Button>
					</li>
					<li className="nav-item">
						<Button
							type="link"
							href={`/register`}
							className="btn btn-primary bg-white text-primary"
						>
							Daftar
						</Button>
					</li>
				</>
			) : undefined}
		</>
	);
}
