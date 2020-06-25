import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button(props) {
	const className = [props.className];
	if (props.isPrimary) className.push("btn-primary");
	if (props.isBlock) className.push("btn-block");
	if (props.isSmall) className.push("btn-sm");
	if (props.isShadow) className.push("btn-shadow");

	const onClick = () => {
		if (props.onClick) props.onClick();
	};

	if (props.isDisabled || props.isLoading) {
		if (props.isDisabled) className.push("disabled");
		return (
			<span className={className.join(" ")} style={props.style}>
				{props.isLoading ? (
					<>
						<span className="spinner-border spinner border-sm mx-5"></span>
						<span className="sr-only">Loading...</span>
					</>
				) : (
					props.children
				)}
			</span>
		);
	}
	if (props.type === "link") {
		if (props.isExternal) {
			return (
				<a
					href={props.href}
					className={className.join(" ")}
					style={props.style}
					target={props.target === "_blank" ? "_blank" : undefined}
					rel={props.target === "_blank" ? "noopenner noreferrer" : undefined}
				>
					{props.children}
				</a>
			);
		} else {
			return (
				<Link
					to={props.href}
					className={className.join(" ")}
					style={props.style}
					onClick={onClick}
				>
					{props.children}
				</Link>
			);
		}
	}

	return (
		<button
			to={props.href}
			className={className.join(" ")}
			style={props.style}
			onClick={onClick}
		>
			{props.children}
		</button>
	);
}

Button.propTypes = {
	type: propTypes.oneOfType(["link", "button"]),
	href: propTypes.string,
	onClick: propTypes.func,
	isPrimary: propTypes.bool,
	isBlock: propTypes.bool,
	isSmall: propTypes.bool,
	isLoading: propTypes.bool,
	isExternal: propTypes.bool,
	isDisabled: propTypes.bool,
	isShadow: propTypes.bool,
	className: propTypes.string,
};
