# WanderCard

## Project overview:

WanderCard is an interactive travel discovery app that allows users to explore countries around the world in a fun and engaging way. Users can spin a virtual globe to randomly discover a country, indicate whether they like it or not, and save their favorite destinations. Each country has a detailed page showing key information, weather, quick facts, and traditional meals. Users can also mark countries as visited, manage their favorites and visited lists, and even create personalized postcards from the places they’ve explored.

## Purpose and main features:

### Purpose:

WanderCard is designed to make exploring the world fun and interactive. It encourages users to discover new countries, learn interesting facts, track their travels, and save favorite destinations—all in one engaging app.

### Main Features:
- Spin a virtual globe to discover random countries.
- Like or dislike countries, with favorites saved to local storage.
- Detailed country pages with information, weather, quick facts, and traditional meals.
- Mark countries as visited or favorite directly from the country page.
- View and manage lists of favorite and visited countries.
- Create personalized postcards from visited countries.
- Fully responsive design for seamless use on any device.

## Acceptance criteria:

- [x] Responsive design (like all our projects)
- [x] Good HTML and CSS practices (we must continue paying attention to small details)
- [x] Use at least 3 states with a logical purpose; do not use them just for the sake of it
- [x] Use at least one useEffect
- [x] Make at least one API request to fetch data
- [x] Use React Router: declare routes and navigate between them using Links; at least one route must accept a parameter, and the component rendered by that route should make use of the passed parameter in some meaningful way

## Getting Started:

### Installation instructions:

1. Clone the repository
   `git clone https://github.com/BePalm89/wanderCard.git`
2. Navigate into the project folder
    `cd wandercard`
3. Install dependencies
   `npm install`
4. Run the  project
    `npm run dev`
5. The app will open in your default browser at http://localhost:5173

## Technologies Used

- React ( JSX, Component, Props, useState, useEffect )
- React Router for navigation
- React Form for form management
- Lucide for icons
- Axios for the API calls

## API Sources

- Rest Country API `https://www.restcountries.com/` - info about the country like the capital, the languages, the continent, the currency and the flag
- OpenWeather API `https://openweathermap.org/current` - info about the weather of the country's capital like, temperature, humidity, condition and wind speed
- Wikipedia API `https://www.mediawiki.org/wiki/API:Action_API` - info about the country
- TheMealDB API `https://www.themealdb.com/api.php` - info about the typical dishes of the country
- Unsplash API `https://unsplash.com/developers` - get a photo of the country

## Features:

### Home page:

![Home page](/design/homepage.png)

![Home page - country card](/design/countrycard.png)

The Home Page is the central hub of WanderCard, designed to welcome users and immediately engage them in exploring the world. Key elements include:
- Interactive Globe: that users can spin to discover random countries.
- Random Country Card: When the globe stops, a card appears showing the country’s name and picture.
- Like / Dislike Buttons: Users can indicate if they like the country (thumbs up) or dislike it (thumbs down). Liked countries are saved in local storage as favorites.
- Navigation Links: Quick access to other sections of the app, such as Favorites and Visited, using React Router Links.
- How to Play Button: A button that, when clicked, opens a dialog explaining how to use the app, guiding users through spinning the globe, liking/disliking countries, and exploring other features.
- Clickable Country Image: Clicking on the country’s image redirects the user to the Country Detail Page, where they can explore more information about that country.

### Favourite page:

![Favourite List](/design/favouriteList.png)
![Favourite Empty](/design/favouriteEmpty.png)

The Favorites Page allows users to view and manage all the countries they have marked as liked. It serves as a personalized collection of destinations that the user wants to remember or potentially visit. Key elements include:

- Favorites List: Displays all the countries the user has liked, showing each country’s name, flag, and a brief snapshot.
- Clickable Country Cards: Clicking on a country card or image redirects the user to the Country Detail Page, where they can explore detailed information, weather, quick facts, and meals.
- Navigation Links: Easy access to other sections of the app, such as the Home Page, Visited Page, or Postcards Page, using React Router Links. 
- Empty State Message: If the favorites list is empty, a friendly message is displayed encouraging the user to explore countries. A button is also provided that redirects the user back to the Travel Roulette (Home Page) to start discovering new destinations.

### Visited page:

![Visited List](/design/visitedList.png)
![Visited Empty](/design/visitedEmpty.png)

The Visited Page allows users to view and manage all the countries they have marked as visited. It serves as a personal record of the places the user has explored. Key elements include:

- Visited List: Displays all the countries the user has marked as visited, showing each country’s name, flag, and a brief snapshot.
- Clickable Country Cards: Clicking on a country card or image redirects the user to the Country Detail Page, where they can explore detailed information, weather, quick facts, and meals.
- Create Postcard Button: A button allows users to create a personalized postcard using all the countries they have already visited. Clicking this button redirects to the `/postcard` page.
- Empty State Message: If the visited list is empty, a friendly message is displayed encouraging the user to explore countries. A button is also provided that redirects the user back to the Travel Roulette (Home Page) to discover new destinations.

### Country Details page:

![Visited List](/design/countryDetailsPage.png)

The Country Detail Page provides an in-depth look at a specific country, combining key information, weather, cultural facts, and interactive features. Key elements include:

- Feature Image, Name, and Flag: The top section prominently displays the country’s flag, name, and a representative image.
- Info Box: Shows essential details such as the country’s capital, currency, languages, and continent.
- Weather Box: Provides current weather information for the country’s capital, including temperature, humidity, wind speed, and general conditions.
- Quick Fact Box: Displays a short description with interesting facts about the country.
- Food Box: If available, shows a typical recipe from the country, highlighting local cuisine.
- Set as Favorite or Visited: Users can mark the country as favorite or visited if it hasn’t already been added.
- Visited and Favorite Badges: If the country is already marked as visited, favorite, or both, badges are displayed to indicate its status.
- Redirection After Action: When a user marks the country as favorite or visited, they are automatically redirected to the corresponding list page (Favorites or Visited)
- Navigation Links: Easy access to other sections of the app, such as Home, Favorites, Visited, or Postcards pages, using React Router Links.

The Country Detail Page combines informative content with interactive functionality, allowing users to learn about a country while easily managing their travel lists.


### Postcard page:

![Postcard page](/design/postcardPage.png)

The Postcard Page allows users to create personalized postcards from the countries they have already visited. It combines a live-preview feature with an easy-to-use form. Key elements include:

- Two-Panel Layout:
  - Left Side: Form where users fill in postcard details.
  - Right Side: Live preview of the postcard that updates in real-time as the user types.
- Form Fields:
  - Select Destination: Choose a country from the list of visited countries.
  - Message: Add a custom message for the postcard.
  - Sender Name: Enter the name of the sender.
  - Recipient Name and Email: Enter the recipient’s name and email address
- Live Preview: The postcard preview updates dynamically as the user fills out the form, allowing them to see exactly how their postcard will look.
- Validation and Send Button: The "Send Postcard" button remains disabled until all form inputs are valid. Once the postcard is successfully sent, the user is redirected to the Visited Page.
- Navigation Links: Easy access to other sections of the app, such as Home, Favorites, Visited, or Postcards pages, using React Router Links.

