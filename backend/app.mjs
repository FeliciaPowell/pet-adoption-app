import "dotenv/config";
import express from "express";
import * as shelters from "./shelters-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// Retrieve controllers
app.get("/shelter", shelters.getAllShelters);
app.get("/shelter/:_id", shelters.getShelterById);
app.put("/shelter/:_id", shelters.editShelterById);
app.post("/shelter", shelters.createShelter);
app.delete("/shelter/:_id", shelters.deleteShelterById);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
