import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NavBar from "./components/navbar/NavBar";
import LightMode from "./components/lightmode/LightMode";

const App = () => {
	return (
		<>
			<NavBar />
			<LightMode />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/projects"
					element={<Projects />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
		</>
	);
};

export default App;
