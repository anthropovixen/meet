import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Login from './Login';
import { getEvents, checkToken } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		currentLocation: 'all',
		tokenCheck: false,
		warningText: '',
	};

	updateEvents = (location, eventCount) => {
		const { currentLocation, numberOfEvents } = this.state;
		if (location) {
			getEvents().then((response) => {
				const locationEvents =
					location === 'all'
						? response.events
						: response.events.filter((event) => event.location === location);
				const events = locationEvents.slice(0, numberOfEvents);
				return this.setState({
					events: events,
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
				const events = locationEvents.slice(0, eventCount);
				return this.setState({
					events: events,
					numberOfEvents: eventCount,
					locations: response.locations,
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
		if (!navigator.onLine) {
			this.setState({
				warningText: 'Cached data is being displayed.',
			});
		} else {
			this.setState({
				warningText: '',
			});
		}
	}
	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		const { tokenCheck, locations, numberOfEvents, events } = this.state;
		return tokenCheck === false ? (
			<div className="App">
				<Login />
			</div>
		) : (
			<div className="App">
				<h1>Meet App</h1>
				<h5>Choose your nearest city</h5>
				<CitySearch updateEvents={this.updateEvents} locations={locations} />
				<h5> Number of events you want to see</h5>
				<NumberOfEvents
					updateEvents={this.updateEvents}
					numberOfEvents={numberOfEvents}
				/>
				<WarningAlert text={this.state.warningText} />
				<h5> List of events</h5>
				<EventList events={events} />
			</div>
		);
	}
}

export default App;
