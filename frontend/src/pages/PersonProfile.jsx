import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        console.log("Token being sent:", token);

        const response = await axios.get("http://localhost:3000/current-user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("User data fetched:", response.data);
        setUserData(response.data);
        setDescription(response.data.additionalInfo?.profileDescription || "");
        setProfileImage(response.data.profileImage || null);
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data || error.message);
        alert("Failed to fetch user details. Please log in again.");
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveOrEdit = async () => {
    if (isEditing) {
      try {
        const updates = {
          additionalInfo: {
            ...userData.additionalInfo,
            profileDescription: description,
          },
        };

        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        await axios.put(`http://localhost:3000/users/id/${userData._id}`, updates, {
          headers: { Authorization: `Bearer ${token}` },
        });

        alert("Profile description saved!");
      } catch (error) {
        console.error("Error saving profile description:", error);
        alert("Failed to save profile description.");
      }
    }
    setIsEditing(!isEditing);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.profileHeader}>
        <div style={styles.profileImageContainer}>
          {profileImage ? (
            <img src={profileImage} alt="Profile" style={styles.profileImage} />
          ) : (
            <div style={styles.placeholder}>
              <p style={styles.placeholderText}>Upload Photo</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            style={styles.fileInput}
            onChange={handleImageUpload}
          />
        </div>
        <div style={styles.profileInfo}>
          <h1 style={styles.username}>
            {userData.firstName} {userData.lastName}'s Profile
          </h1>
          <div style={styles.infoGrid}>
            <div>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Address:</strong> {userData.address}
              </p>
              <p>
                <strong>Birthday:</strong> {userData.birthday}
              </p>
            </div>
            <div>
              <p>
                <strong>Do You Have Cats?</strong> {userData.additionalInfo?.cats ? "Yes" : "No"}
              </p>
              <p>
                <strong>Do You Have Dogs?</strong> {userData.additionalInfo?.dogs ? "Yes" : "No"}
              </p>
              <p>
                <strong>Do You Have Kids?</strong> {userData.additionalInfo?.kids ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.descriptionSection}>
        <h3 style={styles.sectionTitle}>About Me</h3>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about yourself..."
          style={styles.textArea}
          disabled={!isEditing}
        />
        <button style={styles.button} onClick={handleSaveOrEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#e6f0ff",
    boxSizing: "border-box",
  },
  profileHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "20px",
  },
  profileImageContainer: {
    position: "relative",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    marginBottom: "10px",
    border: "4px solid #4CAF50",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  placeholder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#aaa",
    fontSize: "16px",
    textTransform: "uppercase",
  },
  fileInput: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
  profileInfo: {
    textAlign: "center",
  },
  username: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    fontSize: "16px",
    color: "#555",
  },
  descriptionSection: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  textArea: {
    width: "100%",
    height: "150px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
    marginBottom: "10px",
    resize: "none",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};

export default ProfilePage;
