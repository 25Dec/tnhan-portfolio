/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { GrShare, GrGithub } from "react-icons/gr";
import { RiShareBoxLine } from "react-icons/ri";
import "./projects.css";

const ProjectDemoBtns = ({ livedemo, github }) => {
	return (
		<div className="projects-demo-btns">
			<a
				href={livedemo}
				target="_blank"
				className="btn livedemo"
			>
				<RiShareBoxLine className="project-icon" />
				Live Demo
			</a>
			<a
				href={github}
				target="_blank"
				className="btn github"
			>
				<GrGithub className="project-icon" />
				View Github
			</a>
		</div>
	);
};

export default ProjectDemoBtns;
