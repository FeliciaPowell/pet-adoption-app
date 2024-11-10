import "dotenv/config";
import express from "express";
import cors from "cors"; // Import cors
import * as users from "./users-model.mjs";
import * as pets from "./pets-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({ origin: "http://127.0.0.1:5173" })); // or use '*' for all origins
app.use(express.json());

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
      req.body.shelterID,
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
      req.body.shelterID,
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
app.get("/users/:_id", (req, res) => {
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
