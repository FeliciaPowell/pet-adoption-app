# -PurrrfectMatch

Capstone Group Project: "dating" website for pet adoption

## Table of Contents

- [Installation](#installation)

---

## Installation

### Backend Setup

- After cloning the repository, `cd` into the backend directory and run `npm install`.
- Go to our project's MongoDB cluster, find "Quickstart" under "Security" portion of the navigation bar.
- Create a new database username and password.
- Copy the connection string with your username and password. It should look something like this: "mongodb+srv://<db_username>:<db_password>@cluster0.nbpvb.mongodb.net/"
- Open the .env file in the backend folder. Create a new variable, MONGODB_CONNECT_STRING, and set it equal to the string you copied earlier, wrapped in double quotes.
- Then, add another variable, PORT, and set it equal to 3000.
- Your .env file should have two new variables, MONGODB_CONNECT_STRING and PORT.
- In your backend terminal, run "npm start".
- The console should display the port number the server is listening on and a successful database connection message.
