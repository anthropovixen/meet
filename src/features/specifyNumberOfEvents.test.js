import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
	let AppWrapper, NumberOfEventsWrapper, CitySearchWrapper, locations;

	test('When user hasn’t specified a number, 32 is the default number', ({
		given,
		when,
		then,
	}) => {
		given(
			'the user has defined the city he wants to see the events from',
			() => {
				locations = extractLocations(mockData);
				CitySearchWrapper = shallow(
					<CitySearch locations={locations} updateEvents={() => {}} />
				);
			}
		);

		when('the user loads list of events', () => {
			NumberOfEventsWrapper = shallow(
				<NumberOfEvents updateEvents={() => {}} />
			);
		});

		then(
			'the list of events will show a maximum amount of 32 events on the first page',
			() => {
				expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
			}
		);
	});

	test('User can change the number of events they want to see', ({
		given,
		and,
		when,
		then,
	}) => {
		let AppWrapper;
		given(
			'the user has defined the city he wants to see the events',
			async () => {
				AppWrapper = await mount(<App />);
				locations = extractLocations(mockData);
				CitySearchWrapper = shallow(
					<CitySearch locations={locations} updateEvents={() => {}} />
				);
			}
		);

		and('the user wants to see 10 events', async () => {
			AppWrapper = await mount(<App />);
			AppWrapper.find('.event-number-input').simulate('change', {
				target: { value: 10 },
			});
		});

		when('the user clicks on a dropdown button', () => {});

		then(
			'they will be able to choose the number of events they will want to see',
			() => {
				const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
				NumberOfEventsWrapper.setState({ numberOfEvents: 10 });
				expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
			}
		);
	});
});
