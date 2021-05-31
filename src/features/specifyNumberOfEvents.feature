Feature: It must specify the number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user has defined the city he wants to see the events from
When the user loads list of events
Then the list of events will show a maximum amount of 32 events on the first page
	
Scenario: User can change the number of events they want to see
Given the user has defined the city he wants to see the events
And the user wants to see 10 events
When the user clicks on a dropdown button
Then they will be able to choose the number of events they will want to see