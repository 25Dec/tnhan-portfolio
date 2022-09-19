import React from "react";
import AboutDetails from "./AboutDetails";
import AboutSkills from "./AboutSkills";
import "./about.css";

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>
			<p>An overview of myself</p>
			<div className="container about__container">
				<AboutDetails />
				<AboutSkills />
			</div>
		</section>
	);
};

export default About;
