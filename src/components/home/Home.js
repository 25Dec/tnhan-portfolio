import React from "react";
import HomeBtns from "./HomeBtns";
import HomeSocials from "./HomeSocials";
import Avatar1 from "../../assets/img/Avatar1.jpg";
import "./home.css";

const Home = () => {
	return (
		<section id="home">
			<div className="container home__container">
				<h5>Hello I'm </h5>
				<h2>Thien Nhan</h2>
				<h5>Front-end Developer</h5>

				<HomeBtns />
				<HomeSocials />

				<div className="home__image">
					<img
						src={Avatar1}
						alt="Avatar"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
