import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";

// PetProfileView to view specific pet profile details
// after completing intake pet adoption form thru submitting, will see specific pet profile completed

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
        <p>Description: {petData.description}</p>
        {/* Display additional pet attributes as needed */}
      </div>
    </Layout>
  );
};

export default PetProfileView;
