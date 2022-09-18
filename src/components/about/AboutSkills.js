import React from "react";
import HTML from "../../assets/img/html.svg";
import CSS from "../../assets/img/css.svg";
import JS from "../../assets/img/javascript.svg";
import ReactJS from "../../assets/img/react.svg";
import Vue from "../../assets/img/vue.svg";
import "./about.css";

const AboutSkills = () => {
	return (
		<div className="about-skills">
			<h2>My skills &amp; Knowledge</h2>
			<p>Technologies and Languages that I use to develop my projects everyday</p>
			<div>
				<article>
					<img
						src={HTML}
						alt="html"
					/>
					<p>HTML</p>
				</article>
				<article>
					<img
						src={CSS}
						alt="css"
					/>
					<p>CSS</p>
				</article>
				<article>
					<img
						src={JS}
						alt="javascript"
					/>
					<p>Javascript</p>
				</article>
				<article>
					<img
						src={ReactJS}
						alt="reactjs"
					/>
					<p>React</p>
				</article>
				<article>
					<img
						src={Vue}
						alt="vue"
					/>
					<p>Vue</p>
				</article>
			</div>
		</div>
	);
};

export default AboutSkills;
