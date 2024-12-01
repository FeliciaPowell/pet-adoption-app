import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/current-user", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUserData(response.data);
        setDescription(response.data.additionalInfo?.profileDescription || "");
        setProfileImage(response.data.profileImage || null);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

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

        await axios.put(
          `http://localhost:3000/users/id/${userData._id}`,
          updates,
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );

        alert("Profile description saved!");
      } catch (error) {
        console.error("Error saving profile description:", error);
        alert("Failed to save profile description.");
      }
    }
    setIsEditing(!isEditing);
  };

  if (!userData) {
    return <div>Loading...</div>; // Display a loader until the data is fetched
  }

  return (
    <Layout footerType="profile">
      <div style={styles.pageContainer}>
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
          <h2 style={styles.username}>{`${userData.firstName} ${userData.lastName}`}</h2>
        </div>

        {/* Profile Information Section */}
        <div style={styles.profileInfo}>
          <div style={styles.infoGrid}>
            <div>
              <p><strong>Username:</strong> {userData.email}</p>
              <p><strong>Address:</strong> {userData.address || "N/A"}</p>
            </div>
            <div>
              <p><strong>Birthday:</strong> {userData.birthday || "N/A"}</p>
              <p><strong>Date Created:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <p><strong>Status:</strong> {userData.status}</p>
              <p><strong>Do You Have Kids?</strong> {userData.additionalInfo.kids ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
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
    </Layout>
  );
};

const styles = {
  // (Same styles as before)
};

export default ProfilePage;
