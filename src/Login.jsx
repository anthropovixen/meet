import React from 'react';

function Login() {
	return (
		<div className="App">
			<h1> Welcome to the Meet App</h1>
			<h4>
				Log in to see upcoming events around the world for full-stack developers
			</h4>
			<div className="button_cont" align="center">
				<div class="google-btn">
					<div class="google-icon-wrapper">
						<img
							class="google-icon"
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
							alt="Google sign-in"
						/>
					</div>
					<a
						href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=793105675417-msvbkhh8j3e64gc3vnbp4ap1asg06o02.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fanthropovixen.github.io%2Fmeet%2F"
						rel="nofollow noopener"
						class="btn-text"
					>
						<b>Sign in with your Google account</b>
					</a>
				</div>
			</div>
			<a
				href="https://anthropovixen.github.io/meet/privacy.html"
				rel="nofollow noopener"
			>
				Privacy Policy
			</a>
		</div>
	);
}

export default Login;
