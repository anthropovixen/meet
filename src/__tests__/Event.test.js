import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockEvent } from '../mock-data';

describe('<Event /> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={mockEvent} />);
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
