# WEB DEV MEETUP APP

This App is a serverless, progressive web application (PWA) built with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## User stories, test scenarios and Gherkin's syntax

_FEATURE 1: FILTER EVENTS BY CITY_

**As an** user,
**I should be able to** filter events by city,
**So that** I can see the list of events taking place in that city.

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

1. GIVEN user hasn’t searched for any city
1. WHEN the user opens the app
1. THEN the user should see a list of all upcoming events

- Scenario 2: User should see a list of suggestions when they search for a city.

1. GIVEN the main page is open
1. WHEN user starts typing in the city textbox
1. THEN the user should see a list of cities that match what they’ve typed

- Scenario 3: User can select a city from the suggested list.

1. GIVEN the user was typing Berlin in the city textbox and the list of suggested cities is showing
1. WHEN the user selects a city from the list
1. THEN their city should be changed to that city and the user should receive a list of events in that city

_FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS_

**As an** user,
**I should be able to** click on a button to show/hide details about an event,
**So that** I can see the details of an event.

- Scenario 1: An event element is collapsed by default.

1. GIVEN the list of events from the chosen city is showing
1. WHEN the user sees the list
1. THEN the events should have their details hidden

- Scenario 2: User can expand an event to see its details.

1. GIVEN the list of events from the chosen city is showing
1. WHEN the user clicks on button to see more details of event
1. THEN the details of the chosen event will be shown to the user

- Scenario 3: User can collapse an event to hide its details.

1. GIVEN there is an event with the details open and the user has finished reading the details
1. WHEN the user clicks on a button to hide details
1. THEN the details will be hidden like before

_FEATURE 3: SPECIFY THE NUMBER OF EVENTS_

**As an** user,
**I should be able to** define the number of events I see,
**So that** I can limit the number of events I see.

- Scenario 1: When user hasn’t specified a number, 32 is the default number.

1. GIVEN the user has defined the city he wants to see the events from
1. WHEN the user clicks on go
1. THEN the list of events will show a maximum amount of 32 events on the first page

- Scenario 2: User can change the number of events they want to see.

1. GIVEN the user has defined the city he wants to see the events from AND wants to see 5, 10, 15 or 20 events
1. WHEN the user clicks on a dropdown button
1. THEN they will be able to choose the number of events they will want to see

_FEATURE 4: USE THE APP WHEN OFFLINE_

**As an** user,
**I should be able to** see the app content offline,
**So that** I can look for events even when out of internet.

- Scenario 1: Show cached data when there’s no internet connection.

1. GIVEN the user has used the app before
1. WHEN the user tries to access it when offline
1. THEN it will show the cached data

- Scenario 2: Show error when user changes the settings (city, time range).

1. GIVEN the user has the app open
1. WHEN they try to change settings
1. THEN the app will show an error screen

_FEATURE 5: ADD SHORTCUT TO HOME SCREEN_

**As an** user,
**I should be able to** add a shortcut to my home screen,
**So that** I can have access to the app when offline.

_FEATURE 6: DATA VISUALIZATION_
**As an** user,
**I should be able to** see a chart with the number of events in a city,
**So that** I can see the amount of options of events I have.

- Scenario 1: Show a chart with the number of upcoming events in each city.

1. GIVEN the user has chosen the city
1. WHEN the user clicks on go
1. THEN it will be show a chart with the number of events in that city
