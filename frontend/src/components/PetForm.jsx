// src/pages/AddPet.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// PetForm component handles the form submission for adding a new pet with various details.
const PetForm = () => {
  const navigate = useNavigate();

  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: "",
    type: "", // No pre-selected type
    breed: "",
    age: "", // Age can be an empty string if not required initially
    gender: "",
    color: "",
    weight: "",
    profileImage: "",
    description: "",
    medicalHistory: "",
    location: "",
    availability: "",
    vaccination: "",
    spayedNeutered: "",
    kids: "",
    cats: "",
    dogs: "",
    temperament: "",
    dateCreated: new Date().toISOString(), // Keep this as is if you want it auto-generated
    shelterID: "", // Leave empty unless auto-generated elsewhere
    adopterID: null, // Null indicates no adopter assigned yet
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result; // Base64 string of the image
        // console.log("Base64 String:", base64String); // Print to console
        setFormData({
          ...formData,
          profileImage: base64String,
        });
      };
      reader.readAsDataURL(file); // Convert file to Base64 string
    }
  };

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
      const response = await axios.post("https://lumpy-brass-lemongrass.glitch.me/pet", formData);
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
          required
        />
      </label>
      <label>
        Type:
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="Dog"
              checked={formData.type === "Dog"}
              onChange={handleChange}
              required
            />
            Dog
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Cat"
              checked={formData.type === "Cat"}
              onChange={handleChange}
              required
            />
            Cat
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Other"
              checked={formData.type === "Other"}
              onChange={handleChange}
              required
            />
            Other
          </label>
        </div>
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gender:
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
      </label>
      <label>
        color:
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        weight:
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Profile Image:
        <input
          type="file"
          name="profileImage"
          onChange={(e) => handleFileChange(e)}
          accept="image/*"
          required
        />
      </label>
      <label>
        description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        medicalHistory:
        <input
          type="text"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Availability:
        <div>
          <label>
            <input
              type="radio"
              name="availability"
              value="Now"
              checked={formData.availability === "Now"}
              onChange={handleChange}
              required
            />
            Now
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              value="Soon"
              checked={formData.availability === "Soon"}
              onChange={handleChange}
              required
            />
            Soon
          </label>
        </div>
      </label>
      <label>
        Vaccination:
        <div>
          <label>
            <input
              type="radio"
              name="vaccination"
              value="Current"
              checked={formData.vaccination === "Current"}
              onChange={handleChange}
              required
            />
            Current
          </label>
          <label>
            <input
              type="radio"
              name="vaccination"
              value="Pending"
              checked={formData.vaccination === "Pending"}
              onChange={handleChange}
              required
            />
            Pending
          </label>
        </div>
      </label>
      <label>
        Spayed/Neutered:
        <div>
          <label>
            <input
              type="radio"
              name="spayedNeutered"
              value="Yes"
              checked={formData.spayedNeutered === "Yes"}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="spayedNeutered"
              value="No"
              checked={formData.spayedNeutered === "No"}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>
      </label>
      <label>
        Good with Kids:
        <div>
          <label>
            <input
              type="radio"
              name="kids"
              value="Yes"
              checked={formData.kids === "Yes"}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="kids"
              value="No"
              checked={formData.kids === "No"}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>
      </label>
      <label>
        Good with Cats:
        <div>
          <label>
            <input
              type="radio"
              name="cats"
              value="Yes"
              checked={formData.cats === "Yes"}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="cats"
              value="No"
              checked={formData.cats === "No"}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>
      </label>
      <label>
        Good with Dogs:
        <div>
          <label>
            <input
              type="radio"
              name="dogs"
              value="Yes"
              checked={formData.dogs === "Yes"}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="dogs"
              value="No"
              checked={formData.dogs === "No"}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>
      </label>
      <label>
        temperament:
        <input
          type="text"
          name="temperament"
          value={formData.temperament}
          onChange={handleChange}
          required
        />
      </label>
      {/* Add more input fields for the other pet properties here */}

      <button type="submit">Add Pet</button>
    </form>
  );
};

export default PetForm;
