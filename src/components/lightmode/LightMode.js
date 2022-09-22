import React from "react";
import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import "./lightmode.css";

const Darkmode = () => {
	const [isLightMode, setIsLightMode] = useState(false);

	const toggleLightMode = () => {
		setIsLightMode(!isLightMode);
		let body = document.querySelector("body");
		body.classList.toggle("light-mode");
	};

	return (
		<div
			className="lightmode-btn"
			onClick={toggleLightMode}
		>
			{isLightMode ? <BiMoon /> : <BiSun />}
		</div>
	);
};

export default Darkmode;
