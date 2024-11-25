import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";

const PetProfileView = () => {
  const { _id } = useParams();
  const [petData, setPetData] = useState(null); // State to hold pet data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pets/${_id}`);
        setPetData(response.data); // Store pet data in state
      } catch (error) {
        setError("Failed to fetch pet data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetData();
  }, [_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout footerType="default">
      <div className="pet-profile">
        <h1>{petData.name}</h1>
        <p>Type: {petData.type}</p>
        <p>Breed: {petData.breed}</p>
        <p>Age: {petData.age} years</p>
        <p>Gender: {petData.gender}</p>
        <p>Color: {petData.color}</p>
        <p>Weight: {petData.weight} kg</p>
        <p>Description: {petData.description}</p>
        <p>Medical History: {petData.medicalHistory}</p>
        <p>Location: {petData.location}</p>
        <p>Availability: {petData.availability}</p>
        <p>Vaccination: {petData.vaccination}</p>
        <p>Spayed/Neutered: {petData.spayedNeutered}</p>
        <p>Good with Kids: {petData.kids}</p>
        <p>Good with Cats: {petData.cats}</p>
        <p>Good with Dogs: {petData.dogs}</p>
        <p>Temperament: {petData.temperament}</p>
        {petData.profileImage && (
          <div>
            <h3>Profile Image:</h3>
            <img
              src={petData.profileImage}
              alt={`${petData.name}'s profile`}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PetProfileView;
