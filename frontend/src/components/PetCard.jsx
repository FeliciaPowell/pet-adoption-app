import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/PlaceholderImage.jpg";
const PetCard = ({ pet }) => {
    return (
        <div style={styles.card}>
            <Link to={`/pets/${pet._id}`} style={styles.link}>
                <div style={styles.imageWrapper}>
                    <img
                        src={pet.image || PlaceholderImage}
                        alt={pet.name}
                        style={styles.image}
                    />
                </div>
            </Link>
            <Link to={`/pets/${pet._id}`} style={styles.link}>
                <h2 style={styles.name}>{pet.name}</h2>
            </Link>
            <p style={styles.details}>
                {pet.age} {pet.age > 1 ? "YEARS" : "YEAR"} |{" "}
                {pet.gender.toUpperCase()}
            </p>
        </div>
    );
};

// Styles object
const styles = {
    card: {
        backgroundColor: "#E0E9EB", // Light blue-gray background
        border: "4px solid #000000", // Dark border
        width: "300px",
        textAlign: "center",
        padding: "16px",
        margin: "10px",
        fontFamily: "Hammersmith One",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    imageWrapper: {
        border: "4px solid #000000",
        marginBottom: "8px",
    },
    link: {
        textDecoration: "none", // Remove underline
        color: "inherit", // Inherit text color
    },
    image: {
        width: "100%",
        height: "auto",
    },
    name: {
        fontFamily: "'Modak', sans-serif", // Use the "Modak" font for headings
        fontSize: "2.25rem",
        color: "#000000", // Dark text
    },
    details: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#000000",
        //margin: "4px 0",
    },
};

export default PetCard;
