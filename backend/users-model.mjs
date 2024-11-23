// Models for Users Collection

// Import Dependencies
import mongoose from "mongoose";
import db from "./db-connection.mjs";
import * as hash from "./hash.mjs";

// Schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }, // Hashed password
//   address: { type: String, required: false }, // Optional for users
//   pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet", default: [] }], // Default to an empty array for pet IDs
//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     required: true,
//     default: "user",
//   }, // Role can be either "user" or "admin"
// });
const userSchema = new mongoose.Schema({
  name: { type: String }, // For admins
  firstName: { type: String }, // For users
  lastName: { type: String }, // For users
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  address: { type: String },
  birthday: { type: String },
  additionalInfo: {
      kids: { type: Boolean, default: false },
      cats: { type: Boolean, default: false },
      dogs: { type: Boolean, default: false },
      otherPets: { type: Boolean, default: false },
  },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet", default: [] }],
  role: { type: String, enum: ["user", "admin", "pending"], required: true, default: "pending" },
  status: { type: String, default: "pending" }, // Track account completion
});


// Model
const User = mongoose.model("User", userSchema);

// Create a User
// const createUser = async (body) => {
//   // Create hashed password
//   body.password = await hash.createHash(body.password);
//   const newUser = new User(body);

//   return await newUser.save();
// };

// Add missing fields to all users
await User.updateMany({}, {
  $set: {
      additionalInfo: {
          kids: false,
          cats: false,
          dogs: false,
          otherPets: false,
      },
      role: "pending",
      status: "pending",
  },
});

const createUser = async (body) => {
  if (body.role === "user") {
    if (!body.firstName || !body.lastName) {
      throw new Error("First name and last name are required for users.");
    }
    delete body.name; // Remove `name` if it exists
  } else if (body.role === "admin") {
    if (!body.name) {
      throw new Error("Name is required for admins.");
    }
    delete body.firstName; // Remove `firstName` and `lastName` for admins
    delete body.lastName;
  }

  // Hash the password
  body.password = await hash.createHash(body.password);

  const newUser = new User(body);
  return await newUser.save();
};

//update user by email
const updateUserByEmail = async (email, updates) => {
  try {
      const updatedUser = await User.findOneAndUpdate({ email }, updates, { new: true });
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
  updateUserByEmail
};
