// src/pages/AddPet.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// PetForm component handles the form submission for adding a new pet with various details.
const PetForm = () => {
  const navigate = useNavigate();

  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: "Buddy",
    type: "Dog",
    breed: "Labrador",
    age: 3,
    gender: "Male",
    color: "Yellow",
    weight: 25,
    profileImage: "http://example.com/image.jpg", // Sample URL or empty string
    description: "Friendly and playful",
    medicalHistory: "Vaccinated",
    location: "City Shelter",
    availability: "Now",
    vaccination: "Current",
    spayedNeutered: "Yes",
    kids: "Yes",
    cats: "No",
    dogs: "Yes",
    temperament: "Calm",
    dateCreated: new Date().toISOString(),
    shelterID: "1234567890abcdef12345678",
    adopterID: null,
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/pet", formData);
      console.log("Pet added successfully:", response.data);
      navigate("/pets"); // Redirect to the pets listing page after success
    } catch (error) {
      console.error("Failed to add pet:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>
      {/* Add more input fields for the other pet properties here */}

      <button type="submit">Add Pet</button>
    </form>
  );
};

export default PetForm;
