import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
	render() {
		const { events } = this.props;
		return (
			<ul className="EventList">
				{events.map((event) => (
					<div className="event-list-card" key={event.id}>
						<div className="event-list-card-box">
							<li>
								<Event event={event} />
							</li>
						</div>
					</div>
				))}
			</ul>
		);
	}
}

export default EventList;
