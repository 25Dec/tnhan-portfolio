import React from "react";
import ProjectDemoBtns from "./ProjectDemoBtns";
import "./projects.css";

const SingleProject = ({ project }) => {
	return (
		<div className={project.id % 2 === 0 ? "single-project reverse" : "single-project"}>
			<div className="single-project-image">
				<img
					src={project.image}
					alt={project.title}
				/>
			</div>
			<div className="single-project-content">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<p>
					<span>Team size:</span> {project.teamSize}
				</p>
				<p>
					<span>Role:</span> {project.role}
				</p>
				<p>
					<span>Technologies:</span> {project.technologies}
				</p>
				<p>
					<span>Features:</span> {project.features}
				</p>
				<ProjectDemoBtns
					livedemo={project.livedemo}
					github={project.github}
				/>
			</div>
		</div>
	);
};

export default SingleProject;
