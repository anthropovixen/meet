import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import Login from './Login';
import { getEvents, checkToken } from './api';
import { WarningAlert } from './Alert';
import {
	CartesianGrid,
	Scatter,
	ScatterChart,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer,
} from 'recharts';

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
						? events.events
						: events.events.filter((event) => event.location === location);
				const filteredEvents = locationEvents.slice(0, numberOfEvents);
				this.setState({
					events: filteredEvents,
					currentLocation: location,
					locations: events.locations,
				});
			});
		} else {
			getEvents().then((events) => {
				const locationEvents =
					location === 'all'
						? events.events
						: events.events.filter(
								(event) => event.location === currentLocation
						  );
				const filteredEvents = locationEvents.slice(0, eventCount);
				this.setState({
					events: filteredEvents,
					numberOfEvents: eventCount,
					locations: events.locations,
				});
			});
		}
	};

	getData = () => {
		const { locations, events } = this.state;
		const data = locations.map((location) => {
			const number = events.filter((event) => event.location === location)
				.length;
			const city = location.split(', ').shift();
			return { city, number };
		});
		return data;
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
		const { tokenCheck, events } = this.state;
		return tokenCheck === false ? (
			<div className="App">
				<Login />
			</div>
		) : (
			<div className="App">
				<h1>Meet App</h1>
				<h4> Find your nearest city</h4>
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
				/>
				<h4>Choose the number of events you want to see</h4>
				<NumberOfEvents
					numberOfEvents={this.state.numberOfEvents}
					updateEvents={this.updateEvents}
				/>
				<WarningAlert text={this.state.warningText} />
				<div className="data-vis-wrapper">
					<EventGenre events={events} />
					<h4>Events in each city</h4>
					<ResponsiveContainer height={400}>
						<ScatterChart
							margin={{
								top: 20,
								right: 20,
								bottom: 20,
								left: 20,
							}}
						>
							<CartesianGrid />
							<XAxis type="category" dataKey="city" name="city" />
							<YAxis type="number" dataKey="number" name="number of events" />
							<Tooltip cursor={{ strokeDasharray: '3 3' }} />
							<Scatter data={this.getData()} fill="#8884d8" />
						</ScatterChart>
					</ResponsiveContainer>
				</div>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
