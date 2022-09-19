import React from "react";
import { NavLink } from "react-router-dom";
import { BiHome, BiUser, BiCodeAlt, BiMessageSquareDots, BiDownload } from "react-icons/bi";
import CV from "../../assets/CV.pdf";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<NavLink
				to="/"
				end
			>
				<BiHome />
			</NavLink>
			<NavLink
				to="/about"
				end
			>
				<BiUser />
			</NavLink>
			<NavLink
				to="/projects"
				end
			>
				<BiCodeAlt />
			</NavLink>
			<NavLink
				to="/contact"
				end
			>
				<BiMessageSquareDots />
			</NavLink>
			<a
				href={CV}
				download
			>
				<BiDownload />
			</a>
		</nav>
	);
};

export default Navbar;
