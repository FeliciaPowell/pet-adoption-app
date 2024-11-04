import "dotenv/config";
import express from "express";
import * as shelters from "./shelters-model.mjs";
import * as pets from "./pets-model.mjs";

const PORT = process.env.PORT;
const app = express();
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

// Shelter Routes ************************************

// Get all shelters
app.get("/shelter", (req, res) => {
  shelters
    .getAllShelters()
    .then((allShelters) => {
      res.status(200).json(allShelters);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Request to retrieve all shelters failed" });
    });
});

// Get shelter by ID
app.get("/shelter/:_id", (req, res) => {
  shelters
    .getShelterById(req.params._id)
    .then((shelter) => {
      res.status(200).json(shelter);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching shelter" });
    });
});

// Update shelter
app.put("/shelter/:_id", (req, res) => {
  try {
    const updatedShelter = shelters.editShelterById(req.params._id, req.body);

    if (!updatedShelter) {
      return res.status(404).json({ error: "Shelter not found" });
    }

    res.status(200).json(updatedShelter);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shelter" });
  }
});

// Create shelter
app.post("/shelter", (req, res) => {
  shelters
    .createShelter(req.body)
    .then((newShelter) => {
      res.status(201).json(newShelter);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Error adding shelter. Check parameters" });
    });
});

// Delete shelter
app.delete("/shelter/:_id", (req, res) => {
  shelters
    .deleteShelterById(req.params._id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Error deleting shelter. Check id" });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
