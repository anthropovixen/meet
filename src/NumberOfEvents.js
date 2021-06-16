import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 32,
	};

	handleInputChanged = (event) => {
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
				<input
					type="number"
					className="event-number-input"
					value={numberOfEvents}
					onChange={this.handleInputChanged}
				/>
				<ErrorAlert text={this.state.infoText} />
			</div>
		);
	}
}

export default NumberOfEvents;
