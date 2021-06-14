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

	updateEvents = (location, eventCount) => {
		const { currentLocation, numberOfEvents } = this.state;
		if (location) {
			getEvents().then((response) => {
				const locationEvents =
					location === 'all'
						? response.events
						: response.events.filter((event) => event.location === location);
				const filteredEvents = locationEvents.slice(0, numberOfEvents);
				return this.setState({
					events: filteredEvents,
					currentLocation: location,
					locations: response.locations,
				});
			});
		} else {
			getEvents().then((response) => {
				const locationEvents =
					currentLocation === 'all'
						? response.events
						: response.events.filter(
								(event) => event.location === currentLocation
						  );
				const filteredEvents = locationEvents.slice(0, eventCount);
				return this.setState({
					events: filteredEvents,
					numberOfEvents: eventCount,
					locations: response.locations,
				});
			});
		}
	};

	render() {
		const { locations, numberOfEvents, events, tokenCheck } = this.state;
		return tokenCheck === false ? (
			<div className="App">
				<Login />
			</div>
		) : (
			<div className="App">
				<h1>Meet App</h1>
				<h3> Choose your city</h3>
				<CitySearch updateEvents={this.updateEvents} locations={locations} />
				<NumberOfEvents
					updateEvents={this.updateEvents}
					numberOfEvents={numberOfEvents}
				/>
				<EventList events={events} />
			</div>
		);
	}
}

export default App;
