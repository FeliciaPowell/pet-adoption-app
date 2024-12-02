import "dotenv/config";
import express from "express";
import cors from "cors"; // Import cors
import jwt from "jsonwebtoken";
import * as users from "./users-model.mjs";
import * as pets from "./pets-model.mjs";
import * as hash from "./hash.mjs";

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({ origin: "*" })); // or use '*' for all origins
app.use(express.json());

// Login Functions and Route ************************************

// Creates Token to send to FrontEnd
const createToken = (user) => {
  return jwt.sign({ userId: user._id }, JWT_SECRET);
};

// Authenticates User's with Token for Routes
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401); // Token not found
//   }

//   // Verify Token
//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403); // Invalid Token
//     req.user = user;
//     next();
//   });
// };

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token not found" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    console.log("Decoded Token Payload:", decoded); // Debug log
    req.user = decoded;
    next();
  });
};

// Verify Admin Role
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access Denied Admin only" });
  }
  next();
};

// Test Route (DELETE)
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Test Route (DELETE)
app.get("/admin", authenticateToken, isAdmin, (req, res) => {
  res.json({ message: "This is an admin route", user: req.user });
});

// Test Route (DELETE)
app.get("/admin", authenticateToken, isAdmin, (req, res) => {
  res.json({ message: "This is an admin route", user: req.user });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    console.time("DB Query");
    const user = await users.getUserByEmail(email);
    console.timeEnd("DB Query");

    if (!user || user.length === 0) {
      return res.status(404).json({ error: "Email not found in database." });
    }

    console.time("Password Check");
    const isPasswordValid = await hash.checkHash(password, user[0].password);
    console.timeEnd("Password Check");

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password." });
    }

    console.time("Token Generation");
    const token = createToken({ userId: user[0]._id });
    console.timeEnd("Token Generation");

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
});

