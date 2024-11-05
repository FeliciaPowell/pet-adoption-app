// Models for Pets Collection

// Import Dependencies.
import mongoose from "mongoose";

// SCHEMA: Define the collection's schema.
const petSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["Dog", "Cat", "Other"] },
  breed: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  color: { type: String, required: true },
  weight: { type: String, required: true },
  profileImage: { type: String, required: true },
  description: { type: String, required: true },
  medicalHistory: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: String, required: true, enum: ["Now", "Soon"] },
  vaccination: { type: String, required: true, enum: ["Current", "Pending"] },
  spayedNeutered: { type: String, required: true, enum: ["Yes", "No"] },
  kids: { type: String, required: true, enum: ["Yes", "No"] },
  cats: { type: String, required: true, enum: ["Yes", "No"] },
  dogs: { type: String, required: true, enum: ["Yes", "No"] },
  temperament: { type: String, required: true },
  dateCreated: { type: Date, required: true, default: Date.now },
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
const createPet = async (
  name,
  type,
  breed,
  age,
  gender,
  color,
  weight,
  profileImage,
  description,
  medicalHistory,
  location,
  availability,
  vaccination,
  spayedNeutered,
  kids,
  cats,
  dogs,
  temperament,
  dateCreated,
  shelterID,
  adopterID
) => {
  const pet = new Pet({
    name: name,
    type: type,
    breed: breed,
    age: age,
    gender: gender,
    color: color,
    weight: weight,
    profileImage: profileImage,
    description: description,
    medicalHistory: medicalHistory,
    location: location,
    availability: availability,
    vaccination: vaccination,
    spayedNeutered: spayedNeutered,
    kids: kids,
    cats: cats,
    dogs: dogs,
    temperament: temperament,
    dateCreated: dateCreated,
    shelterID: shelterID,
    adopterID: adopterID,
  });
  return pet.save();
};

// RETRIEVE MODEL *****************************************
// Get all pets
// Retrieve based on a filter and return a promise.
const getAllPets = async () => {
  const query = Pet.find();
  return query.exec();
};

// Retrieve a pet by ID
const getPetById = async (_id) => {
  const query = Pet.findById(_id);
  return query.exec();
};

// UPDATE Model *****************************************
// UPDATE pet
const replacePet = async (
  petId,
  name,
  type,
  breed,
  age,
  gender,
  color,
  weight,
  profileImage,
  description,
  medicalHistory,
  location,
  availability,
  vaccination,
  spayedNeutered,
  kids,
  cats,
  dogs,
  temperament,
  dateCreated,
  shelterID,
  adopterID
) => {
  try {
    const result = await Pet.replaceOne(
      { _id: petId },
      {
        name,
        type,
        breed,
        age,
        gender,
        color,
        weight,
        profileImage,
        description,
        medicalHistory,
        location,
        availability,
        vaccination,
        spayedNeutered,
        kids,
        cats,
        dogs,
        temperament,
        dateCreated,
        shelterID,
        adopterID,
      }
    );
    return result.modifiedCount;
  } catch (error) {
    throw new Error("Error replacing pet: " + error.message);
  }
};

// DELETE model *****************************************
// DELETE pet based on ID
const deletePetById = async (_id) => {
  try {
    const result = await Pet.deleteOne({ _id });
    return result.deletedCount;
  } catch (error) {
    throw new Error("Error deleting pet: " + error.message);
  }
};

export { getAllPets, replacePet, createPet, deletePetById, getPetById };
