import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 32,
	};

	handleInputChange = (event) => {
		const value = event.target.value;
		this.props.updateEvents(null, value);
		this.setState({
			NumberOfEvents: value,
		});
		if (value < 1 || value > 32) {
			this.setState({
				infoText: 'Please, pick a number between 1 and 32',
			});
		} else {
			this.setState({
				infoText: '',
			});
		}
	};

	render() {
		const { numberOfEvents } = this.state;
		return (
			<div className="numberOfEvents">
				<label className="event-number-label">Number of Events:</label>
				<input
					type="number"
					className="event-number-input"
					placeholder="Choose number of events you want to see"
					value={numberOfEvents}
					onChange={this.handleInputChange}
				/>
				<ErrorAlert text={this.state.infoText} />
			</div>
		);
	}
}

export default NumberOfEvents;
