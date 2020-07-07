import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";
import IcMail from "../../../assets/images/icons/mail.svg";
import IcPassword from "../../../assets/images/icons/password.svg";
export default function Text(props) {
	const [password, setPassowrd] = useState(null);

	const {
		value,
		type,
		placeholder,
		name,
		outerClassName,
		inputClassName,
		errorResponse,
	} = props;
	const [HasError, setHasError] = useState(null);
	let pattern = "";
	if (type === "email") pattern = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;
	if (type === "password")
		pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

	const onChange = (event) => {
		const target = {
			target: {
				name: name,
				value: event.target.value,
			},
		};
		if (type === "email") {
			if (!pattern.test(event.target.value)) setHasError(errorResponse);
			else setHasError(null);
		}
		if (type === "password") {
			if (event.target.validity.valid) props.onChange(target);
		} else {
			// props.onChange(target);
		}
	};

	return (
		<>
			<div className={["input-text mb-3", outerClassName].join(" ")}>
				<div className="input-group">
					<img src={IcMail} width={30} alt="" />
					<input
						name={name}
						type={type}
						pattern={pattern}
						className={["form-control", inputClassName].join(" ")}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
					/>
				</div>
				{HasError && <span className="error-helper">{HasError}</span>}
			</div>
			<div className={["input-text mb-3", outerClassName].join(" ")}>
				<div className="input-group">
					<img src={IcPassword} width={30} alt="" />

					<input
						name={name}
						type="password"
						pattern={pattern}
						className={["form-control", inputClassName].join(" ")}
						value={value}
						placeholder="Masukan kata sandi"
						onChange={(e) => setPassowrd({ password: e.target.value })}
					/>
				</div>
				{HasError && <span className="error-helper">{HasError}</span>}
			</div>
		</>
	);
}

Text.defaultProps = {
	type: "text",
	pattern: "",
	placeholder: "Masukan email",
	errorResponse: "Alamat email harus di isi",
};

Text.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
	append: propTypes.oneOfType([propTypes.number, propTypes.string]),
	type: propTypes.string,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	inputClassName: propTypes.string,
};
