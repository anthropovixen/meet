import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
		eventValue: 32,
	};

	handleInputChange = (event) => {
		const eventValue = event.target.value;
		this.setState({
			eventValue,
		});
	};

	render() {
		return (
			<div className="event-number">
				<label htmlFor="numberOfEvent"></label>
				<input
					type="number"
					name="numberOfEvent"
					className="event-number-input"
					placeholder="Enter Number of Events"
					value={this.state.eventValue}
					onChange={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;
