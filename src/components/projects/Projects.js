import React from "react";
import SingleProject from "./SingleProject";
import ME from "../../assets/img/pj1.png";
import "./projects.css";

const Projects = () => {
	const projects = [
		{
			id: 1,
			image: ME,
			title: "TNhan's Portfolio",
			description: "A website that includes information about myself and the projects that I have worked on.",
			teamSize: 1,
			role: "Frontend Developer",
			technologies: "React",
			features: "Light-Dark mode, Responsive",
			livedemo: "https://tnhan-portfolio.vercel.app/",
			github: "https://github.com/25Dec/tnhan-portfolio.git",
		},
	];
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className="container projects__container">
				{projects.map((project) => {
					return (
						<SingleProject
							key={project.id}
							project={project}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
