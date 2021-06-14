import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Login from './Login';
import { getEvents, checkToken } from './api';

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		currentLocation: 'all',
		tokenCheck: false,
	};

	updateEvents = (location, eventCount) => {
		const { currentLocation, numberOfEvents } = this.state;
		if (location) {
			getEvents().then((events) => {
				const locationEvents =
					location === 'all'
						? events
						: events.filter((event) => event.location === location);
				const filteredEvents = locationEvents.slice(0, numberOfEvents);
				this.setState({
					events: filteredEvents,
					currentLocation: location,
				});
			});
		} else {
			getEvents().then((events) => {
				const locationEvents =
					currentLocation === 'all'
						? events
						: events.filter((event) => event.location === currentLocation);
				const filteredEvents = locationEvents.slice(0, eventCount);
				this.setState({
					events: filteredEvents,
					numberOfEvents: eventCount,
				});
			});
		}
	};

	async componentDidMount() {
		const accessToken = localStorage.getItem('access_token');
		const validToken =
			accessToken !== null ? await checkToken(accessToken) : false;
		this.setState({ tokenCheck: validToken });
		if (validToken === true) this.updateEvents();
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get('code');

		this.mounted = true;
		if (code && this.mounted === true && validToken === false) {
			this.setState({ tokenCheck: true });
			this.updateEvents();
		}
	}
	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		const { tokenCheck } = this.state;
		return tokenCheck === false ? (
			<div className="App">
				<Login />
			</div>
		) : (
			<div>
				<h1>Meet App</h1>
				<h3> Search events in your city</h3>
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
					numberOfEvents={this.state.numberOfEvents}
				/>
				<h3>Choose how may events you want to see (max 32)</h3>
				<NumberOfEvents
					numberOfEvents={this.state.numberOfEvents}
					updateEvents={this.updateEvents}
				/>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
