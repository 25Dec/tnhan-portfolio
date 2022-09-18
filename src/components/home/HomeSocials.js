import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./home.css";

const HomeSocials = () => {
	return (
		<div className="home-socials">
			<a
				href="https://www.facebook.com/nhannht2512/"
				target="_blank"
				className="icon"
			>
				<BsFacebook />
			</a>
			<a
				href="https://github.com/25Dec"
				target="_blank"
				className="icon"
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default HomeSocials;
