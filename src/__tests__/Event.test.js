import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData, mockEvent } from '../mock-data';
import { extractEvents } from '../api';

const eventData = extractEvents(mockData);

describe('<Event /> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={eventData[0]} />);
	});

	test('render event component', () => {
		expect(EventWrapper).toHaveLength(1);
	});

	test('render event details', () => {
		expect(EventWrapper.find('.event')).toHaveLength(1);
	});

	test('render show event details', () => {
		EventWrapper.setState({ showDetails: true });
		EventWrapper.find('.detailsButton').simulate('click');
		expect(EventWrapper.find('.expanded')).toHaveLength(1);
	});

	test('render hide event details', () => {
		EventWrapper.setState({ showDetails: false });
		EventWrapper.find('.detailsButton').simulate('click');
		expect(EventWrapper.find('.expanded')).toHaveLength(0);
	});
});
