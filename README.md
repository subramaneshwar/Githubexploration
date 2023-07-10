# Github Exploration App

This is a Github exploration app that allows users to log in, view user profiles, and search for Github users. It is built using React, React Router, Redux, and Tailwind CSS.

## Note
enter github usernames only 
- username: username
- password: username
### example
- username: subramaneshwar
- password: subramaneshwar


## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React that enables navigation and routing in the application.
- Redux: A predictable state container for managing the application's global state.
- Tailwind CSS: A utility-first CSS framework for building responsive user interfaces.

## Features

- **Login Page**: Users can enter their  Github username, and password to log in. User data is fetched from the Github API and stored in the Redux store upon successful login.

- **Home Page**: After logging in, users are redirected to the home page. Data from the Github public API (https://api.github.com/users) is fetched and displayed in tile form. Clicking on a tile redirects to the user details page.

- **User Details Page**: Users can view detailed information about a specific Github user by fetching their data from the Github public API (https://api.github.com/users/<username>). The top five repositories of the user are also listed.

- **Profile Details Page**: Users can view their own profile details by fetching their data from the Github public API (https://api.github.com/users/<username>). The top five repositories of the user are also listed. A heading is displayed as "My GitHub Profile" for the logged-in user.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/github-exploration-app.git`
2. Navigate to the project directory: `cd github-exploration-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the app in your browser: `http://localhost:3000`

## Usage

- Navigate to the login page and enter your email, password, Github username, and password to log in.
- After successful login, you will be redirected to the home page where you can view Github user data in tile form.
- Use the search bar in the navigation bar to search for specific Github usernames and view their details.
- Click on a tile on the home page or search results page to view detailed information about a user, including their repositories.
- If you click on the "Your Profile" button, it will redirect you to the details page of your own Github profile.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
