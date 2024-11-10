// src/components/PetListing.jsx
import React from "react";
import { Link } from "react-router-dom";

const PetListing = ({ pet }) => {
  return (
    <div className="pet-card">
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years</p>
      <p>Gender: {pet.gender}</p>
      {/* Add any additional pet details you'd like here */}
      <Link to={`/pets/${pet._id}`}>View Details</Link>
    </div>
  );
};

export default PetListing;
