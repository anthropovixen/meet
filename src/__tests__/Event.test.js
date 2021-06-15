import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';
import { extractEvents } from '../api';

const eventDetail = extractEvents(mockData);

describe('<Event /> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={eventDetail} />);
	});

	test('render event component', () => {
		expect(EventWrapper).toHaveLength(1);
	});

	test('render event details', () => {
		expect(EventWrapper.find('.event')).toHaveLength(1);
	});

	test('render show event details', () => {
		expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
	});

	test('render hide event details', () => {
		EventWrapper.setState({ showDetails: false });
		EventWrapper.find('.detailsButton').simulate('click');
		const eventDetails = EventWrapper.find('.eventDetails');
		expect(eventDetails).toHaveLength(0);
	});
});
