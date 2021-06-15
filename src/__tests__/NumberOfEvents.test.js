import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
	});

	test('render the NumberOfEvents component', () => {
		expect(NumberOfEventsWrapper).toHaveLength(1);
	});

	test('render text input', () => {
		expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
	});

	test('render text input correctly', () => {
		const NumberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
		expect(
			NumberOfEventsWrapper.find('.event-number-input').prop('value')
		).toBe(NumberOfEvents);
	});

	test('change state', () => {
		NumberOfEventsWrapper.setState({
			numberOfEvents: '32',
		});
		const eventValue = { target: { value: '32' } };
		NumberOfEventsWrapper.find('.event-number-input').simulate(
			'change',
			eventValue
		);
		expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('32');
	});
});
