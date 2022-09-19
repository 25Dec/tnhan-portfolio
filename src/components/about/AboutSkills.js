import React from "react";
import HTML from "../../assets/img/html.svg";
import CSS from "../../assets/img/css.svg";
import JS from "../../assets/img/javascript.svg";
import ReactJS from "../../assets/img/react.svg";
import Vue from "../../assets/img/vue.svg";
import SASS from "../../assets/img/sass.svg";
import "./about.css";

const AboutSkills = () => {
	const skills = [
		{ id: 1, img: HTML, name: "HTML" },
		{ id: 2, img: CSS, name: "CSS" },
		{ id: 3, img: JS, name: "JS" },
		{ id: 4, img: ReactJS, name: "ReactJS" },
		{ id: 5, img: Vue, name: "Vue" },
		{ id: 6, img: SASS, name: "SASS" },
	];

	return (
		<div className="about-skills">
			<h2>My Knowledge</h2>
			<p>Technologies and Languages that I use to develop my projects everyday</p>
			<div>
				{skills.map((skill) => {
					return (
						<article key={skill.id}>
							<img
								src={skill.img}
								alt={skill.name}
							/>
							<p>{skill.name}</p>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default AboutSkills;
