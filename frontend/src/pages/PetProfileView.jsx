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

  // Function to handle email button click
  const handleEmailClick = () => {
    window.location.href = "mailto:adopt@purrfecmatch.com";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
      <Layout footerType="default">
        <div style={styles.profileContainer}>
          <h1 style={styles.name}>{petData.name}</h1>

          {/* Pet Image */}
          {petData.profileImage && (
              <div style={styles.imageWrapper}>
                <img
                    src={petData.profileImage}
                    alt={`${petData.name}'s profile`}
                    style={styles.image}
                />
              </div>
          )}

          {/* Pet Details */}
          <div style={styles.infoBox}>
            <div style={styles.detailsContainer}>
              <div style={{ ...styles.column, ...styles.firstColumn }}>
                <p style={styles.detail}><strong>Type:</strong> {petData.type}</p>
                <p style={styles.detail}><strong>Breed:</strong> {petData.breed}</p>
                <p style={styles.detail}><strong>Age:</strong> {petData.age} years</p>
                <p style={styles.detail}><strong>Gender:</strong> {petData.gender}</p>
                <p style={styles.detail}><strong>Color:</strong> {petData.color}</p>
                <p style={styles.detail}><strong>Weight:</strong> {petData.weight} kg</p>
                <p style={styles.detail}><strong>Good With Kids:</strong> {petData.kids}</p>
              </div>
              <div style={styles.column}>
                <p style={styles.detail}><strong>Description:</strong> {petData.description}</p>
                <p style={styles.detail}><strong>Medical History:</strong> {petData.medicalHistory}</p>
                <p style={styles.detail}><strong>Location:</strong> {petData.location}</p>
                <p style={styles.detail}><strong>Availability:</strong> {petData.availability}</p>
                <p style={styles.detail}><strong>Vaccination:</strong> {petData.vaccination}</p>
                <p style={styles.detail}><strong>Spayed/Neutered:</strong> {petData.spayedNeutered}</p>
              </div>
            </div>
          </div>

          <Button style={styles.button} onClick={handleEmailClick}>
            Contact Us to Adopt
          </Button>
        </div>

      </Layout>
  );
};

const styles = {
  profileContainer: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "10px",
    marginTop: "275px",
    backgroundColor: "#E0E9EB",
    marginBottom: '150px',
    border: "4px solid #000000",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Hammersmith One', sans-serif",
  },
  name: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "10px",
    color: "#000000",
  },
  content: {
    display: "block", // Stack elements vertically
    alignItems: "center",
    textAlign: "center",
  },
  imageWrapper: {
    textAlign: "center",
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "cover", // Ensure the image scales proportionally
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "4px solid #000000",
  },
  infoBox: {
    border: "4px solid #000000",
    padding: "20px",
    backgroundColor: "#E0E9EB",
    marginTop: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  detailsContainer: {
    display: "flex",
    gap: "20px",
    lineHeight: "1.4",
    textAlign: "left",
  },
  column: {
    flex: "1",
  },
  firstColumn: {
    marginLeft: "20px",
  },
  detail: {
    fontSize: "1rem",
    marginBottom: "8px",
    color: "#000000",
    fontFamily: "'Hammersmith One', sans-serif",
    textTransform: "uppercase",
  },
  button: {
    display: "block",
    width: "50%",
    margin: "20px auto",
    padding: "10px 20px",
    fontSize: "1.2rem",
    color: "#E0E9EB",
    backgroundColor: "#6F94F1",
    border: "none",
    fontFamily: "'Hammersmith One', sans-serif",
    textTransform: "uppercase",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
  },
};


export default PetProfileView;
