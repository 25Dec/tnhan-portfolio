import React from "react";
import ProjectDemoBtns from "./ProjectDemoBtns";
import ME from "../../assets/img/Avatar1.jpg";
import "./projects.css";

const Projects = () => {
	const project = {
		livedemo: "https://github.com/25Dec",
		github: "https://github.com/25Dec",
	};
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className="container projects__container">
				<div className="project">
					<div className="project__image">
						<img
							src={ME}
							alt=""
						/>
						<h3>Title</h3>
					</div>
					<div className="project__details">
						<p>Type of Project</p>
						<p>- Team size: 1</p>
						<p>- Technologies:</p>
						<p>- Features: </p>
						<ProjectDemoBtns project={project} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
