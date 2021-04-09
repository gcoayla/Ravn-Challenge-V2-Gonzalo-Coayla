# Ravn-Challenge-V2
Simgle-page application created for the challenge V2 of the Ravn company.
Autor: Gonzalo Eduardo Coayla Zúñiga

## Technologies used
- ReactJs library
- Apollo Client

## Live preview

[Click me](https://laughing-bose-25abbe.netlify.app/)

## Setup

1. Clone or download the project.
2. Run `npm install` to install all the dependencies.
3. Run `npm start` to inicialize the application.
4. Navigate to `http://localhost:3000` in your browser.

## Project description
The proyect consume a a service based in GraphQl to show all the characters of the StarWars universe and allows us to select each character to show more information like the color of their eyes or the vehicles that the character uses in the movies.

When the aplication starts it will try to load the first 5 characters  and we'll see the loading icon.

![Loading](./app_screenshots/loading.png?raw=true "Loading")

If the query fails for any reason it will display an error notice.

![Error](./app_screenshots/error.png?raw=true "Loading")

The app will load the characters 5 by 5 until it loads them all.

![Error](./app_screenshots/first5.png?raw=true "Loading")

If we click in one of the characters the app will load the information of the selected character in the description component

![Error](./app_screenshots/selected.png?raw=true "Loading")

## Assumptions

The header and the description component are in a fixed position in order to can read the information of the character selected easily




