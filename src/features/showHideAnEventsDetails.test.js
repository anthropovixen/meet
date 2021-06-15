import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
	let EventListWrapper;
	let EventWrapper;

	let AppWrapper;

	test('An event element is collapsed by default', ({ given, when, then }) => {
		given('An event element is collapsed by default', () => {
			AppWrapper = mount(<App />);
			EventListWrapper = mount(<EventList events={mockData} />);
			EventWrapper = mount(<Event event={mockData[0]} />);
		});

		when('the user sees the list', () => {
			expect(EventWrapper.find('.expanded')).toHaveLength(0);
		});

		then('the events should have their details hidden', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.expanded')).toHaveLength(0);
		});
	});

	test('User can expand an event to see its details', ({
		given,
		when,
		then,
	}) => {
		given('the list of events from the chosen city is showing', () => {
			AppWrapper = mount(<App />);
			EventListWrapper = mount(<EventList events={mockData} />);
			EventWrapper = mount(<Event event={mockData[0]} />);
		});

		when('the user clicks on button to see more details of event', () => {
			EventWrapper.find('.detailsButton').simulate('click');
		});

		then('the details of the chosen event will be shown to the user', () => {
			expect(EventWrapper.find('.expanded')).toHaveLength(1);
		});
	});

	test('User can collapse an event to hide its details', ({
		given,
		and,
		when,
		then,
	}) => {
		given('there is an event with the details open', () => {
			AppWrapper = mount(<App />);
			EventListWrapper = mount(<EventList events={mockData} />);
			EventWrapper = mount(<Event event={mockData[0]} />);
			EventWrapper.find('.detailsButton').simulate('click');
		});

		and('the user has finished reading the details', () => {});

		when('the user clicks on a button to hide details', () => {
			EventWrapper.find('.detailsButton').simulate('click');
		});

		then('the details will be hidden like before', () => {
			expect(EventWrapper.find('.expanded')).toHaveLength(0);
		});
	});
});
