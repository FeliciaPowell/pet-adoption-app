// Models for Users Collection

// Import Dependencies
import mongoose from "mongoose";
import db from "./db-connection.mjs";
import * as hash from "./hash.mjs";

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  address: { type: String, required: false }, // Optional for users
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet", default: [] }], // Default to an empty array for pet IDs
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user",
  }, // Role can be either "user" or "admin"
});

// Model
const User = mongoose.model("User", userSchema);

// Create a User
const createUser = async (body) => {
  // Create hashed password
  body.password = await hash.createHash(body.password);
  const newUser = new User(body);

  return await newUser.save();
};

// Get All Users (Development Only)
const getAllUsers = async () => {
  return await User.find();
};

// Get a User by ID
const getUserById = async (id) => {
  return await User.findById({ _id: id });
};

// Edit a User by ID
const editUserById = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

// Delete User by ID
const deleteUserById = async (id) => {
  return await User.deleteOne({ _id: id });
};

export { createUser, getAllUsers, getUserById, editUserById, deleteUserById };
