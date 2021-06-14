import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Login from './Login';
import { getEvents, checkToken, extractLocations } from './api';

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		currentLocation: 'all',
		tokenCheck: false,
	};

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = (location, eventCount) => {
		let locationEvents;
		getEvents().then((events) => {
			if (location === 'all' && eventCount === 0) {
				locationEvents = events;
			} else if (location !== 'all' && eventCount === 0) {
				locationEvents = events.filter((event) => event.location === location);
			} else if ((location === '') & (eventCount > 0)) {
				locationEvents = events.slice(0, eventCount);
			} else if (location === '' && eventCount === '') {
				locationEvents = events;
			}
			this.setState({
				events: locationEvents,
				numberOfEvents: eventCount,
			});
		});
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

		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events.slice(0, this.state.numberOfEvents),
					locations: extractLocations(events),
				});
			}
		});
	}

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
				<h3> Number of Events (Max 32)</h3>
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
