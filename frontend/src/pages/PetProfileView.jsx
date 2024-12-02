import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

const PetProfileView = () => {
  const { _id } = useParams();
  const [petData, setPetData] = useState(null); // State to hold pet data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pets/${_id}`
        );
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

  // Function to handle email button click
  const handleEmailClick = () => {
    window.location.href = "mailto:adopt@purrfecmatch.com";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout footerType="default">
      <div className="pet-profile">
        <h1>{petData.name}</h1>
        {petData.profileImage && (
          <div>
            <img
              src={petData.profileImage}
              alt={`${petData.name}'s profile`}
              style={{ maxWidth: "20%", maxHeight: "20%" }}
            />
          </div>
        )}
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
        <Button style={{ maxWidth: "20%" }} onClick={handleEmailClick}>
          Contact Us to Adopt
        </Button>
      </div>
    </Layout>
  );
};

export default PetProfileView;
