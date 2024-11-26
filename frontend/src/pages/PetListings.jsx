import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout.jsx";
import PetCard from "../components/PetCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const PetListings = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSortOpen, setIsSortOpen] = useState(false); // State to toggle the dropdown
  const [hoveredItem, setHoveredItem] = useState(null); // State for hover tracking

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pets");
        setPets(response.data);
      } catch (error) {
        setError("Failed to fetch pets");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handleSortByName = () => {
    setPets([...pets].sort((a, b) => a.name.localeCompare(b.name)));
    setIsSortOpen(false); // Close dropdown
  };

  const handleSortByAge = () => {
    setPets([...pets].sort((a, b) => a.age - b.age));
    setIsSortOpen(false); // Close dropdown
  };

  const handleFilter = () => {
    // Add filter logic here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
      <Layout footerType="default">
        <h1 style={styles.heading}>Adoption Listings</h1>
        <div style={styles.buttonContainer}>
          {/* Sort Dropdown */}
          <div style={styles.dropdown}>
            <button
                style={styles.button}
                onClick={() => {
                  setIsSortOpen((prev) => !prev)
                }}
            >
              SORT <span style={styles.icon}>☰</span>
            </button>
            {isSortOpen && (
                <div style={styles.dropdownMenu}>
                  <button
                      style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === "name" ? styles.dropdownItemHover : {}),
                      }}
                      onMouseEnter={() => setHoveredItem("name")}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={handleSortByName}
                  >
                    SORT BY NAME
                  </button>
                  <button
                      style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === "age" ? styles.dropdownItemHover : {}),
                      }}
                      onMouseEnter={() => setHoveredItem("age")}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={handleSortByAge}
                  >
                    SORT BY AGE
                  </button>
                </div>
            )}
          </div>
          <button style={styles.button} onClick={handleFilter}>
            FILTER <FontAwesomeIcon icon={faFilter} style={styles.filterIcon} />
          </button>
        </div>
        <div style={styles.petListings}>
          {pets.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
          ))}
        </div>
      </Layout>
  );
};

// Styles object
const styles = {
  petListings: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Three cards per row
    gap: "20px", // Space between cards
    justifyItems: "center", // Center the cards horizontally
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px", // Restrict the width of the grid
    marginBottom: '100px'
  },
  heading: {
    textAlign: "center",
    margin: "20px 0",
    fontFamily: "'Hammersmith One', sans-serif",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px",
    marginBottom: "10px",
    marginTop: '155px'
  },
  button: {
    backgroundColor: "#000000",
    color: "#E0E9EB",
    border: "none",
    borderRadius: '50px',
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "Hammersmith One",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "1.2rem",
  },
  filterIcon: {
    display: "inline-block",
    marginLeft: "8px", // Add space between the text and the icon
    verticalAlign: "middle", // Ensure proper alignment with text
  },
  dropdownMenu: {
    position: "absolute",
    top: "110%", // Slightly below the button
    left: "0", // Adjust as needed to align
    backgroundColor: "#000000", // Light background color
    borderRadius: "8px", // Rounded corners
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Subtle shadow
    zIndex: 1000, // Ensure it appears above other elements
    padding: "8px 0", // Spacing inside the menu
    minWidth: "160px", // Minimum width for consistency
    fontFamily: "'Hammersmith One', sans-serif",
  },
  dropdownItem: {
    backgroundColor: "#000000", // Transparent default
    padding: "10px 16px", // Comfortable padding
    border: "none", // No border
    textAlign: "left",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "'Hammersmith One', sans-serif",
    color: "#E0E9EB",
    transition: "background-color 0.3s ease", // Smooth hover effect
  },
  dropdownItemHover: {
    color: "#6F94F1", // Font color change on hover
  },
  dropdown: {
    position: "relative",
    display: "inline-block", // Ensure proper inline display
  },
};

export default PetListings;
