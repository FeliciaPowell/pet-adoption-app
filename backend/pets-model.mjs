// Models for Pets Collection

// Import Dependencies.
import mongoose from "mongoose";

// SCHEMA: Define the collection's schema.
const petSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["Dog", "Cat", "Other"] },
  breed: { type: String, required: true },
  availability: { type: String, required: true, default: "Available" },
  dateCreated: { type: Date, required: true, default: Date.now },
  description: { type: String, required: true },
  newsItem: { type: String, required: false },
  disposition: { type: [String], required: true }, // Array of Strings for traits
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
const Pet = mongoose.model("Pet", petSchema);

// CREATE Model *****************************************
// CREATE pet
const createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: "Error adding pet. Check parameters" });
  }
};

// RETRIEVE MODEL *****************************************
// Get all pets
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error fetching pets" });
  }
};

// UPDATE Model *****************************************
// UPDATE pet
const replacePet = async (
  petID,
  name,
  type,
  breed,
  availability,
  dateCreated,
  description,
  newsItem,
  disposition,
  shelterID,
  adopterID
) => {
  const result = await Pet.replaceOne(
    { _id: petID },
    {
      name,
      type,
      breed,
      availability,
      dateCreated,
      description,
      newsItem,
      disposition,
      shelterID,
      adopterID,
    }
  );
  return result.modifiedCount;
};

// DELETE model *****************************************
// DELETE pet based on ID
const deleteById = async (_id) => {
  const result = await Pet.deleteOne({ _id: _id });
  return result.deletedCount;
};

export { getAllPets, replacePet, createPet };
