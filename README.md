# Travel App

## Overview
This project requires you to create a travel app that allows the user to plan a grip by adding in a destination, departure date and duration of travel. On searching the app will display an image of the destination and the forecasted weather. The trip can be saved and the details recalled at a later point by searching from the list of destinations in the dropdown list.

## Instructions
###### Input fields
1) Enter a destination
2) Enter a date
3) Enter the duration of the trip

*Press Search*

###### Display details
-Countdown to departure

-Weather forecast (WeatherBit API via Geonames)

-Image (Pixabay)

*Press Save*

Destination, date and duration are saved to the project endpoint. The destination is also saved to the dropdown list on the UI. By selecting the destination from the dropdown and pressing **Find** the details of the trip are recalled from the server.

To remove a trip from both the endpoint and the UI, select the destination from the dropdown and press **Remove**.

***Limitations and future Optimisations:***

User can add multiple trips for the same destination but the remove button will remove the first trip saved to the endpoint.

App does not allow flexibility to choose between cities with the same name in different countries.

Pixabay does not always retrieve an image for the intended destination (see point above).

User can double book a trip on the same dates.

***The project has been built using:***

-Webpack

-Webpack Loaders and Plugins

-Sass, Javascript, html

-Service workers

-An external API

-JSDOM

-nodeJS

-Jest testing
