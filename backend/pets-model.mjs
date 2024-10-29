// Models for Pets Collection

// Import Dependencies.
import mongoose from "mongoose";
import db from "./db-connection.mjs";

// SCHEMA: Define the collection's schema.
const petSchema = mongoose.Schema({
  petID: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["Dog", "Cat", "Other"] },
  breed: { type: String, required: true },
  availability: { type: String, required: true, default: "Available" },
  dateCreated: { type: Date, required: true, default: Date.now },
  description: { type: String, required: true },
  newsItem: { type: String, required: false },
  disposition: { type: [String], required: true }, // Array of Strings for traits
  description: { type: String, required: true },
  shelterID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Shelter",
  }, // Foreign key reference to Shelter collection
  adopterID: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "User",
  }, // Optional reference to Adopter (User)
});

// MODEL: Create and export the Mongoose model.
const pet = mongoose.model("Pet", petSchema);
export default pet;
