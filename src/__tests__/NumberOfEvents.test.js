import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents />);
	});

	test('render text input', () => {
		expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
	});

	test('input value is equal to 32 default', () => {
		expect(
			NumberOfEventsWrapper.find('.event-number-input').at(0).props().value
		).toEqual(32);
	});

	test('check on change state', () => {
		const eventValue = { target: { value: 5 } };
		NumberOfEventsWrapper.find('.event-number-input').simulate(
			'change',
			eventValue
		);
		expect(NumberOfEventsWrapper.state('eventValue')).toBe(5);
	});
});
