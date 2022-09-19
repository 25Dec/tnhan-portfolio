/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { GrShare, GrGithub } from "react-icons/gr";
import "./projects.css";

const ProjectDemoBtns = ({ project }) => {
	return (
		<div className="projects-demo-btns">
			<a
				href={project.livedemo}
				target="_blank"
				className="project-btn livedemo"
			>
				<GrShare className="project-icon" />
				Live Demo
			</a>
			<a
				href={project.github}
				target="_blank"
				className="project-btn github"
			>
				<GrGithub className="project-icon" />
				Github
			</a>
		</div>
	);
};

export default ProjectDemoBtns;
