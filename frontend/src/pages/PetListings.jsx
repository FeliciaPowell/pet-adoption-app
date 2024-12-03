import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout.jsx";
import PetCard from "../components/PetCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const PetListings = () => {
  const [allPets, setAllPets] = useState([]); // Keep original unfiltered data
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Toggle for filter dropdown
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cats, setCats] = useState(false);
  const [dogs, setDogs] = useState(false);
  const [kids, setKids] = useState(false);
  const [spayNeuter, setSpayNeuter] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pets`
        );
        setAllPets(response.data); // Store unfiltered data
        setPets(response.data); // Initialize displayed pets
      } catch (error) {
        setError("Failed to fetch pets");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const applyFilters = () => {
    let filteredPets = [...allPets];

    if (cats || dogs) {
      filteredPets = filteredPets.filter(
        (pet) =>
          (cats && pet.type.toLowerCase() === "cat") ||
          (dogs && pet.type.toLowerCase() === "dog")
      );
    }
    if (kids) {
      filteredPets = filteredPets.filter((pet) => pet.kids === "Yes");
    }
    if (spayNeuter) {
      filteredPets = filteredPets.filter((pet) => pet.spayedNeutered === "Yes");
    }

    setPets(filteredPets);
  };

  const handleCheckboxChange = (setter, value) => {
    setter(!value); // Toggle the state
  };

  // Apply filters whenever the checkboxes change
  useEffect(() => {
    applyFilters();
  }, [cats, dogs, kids, spayNeuter]);

  const handleSortByName = () => {
    setPets([...pets].sort((a, b) => a.name.localeCompare(b.name)));
    setIsSortOpen(false);
  };

  const handleSortByAge = () => {
    setPets([...pets].sort((a, b) => a.age - b.age));
    setIsSortOpen(false);
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
            onClick={() => setIsSortOpen((prev) => !prev)}
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
        {/* Filter Dropdown */}
        <div style={styles.dropdown}>
          <button
            style={styles.button}
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            FILTER <FontAwesomeIcon icon={faFilter} style={styles.filterIcon} />
          </button>
          {isFilterOpen && (
            <div style={styles.dropdownMenu}>
              <label style={styles.dropdownItem}>
                <input
                  type="checkbox"
                  checked={cats}
                  onChange={() => handleCheckboxChange(setCats, cats)}
                />
                Cats
              </label>
              <label style={styles.dropdownItem}>
                <input
                  type="checkbox"
                  checked={dogs}
                  onChange={() => handleCheckboxChange(setDogs, dogs)}
                />
                Dogs
              </label>
              <label style={styles.dropdownItem}>
                <input
                  type="checkbox"
                  checked={kids}
                  onChange={() => handleCheckboxChange(setKids, kids)}
                />
                Good with Kids
              </label>
              <label style={styles.dropdownItem}>
                <input
                  type="checkbox"
                  checked={spayNeuter}
                  onChange={() =>
                    handleCheckboxChange(setSpayNeuter, spayNeuter)
                  }
                />
                Spayed/Neutered
              </label>
            </div>
          )}
        </div>
      </div>
      <div style={styles.petListings}>
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </Layout>
  );
};

const styles = {
  petListings: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    justifyItems: "center",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px",
    marginBottom: "100px",
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
    marginTop: "155px",
  },
  button: {
    backgroundColor: "#000000",
    color: "#E0E9EB",
    border: "none",
    borderRadius: "50px",
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
    marginLeft: "8px",
    verticalAlign: "middle",
  },
  dropdownMenu: {
    position: "absolute",
    top: "110%",
    left: "0",
    backgroundColor: "#000000",
    borderRadius: "8px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    padding: "8px 0",
    minWidth: "160px",
    fontFamily: "'Hammersmith One', sans-serif",
  },
  dropdownItem: {
    backgroundColor: "#000000",
    padding: "10px 16px",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "'Hammersmith One', sans-serif",
    color: "#E0E9EB",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dropdownItemHover: {
    color: "#6F94F1",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
  },
};

export default PetListings;
