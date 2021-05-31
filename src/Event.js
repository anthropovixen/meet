import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false,
	};

	handleShowDetails = () => {
		if (this.state.showDetails === true) {
			this.setState({ showDetails: false });
		} else {
			this.setState({ showDetails: true });
		}
	};

	render() {
		const showDetails = this.state.showDetails;
		const { event } = this.props;

		return (
			<div className="event">
				<h2 className="event-summary">{event.summary}</h2>
				<p className="event-location">{event.location}</p>
				{/* <p className="event-date">
					{event.start.dateTime} ({event.start.timeZone} Standard Time)
				</p> */}

				{showDetails && (
					<div className="expanded">
						<p className="description">{event.description}</p>
						<a className="link" href={event.htmlLink}>
							See details on Google Calendar
						</a>
					</div>
				)}

				<button
					className="detailsButton"
					onClick={() => this.handleShowDetails()}
				>
					{!showDetails ? 'Show more' : 'Hide'}
				</button>
			</div>
		);
	}
}

export default Event;
