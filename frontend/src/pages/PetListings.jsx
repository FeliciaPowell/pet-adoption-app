// Adoption Listings: Main pet listing page with filters?
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";
import PetListing from "../components/PetListing.jsx";

// PetListings component to display all pets available for adoption in a card view

// will update this to card views for pet listings
const PetListings = () => {
  // State to hold the list of pets
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pets data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Make the GET request
        const response = await axios.get("http://localhost:3000/pets");
        // Set the pets data in state
        setPets(response.data);
        console.log(response.data);
        console.log(pets);
      } catch (error) {
        setError("Failed to fetch pets");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);
  return (
    <Layout footerType="default">
      <h1>Adoption Listings</h1>
      <div className="pet-listings">
        {pets.map((pet) => (
          <PetListing key={pet._id} pet={pet} />
        ))}
      </div>
    </Layout>
  );
};

export default PetListings;

// Will update this to card views for pet listings
// Check if add filters for pet listings
// add favorite button for pet listings
