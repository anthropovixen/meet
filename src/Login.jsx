import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import './Login.css';

function Login() {
	return (
		<div>
			{/** Jumbotron */}

			<section>
				<Jumbotron className="jumbotron">
					<h1> WEB DEV Meet UP </h1>
					<p>
						Want to improve your dev skills? Log in with your Google account and
						see events from a Google calendar made just for coders with cool
						events in all the main cities around the world.
					</p>
					<Button
						href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=793105675417-msvbkhh8j3e64gc3vnbp4ap1asg06o02.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftanimaraeliassantos.github.io%2Fmeet%2F"
						className="jumbotron-button"
					>
						SIGN IN
					</Button>
				</Jumbotron>
			</section>

			{/** Privacy Policy */}
			<section id="about">
				<Container className="about-container">
					<h1 className="section-title">About</h1>
					<p className="section-description">
						Meetups are a great opportunity to get to know fellow coders with
						same interest as yours. Increase your network, find a mentor,
						discover THAT amazing job opportunity, and multiply your
						possibilities.
					</p>
				</Container>
			</section>

			{/** Privacy Policy */}
			<section id="privacy">
				<Container className="privacy-container">
					<h1 className="privacy-title">Privacy policy</h1>
					<p className=" privacy-description">
						We respect the privacy of our users. Our privacy Policy explains how
						we collect, use, disclose, and safeguard your information when you
						visit our mobile application.{' '}
						<span>
							If you do not agree with the terms of this privacy policy, please
							do not access the application.
						</span>
					</p>
					<Button
						href="https://tanimaraeliassantos.github.io/webdevmeetup/privacy.html"
						className="privacy-button"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Privacy Policy
					</Button>
				</Container>
			</section>
		</div>
	);
}

export default Login;
