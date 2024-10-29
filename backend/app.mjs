import "dotenv/config";
import express from "express";
import * as shelters from "./shelters-model.mjs";
import * as pets from "./pets-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// RETRIEVE controllers ************************************

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

app.get("/shelter", shelters.getAllShelters);

// CREATE controllers ************************************

// CREATE pet
app.post("/pet", (req, res) => {
  pets
    .createPet(
      req.body.name,
      req.body.type,
      req.body.breed,
      req.body.availability,
      req.body.dateCreated,
      req.body.description,
      req.body.newsItem,
      req.body.disposition,
      req.body.shelterID,
      req.body.adopterID
    )
    .then((pet) => {
      res.status(201).json(pet);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Invalid request" });
    });
});

// UPDATE controller ************************************
app.put("/pets/:_id", (req, res) => {
  pets
    .replacePet(
      req.params._id,
      req.body.name,
      req.body.type,
      req.body.breed,
      req.body.availability,
      req.body.dateCreated,
      req.body.description,
      req.body.newsItem,
      req.body.disposition,
      req.body.shelterID,
      req.body.adopterID
    )
    .then((numUpdated) => {
      if (numUpdated === 1) {
        res.status(200).json({
          _id: req.params._id,
          name: req.body.name,
          type: req.body.type,
          breed: req.body.breed,
          availability: req.body.availability,
          dateCreated: req.body.dateCreated,
          description: req.body.description,
          newsItem: req.body.newsItem,
          disposition: req.body.disposition,
          shelterID: req.body.shelterID,
          adopterID: req.body.adopterID,
        });
      } else {
        res.status(400).json({ Error: "Invalid Request" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ Error: "Request to update a pet failed" });
    });
});

app.post("/shelter", shelters.createShelter);

// DELETE controller ************************************
// DELETE pet
app.delete("/pets/:_id", (req, res) => {
  pets
    .deleteById(req.params._id)
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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
