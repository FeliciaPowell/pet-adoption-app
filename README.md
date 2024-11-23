# -PurrrfectMatch

Capstone Group Project: "dating" website for pet adoption

## Table of Contents

- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
  - [Backend Login](#backend-login)
  - [Testing Token](#testing-token)

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

3. In the backend folder, create a new file: .env

- Copy the following code into your .env:

```
PORT = 3000
MONGODB_CONNECT_STRING = "mongodb+srv://<db_username>:<db_password>@cluster0.nbpvb.mongodb.net/"
JWT_SECRET = "purrrfect"
```

- Replace <db_username> with your username and <db_password> with your password.

4. Start the backend

- In your backend terminal, run

```
npm start
```

- The console should display the port number the server is listening on and a successful database connection message.

### Frontend Setup

1. Open up a terminal and move to the frontend directory using `cd`. Run `npm install` to receive the latest dependencies.

```
cd frontend/
npm install
```

2. In the frontend folder, create a new file: .env

- Copy the following code into your .env:

```
VITE_API_URL=http://localhost:3000
```

3. Start the frontend terminal by typing:

```
npm run dev
```

## Usage

### Backend Login

1. Send an HTTP POST request to "localhost:3000/login" with the following JSON object:

```
{
    "email": "<user_email>",
    "password": "<user_password>"
}
```

- Replace <user_email> with user's email and <user_password> with user's password.

2. The route should respond with a long encoded string as a JWT Token:

```
{
    "token": "<long_token_string>"
}
```

### Testing Token

Postman Instructions:

1. Follow the instructions on [Backend Login](#backend-login) to get your token string.

- Copy the token string without the quotation marks.

2. In Postman, create a new GET Request to the URL: "localhost:3000/protected".

- Click on the "Authorization" tab. From the Auth Types dropdown, select "Bearer Token".

- Paste the token string from earlier into the Token field. Press Send.

3. The route should respond with a message and information about the user's token.
