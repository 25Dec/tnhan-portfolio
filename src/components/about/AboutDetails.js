import React from "react";
import Avatar2 from "../../assets/img/Avatar2.png";
import Avatar3 from "../../assets/img/Avatar3.png";
import "./about.css";

const AboutDetails = () => {
	return (
		<div className="about-details">
			<div className="about-details-image">
				<div className="front">
					<img
						src={Avatar2}
						alt="Avatar"
					/>
				</div>
				<div className="back">
					<img
						src={Avatar3}
						alt="Avatar"
					/>
				</div>
			</div>
			<div className="about-details-content">
				<p>
					My full name is Nguyen Huynh Thien Nhan. I'm living in HCM city and I'm 3rd year student of University of
					Information Technology (UIT), majoring in Information Systems. With a passion for the coding as well as other
					interests, I have decided to study more about web development.
					<br />
					<br />
					My future direction is to become a Fullstack developer financially free and expand my relationship. Besides
					coding, I also like listening to music and reading books.
				</p>
			</div>
		</div>
	);
};

export default AboutDetails;
