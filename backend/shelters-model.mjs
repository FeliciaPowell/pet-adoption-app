// Models for Shelters Collection

// Import Dependencies.
import mongoose from "mongoose";
import db from "./db-connection.mjs";

// Schema
const shelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password for shelter admin login
  address: { type: String, required: true },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet", default: [] }], // Default to an empty array
});

// Model
const shelter = mongoose.model("Shelter", shelterSchema);

// Create a Shelter
const createShelter = async (req, res) => {
  try {
    const newShelter = new shelter(req.body);
    await newShelter.save();
    res.status(201).json(newShelter);
  } catch (error) {
    res.status(500).json({ error: "Error adding shelter. Check parameters" });
  }
};

// Get All Shelters
const getAllShelters = async (req, res) => {
  try {
    const shelters = await shelter.find();
    res.status(200).json(shelters);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shelters" });
  }
};

// Get a Shelter by ID
const getShelterById = async (req, res) => {
  try {
    const shelters = await shelter.findById({ _id: req.params._id });
    res.status(200).json(shelters);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shelter" });
  }
};

// Edit a Shelter by ID
const editShelterById = async (req, res) => {
  try {
    const updatedShelter = await shelter.findByIdAndUpdate(
      req.params._id,
      req.body
    );

    if (!updatedShelter) {
      return res.status(404).json({ error: "Shelter not found" });
    }

    res.status(200).json(updatedShelter);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shelter" });
  }
};

// Delete Shelter by ID
const deleteShelterById = async (req, res) => {
  try {
    const result = await shelter.deleteOne({ _id: req.params._id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error deleting shelter" });
  }
};

// EXPORT variables to use in controller file.
export {
  createShelter,
  getAllShelters,
  getShelterById,
  editShelterById,
  deleteShelterById,
};
