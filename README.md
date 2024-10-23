# -PurrrfectMatch

Capstone Group Project: "dating" website for pet adoption

## Table of Contents

- [Installation](#installation)

---

## Installation

1. Clone the repository.

```
git clone https://github.com/FeliciaPowell/pet-adoption-app.git
```

### Backend Setup

1. After cloning the repository, `cd` into the backend directory and run `npm install`.

```
cd backend/
npm install
```

2. Now create a user account on MongoDB.

- Go to our project's MongoDB cluster
- Find "Quickstart" under "Security" portion of the navigation bar.
  - Create a new database username and remember the password.

3. In the backend folder, create a new file, .env

- Copy the following code into your .env:

```
PORT = 3000
MONGODB_CONNECT_STRING = "mongodb+srv://<db_username>:<db_password>@cluster0.nbpvb.mongodb.net/"
```

- Replace <db_username> with your username and <db_password> with your password.

4. Start the backend

- In your backend terminal, run

```
npm start
```

- The console should display the port number the server is listening on and a successful database connection message.
