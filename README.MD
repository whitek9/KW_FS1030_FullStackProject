# Course Project FS1010

This project is an application consisting of an Express API and a front end built in React.

To get the project running: 

1. Follow the steps in the README in the "backend" directory to get the API running and set up

2. Run `$ npm install` in the "kellys-app" directory to install dependencies

3. Initialize the React application by running `$ npm start` in the "kellys-app" directory

### Additional Features

1. Hamburger menu leveraging [react-hamburger-menu](https://www.npmjs.com/package/react-hamburger-menu)

2. Added collapsible sections to Resume page to keep it cleaner and shorter

3. Added base Administrator Page `/admin` to provide base protected area with path to add other protected pages 

4. Show/Hide password button on login page

5. Updated error messages to display on login page

6. Added timestamp to POST entries and POST users route, and leveraged timestamp to add to submissions table to help keep messages organized

7. Added "Logout" button in protected area

### New Features I'd love to add next

1. Timeout on login https://www.npmjs.com/package/react-timeout ?

2. Modify/Remove users UI/routes

3. Add "archive" button in each row of form submissions to send the submission to an archived database and remove from active list

# Project Requirements

## Phase One - HTML/CSS Fundamentals 

- [x] Modify your website's markup to make it more semantically correct.
- [x] Make any improvements to your website's existing HTML and CSS to make it more maintainable. 

## Phase Two - Basic React 

- [x] Convert your website into React components.
- [x] Using React Router, ensure your website works as a multi-page React application.

## Phase Three - React with Backend 

- [x] Use the `useState` React hook in order to store your contact form's state.

- [x] Make a successful AJAX request ( `POST /contact_form/entries` ) from the Contact Us React component that displays a success and error notification upon form submission. 

- [x] Add a new page for your React application, which upon a successful submission to your login     route ( `POST /auth` ), the token received will be used to gain access to protected pages in React. Error messages should be displayed appropriately on screen. 

- [x] Add a new page, which can only be accessed by a valid JWT, which leverages the `GET /contact_form/entries` endpoint to display all submissions. This page should be stylized appropriately. This page can be accessible through the login page. If a valid JWT is not available, or no token is set, then user should be redirected to the Login page. 

*Bonus*: 

- [x] In your protected area, add a new page which has a single form that allows you to make a request to `POST /users` to create new users.