# React Movie Application

A modern and responsive movie discovery application built with **React**, **Vite**, **Tailwind CSS**, **TMDB API**, and **Appwrite**.
The application allows users to search for movies, browse popular titles, and view trending movies based on search activity.

## Overview

This React Movie Application is designed to provide a clean and smooth movie browsing experience. Users can search for movies by title, view movie details such as rating, language, release year, and poster, and explore trending movies generated from user search data.

The project focuses on modern frontend development practices including reusable components, API integration, state management, responsive UI design, and backend service integration using Appwrite.

## Features

* Search movies by title
* Browse popular movies
* Display movie posters, ratings, language, and release year
* Trending movies section based on search count
* Debounced search functionality for better performance
* Loading spinner while fetching data
* Error handling for failed API requests
* Responsive and modern user interface
* Appwrite database integration for tracking search popularity
* TMDB API integration for movie data

## Tech Stack

* React.js
* Vite
* JavaScript
* Tailwind CSS
* TMDB API
* Appwrite
* React Use
* ESLint

## Project Structure

```bash
react-movie-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── appwrite.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/DANUCKSAN/react-movie-app.git
```

### 2. Navigate to the project folder

```bash
cd react-movie-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a `.env.local` file in the root directory and add the following environment variables:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### 5. Run the development server

```bash
npm run dev
```

The application will start on:

```bash
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Environment Variables

| Variable                      | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `VITE_TMDB_API_KEY`           | TMDB API bearer token used to fetch movie data     |
| `VITE_APPWRITE_PROJECT_ID`    | Appwrite project ID                                |
| `VITE_APPWRITE_DATABASE_ID`   | Appwrite database ID                               |
| `VITE_APPWRITE_COLLECTION_ID` | Appwrite collection ID used to store search counts |

## API Integration

### TMDB API

The application uses the TMDB API to fetch movie data. It retrieves popular movies by default and searches movies based on the user’s search term.

Main API features used:

* Discover popular movies
* Search movies by title
* Fetch movie posters, ratings, language, and release dates

### Appwrite

Appwrite is used to store and track search terms. When a user searches for a movie, the application checks whether the search term already exists in the database.

If the search term exists, the count is increased.
If the search term does not exist, a new document is created.

This data is then used to display the trending movies section.

## Main Components

### Search Component

Handles the movie search input and updates the search term based on user input.

### MovieCard Component

Displays individual movie information including:

* Movie poster
* Title
* Rating
* Language
* Release year

### Spinner Component

Displays a loading animation while movie data is being fetched.

## Key Functionalities

### Debounced Search

The application uses debounce functionality to delay API calls while the user is typing. This improves performance and prevents unnecessary API requests.

### Trending Movies

Trending movies are generated using Appwrite search count data. Movies with higher search counts are displayed in the trending section.

### Error Handling

If the API request fails or no movies are found, the application displays a user-friendly error message.

## Screenshots

Add your project screenshots here:

```md
![Home Page](./public/screenshot-home.png)
![Search Results](./public/screenshot-search.png)
```

## Future Improvements

* Add movie details page
* Add genre-based filtering
* Add pagination or infinite scrolling
* Add user authentication
* Add favourites or watchlist feature
* Improve accessibility
* Add dark/light mode toggle
* Deploy the application online

## Repository

GitHub Repository:
https://github.com/DANUCKSAN/react-movie-app

## Author

**Danucksan**
GitHub: https://github.com/DANUCKSAN

## License

This project is open-source and available for learning and portfolio purposes.
