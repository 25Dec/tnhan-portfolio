import React from "react";
import AboutDetails from "./AboutDetails";
import AboutSkills from "./AboutSkills";
import "./about.css";

const About = () => {
	return (
		<section id="#about">
			<div className="container about-container">
				<h2>Get To Know </h2>
				<p>About me</p>
				<AboutDetails />
				<AboutSkills />
			</div>
		</section>
	);
};

export default About;
