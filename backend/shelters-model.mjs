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
const createShelter = async (body) => {
  const newShelter = new shelter(body);
  return await newShelter.save();
};

// Get All Shelters
const getAllShelters = async () => {
  return await shelter.find();
};

// Get a Shelter by ID
const getShelterById = async (id) => {
  return await shelter.findById({ _id: id });
};

// Edit a Shelter by ID
const editShelterById = async (id, body) => {
  return await shelter.findByIdAndUpdate(id, body);
};

// Delete Shelter by ID
const deleteShelterById = async (id) => {
  return await shelter.deleteOne({ _id: id });
};

// EXPORT variables to use in controller file.
export {
  createShelter,
  getAllShelters,
  getShelterById,
  editShelterById,
  deleteShelterById,
};