// User Registration Route
app.put("/user/account-setup", authenticateToken, async (req, res) => {
  try {
    const { email, firstName, lastName, address, birthday, additionalInfo } = req.body;

    if (!email || !firstName || !lastName || !address || !birthday) {
      return res.status(400).json({
        error: "Email, first name, last name, address, and birthday are required.",
      });
    }

    const updates = {
      name: `${firstName} ${lastName}`,
      address,
      birthday,
      additionalInfo: additionalInfo || {}, // Default to empty object if undefined
      status: "complete",
    };

    console.log("Attempting to update user:", updates);

    const updatedUser = await users.updateUserByEmail(email, updates);

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "Account setup complete.", user: updatedUser });
  } catch (error) {
    console.error("Error during account setup:", error.message);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

// Find and update the user with email
async function updateUserByEmail(email, updates) {
  console.log("Searching for user with email:", email);

  try {
    const updatedUser = await UserModel.findOneAndUpdate({ email }, updates, { new: true });
    console.log("User updated:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
}

// Fetch Current User Route
// app.get("/current-user", authenticateToken, async (req, res) => {
//   try {
//     const user = await users.getUserById(req.user.userId);

//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     res.json({
//       email: user.email,
//       name: user.name,
//       address: user.address,
//       birthday: user.birthday,
//       preferences: user.preferences || {},
//       status: user.status,
//     });
//   } catch (error) {
//     console.error("Error fetching current user:", error.message);
//     res.status(500).json({ error: "Failed to fetch user details." });
//   }
// });

app.get("/current-user", authenticateToken, async (req, res) => {
  try {
    console.log("Fetching user with ID:", req.user.userId); // Add debug log
    const user = await User.findById(req.user.userId); // Query using userId
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Failed to fetch user details." });
  }
});


// Account Completion Route
app.post("/user/account-setup", authenticateToken, async (req, res) => {
  const { email, firstName, lastName, address, birthday, additionalInfo } = req.body;

  // Ensure required fields are present
  if (!email || !firstName || !lastName || !address || !birthday) {
    return res.status(400).json({
      error: "Email, first name, last name, address, and birthday are required.",
    });
  }

  additionalInfo,


  console.log("Incoming account setup data:", updates);

  try {
    // Find and update the user
    const updatedUser = await users.updateUserByEmail(email, updates);

    if (!updatedUser) {
      console.error("User not found for email:", email);
      return res.status(404).json({ error: "User not found." });
    }

    console.log("Account setup complete:", updatedUser);
    res.status(200).json({ message: "Account setup complete.", user: updatedUser });
  } catch (error) {
    console.error("Error during account setup:", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
});

// PET Routes ************************************

//GET all pets
app.get("/pets", (req, res) => {
  pets
    .getAllPets()
    .then((allPets) => {
      res.status(200).json(allPets);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Request to retrieve all pets failed" });
    });
});

// GET pet by ID
app.get("/pets/:id", (req, res) => {
  pets
    .getPetById(req.params.id)
    .then((pet) => {
      if (pet) {
        res.status(200).json(pet);
      } else {
        res.status(404).json({ error: "Pet not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Request to retrieve pet by ID failed" });
    });
});

// CREATE pet
app.post("/pet", (req, res) => {
  pets
    .createPet(
      req.body.name,
      req.body.type,
      req.body.breed,
      req.body.age,
      req.body.gender,
      req.body.color,
      req.body.weight,
      req.body.profileImage,
      req.body.description,
      req.body.medicalHistory,
      req.body.location,
      req.body.availability,
      req.body.vaccination,
      req.body.spayedNeutered,
      req.body.kids,
      req.body.cats,
      req.body.dogs,
      req.body.temperament,
      req.body.dateCreated,
      req.body.adopterID
    )
    .then((pet) => {
      res.status(201).json(pet);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error: "Invalid request to create pet" });
    });
});

// UPDATE pet
app.put("/pets/:_id", (req, res) => {
  pets
    .replacePet(
      req.params._id,
      req.body.name,
      req.body.type,
      req.body.breed,
      req.body.age,
      req.body.gender,
      req.body.color,
      req.body.weight,
      req.body.profileImage,
      req.body.description,
      req.body.medicalHistory,
      req.body.location,
      req.body.availability,
      req.body.vaccination,
      req.body.spayedNeutered,
      req.body.kids,
      req.body.cats,
      req.body.dogs,
      req.body.temperament,
      req.body.dateCreated,
      req.body.adopterID
    )
    .then((numUpdated) => {
      if (numUpdated === 1) {
        res.status(200).json({ message: "Pet successfully updated" });
      } else {
        res.status(400).json({ error: "Invalid request to update pet" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error: "Request to update a pet failed" });
    });
});

// DELETE pet
app.delete("/pets/:_id", (req, res) => {
  pets
    .deletePetById(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res.status(404).json({ Error: "Pet not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({ error: "Request to delete a pet failed" });
    });
});

// User Routes ************************************

// Get all Users (Development Only)
app.get("/users", (req, res) => {
  users
    .getAllUsers()
    .then((allusers) => {
      res.status(200).json(allusers);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Request to retrieve all users failed" });
    });
});

// Get User by ID
app.get("/users/id/:_id", (req, res) => {
  users
    .getUserById(req.params._id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching user" });
    });
});

// Update User
app.put("/users/:_id", (req, res) => {
  try {
    const updateduser = users.editUserById(req.params._id, req.body);

    if (!updateduser) {
      return res.status(404).json({ error: "user not found" });
    }

    res.status(200).json(updateduser);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
});

// Create User
app.post("/user", (req, res) => {
  users
    .createUser(req.body)
    .then((newuser) => {
      res.status(201).json(newuser);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Error adding user. Check parameters" });
    });
});

// Delete User
app.delete("/users/:_id", (req, res) => {
  users
    .deleteUserById(req.params._id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Error deleting user. Check id" });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
