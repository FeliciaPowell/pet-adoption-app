import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    birthday: "",
    kids: false,
    cats: false,
    dogs: false,
    otherPets: false,
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); // Alert visibility state

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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleEditSave = () => {
    if (isEditing) {
      const updatedUser = { ...userInfo };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setAlertVisible(true); // Show the custom alert
      setTimeout(() => setAlertVisible(false), 3000); // Auto-hide after 3 seconds
    }
    setIsEditing(!isEditing);
  };

  return (
    <Layout footerType="profile">
      <div style={styles.pageContainer}>
        {alertVisible && (
          <div style={styles.alertBox}>
            Profile updated successfully!
          </div>
        )}
        {/* Profile Header Section */}
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
              {userInfo.firstName} {userInfo.lastName}'s Profile
            </h1>
            <div style={styles.infoGrid}>
              <div>
                <p><strong>Email:</strong> {userInfo.email}</p>
                <p><strong>Address:</strong> {userInfo.address}</p>
              </div>
              <div>
                <p><strong>Birthday:</strong> {userInfo.birthday}</p>
                <p><strong>Do You Have Cats?</strong> {userInfo.cats ? "Yes" : "No"}</p>
              </div>
              <div>
                <p><strong>Do You Have Dogs:</strong> {userInfo.dogs ? "Yes" : "No"}</p>
                <p><strong>Do You Have Kids:</strong> {userInfo.kids ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div style={styles.descriptionSection}>
          <h3 style={styles.sectionTitle}>About Me</h3>
          <textarea
            value={userInfo.description}
            onChange={(e) =>
              setUserInfo({ ...userInfo, description: e.target.value })
            }
            placeholder="Tell us about yourself..."
            style={styles.textArea}
            disabled={!isEditing}
          />
          <button style={styles.button} onClick={handleEditSave}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "65vh",
    padding: "20px",
    backgroundColor: "#f9fbfc",
    boxSizing: "border-box",
    marginTop: "200px",
    marginBottom: "50px",
    maxWidth: "1400px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "20px",
  },
  alertBox: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    fontSize: "16px",
    zIndex: 1000,
  },
  profileHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "20px",
  },
  profileImageContainer: {
    position: "relative",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    marginBottom: "10px",
    border: "3px solid #6F94F1",
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
    width: "100%",
  },
  username: {
    fontSize: "28px",
    fontWeight: "500",
    marginBottom: "20px",
    color: "#333",
  },
  infoGrid: {
    display: "flex",
    justifyContent: "space-between", // Or use "space-evenly"
    gap: "20px", // Optional for additional spacing between columns
    fontSize: "14px",
    color: "#555",
    width: "100%",
    textAlign: "left",
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
    fontSize: "20px",
    fontWeight: "500",
    marginBottom: "10px",
    color: "#333",
  },
  textArea: {
    width: "100%",
    height: "150px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
    marginBottom: "10px",
    resize: "none",
    backgroundColor: "#f7f9fc",
    color: "#333",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
};

export default ProfilePage;
