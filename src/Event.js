import React, { Component } from 'react';

class Event extends Component {
	state = {
		event: {},
		showDetails: false,
	};

	handleShowDetails = () => {
		if (this.state.showDetails === false) {
			this.setState({ showDetails: false });
		} else {
			this.setState({ showDetails: true });
		}
	};

	render() {
		const { summary, location, description, link, dateTime } = this.props.event;

		return (
			<div className="event">
				<h1 className="summary">{summary}</h1>
				<p className="date">{dateTime}</p>
				<p className="location">{location}</p>

				{this.state.showDetails && (
					<div className="expanded">
						<h2>About event</h2>
						<p className="description">{description}</p>
						<a className="link" href={link}>
							See details on Google Calendar
						</a>
					</div>
				)}

				<button
					className="detailsButton"
					onClick={() => this.handleShowDetails()}
				>
					{!this.state.showDetails ? 'Show details' : 'Hide-details'}
				</button>
			</div>
		);
	}
}

export default Event;
