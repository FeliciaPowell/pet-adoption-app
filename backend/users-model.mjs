// Models for Users Collection

// Import Dependencies
import mongoose from "mongoose";
import db from "./db-connection.mjs";
import * as hash from "./hash.mjs";

// Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String }, // For users
  lastName: { type: String }, // For users
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  address: { type: String },
  birthday: { type: String },
  kids: { type: Boolean, default: false },
  cats: { type: Boolean, default: false },
  dogs: { type: Boolean, default: false },
  otherPets: { type: Boolean, default: false },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet", default: [] }],
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

//update user by email
const updateUserByEmail = async (email, updates) => {
  try {
    const updatedUser = await User.findOneAndUpdate({ email }, updates, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user by email:", error);
    throw error;
  }
};

// Get All Users (Development Only)
const getAllUsers = async () => {
  return await User.find();
};

// Get a User by ID
const getUserById = async (id) => {
  return await User.findById({ _id: id });
};

// Get a User by Email
const getUserByEmail = async (email) => {
  return await User.find({ email: email });
};

// Edit a User by ID
const editUserById = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

// Delete User by ID
const deleteUserById = async (id) => {
  return await User.deleteOne({ _id: id });
};

export {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  editUserById,
  deleteUserById,
  updateUserByEmail,
};
