# Kelly's Course Project

This project will build a backend application that will consist of a RESTful JSON API for a TBD contact us form. Follow the below to set up the application and get started:

1. Run `$ npm install` to install dependencies

2. Set up the database:
    - Create a folder called 'data' at the same level as index.js
    - The jsonHandler module (./src/util/jsonHandler.js) will create the necessary files for the database once the `readItems` function is invoked

3. Set up the .env file:
    - Create a file called '.env' at the same level as index.js
    - Enter 'PORT=' and any desired number above 3000
    - On a new line, enter 'JWT_SECRET=' and a secret signature (password) for your tokens that only you will use
    - On a new line, enter 'USERS_PATH=./data/_examplepath_.json' and replace 'examplepath' with a path name for your **USERS** database
    -  On a new line, enter 'ENTRIES_PATH=./data/_examplepath_.json' and replace 'examplepath' with a path name for your **ENTRIES** database

4. Run `nodemon` and `dotenv/config` by running `$ npm run dev` - this will get the server started (and keep it running) and configure `dotenv` to allow the application to use the global variables you set up in step 3.