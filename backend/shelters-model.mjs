// Models for Shelters Collection

// Import Dependencies.
import mongoose from "mongoose";
import db from "./db-connection.mjs";

// SCHEMA: Define the collection's schema.
const shelterSchema = new mongoose.Schema({
  shelterID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password for shelter admin login
  address: { type: String, required: true },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet", default: [] }], // Default to an empty array
});

// Model
const shelter = mongoose.model("Shelter", shelterSchema);

// CREATE Model
const createShelter = async (req, res) => {
  try {
    const newShelter = new shelter(req.body);
    await newShelter.save();
    res.status(201).json(newShelter);
  } catch (error) {
    res.status(500).json({ error: "Error adding shelter. Check parameters" });
  }
};

// Get all shelters
const getAllShelters = async (req, res) => {
  try {
    const shelters = await shelter.find();
    res.status(200).json(shelters);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shelters" });
  }
};

// EXPORT variables to use in controller file.
export { createShelter, getAllShelters };
