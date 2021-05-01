# Kelly's Course Project Backend Setup Instructions

This project will build a backend application that will consist of a RESTful JSON API for a TBD contact us form. Follow the below to set up the application and get started:

1. Run `$ npm install` to install dependencies

2. Set up the .env file:
    - Create a file called '.env' at the same level as index.js
    - On a new line, enter 'PORT=' and any desired number above 3000
    - On a new line, enter 'JWT_SECRET=' and a secret signature (password) for your tokens that only you will use
    - On a new line, enter 'DB_SECRET=' and the password you use for your local MySQL server
    - On a new line, enter 'DB_NAME=' and the database name you use for your local MySQL server

3. Run `nodemon` and `dotenv/config` by running `$ npm run dev` - this will get the server started (and keep it running) and configure `dotenv` to allow the application to use the global variables you set up in step 2.