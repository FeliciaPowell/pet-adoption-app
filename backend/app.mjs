import "dotenv/config";
import express from "express";
import * as shelters from "./shelters-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// Shelter Routes
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
