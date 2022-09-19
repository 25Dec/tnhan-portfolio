/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { TbBrandMessenger } from "react-icons/tb";
import { BsPhone, BsCheckCircle } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
	const form = useRef();
	const [isSent, setIsSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_caskoh9", "template_7khqmvl", form.current, "kOBtKZIdQ5bVbAdri")
			.then(() => {
				setIsSent(true);
			})
			.then(() => {
				setTimeout(() => {
					setIsSent(false);
				}, 2000);
			})
			.then(() => {
				e.target.reset();
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<section id="contact">
			<h2>Get In Touch</h2>
			<p>Contact me</p>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<FiMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>nhannht2512@gmail.com</h5>
						<a href="mailto:nhannht2512@gmail.com">Send an email</a>
					</article>
					<article className="contact__option">
						<TbBrandMessenger className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Thiện Nhân</h5>
						<a
							href="https://m.me/nhannht2512"
							target="_blank"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsPhone className="contact__option-icon" />
						<h4>Phone</h4>
						<h5>0964 886 660</h5>
						<a href="tel:+84964886660">Make a phone call</a>
					</article>
				</div>
				{!isSent && (
					<form
						ref={form}
						onSubmit={sendEmail}
					>
						<input
							type="text"
							name="name"
							placeholder="Your fullname"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your email"
							required
						/>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							required
						/>
						<textarea
							name="message"
							rows="7"
							placeholder="Your message"
							required
						></textarea>
						<button
							type="submit"
							className="btn btn-primary"
						>
							Send message
						</button>
					</form>
				)}
				{isSent && (
					<article className="contact__option sent">
						<BsCheckCircle className="contact__option-icon-sent" />
						<h5>Your message has been sent</h5>
					</article>
				)}
			</div>
		</section>
	);
};

export default Contact;
