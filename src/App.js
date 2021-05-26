import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		currentLocation: 'all',
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

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({ events: events, locations: extractLocations(events) });
			}
		});
	}
	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return (
			<div className="App">
				<h1>Meet App</h1>
				<h3>Choose your nearest city:</h3>
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
				/>
				<h3> Number of events you want to see(max of 32):</h3>
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
