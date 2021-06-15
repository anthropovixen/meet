Feature: It must be able to show/hide an event’s details

Scenario: An event element is collapsed by default
Given An event element is collapsed by default
When the user sees the list
Then the events should have their details hidden
	
Scenario: User can expand an event to see its details
Given the list of events from the chosen city is showing
When the user clicks on button to see more details of event
Then the details of the chosen event will be shown to the user

Scenario: User can collapse an event to hide its details
Given there is an event with the details open 
And the user has finished reading the details
When the user clicks on a button to hide details
Then the details will be hidden like before
