import React from "react";
import { Link } from "react-router-dom";
import CV from "../../assets/CV.pdf";
import "./home.css";

const HomeBtns = () => {
	return (
		<div className="home-btns">
			<a
				href={CV}
				download
				className="btn"
			>
				Download CV
			</a>
			<Link
				to="/contact"
				className="btn btn-primary"
			>
				Let's Talk
			</Link>
		</div>
	);
};

export default HomeBtns;
