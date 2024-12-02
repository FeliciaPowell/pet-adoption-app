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
  });

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
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser))
    }
  }, [])

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
          {/* Profile Info */}
          <div style={styles.profileInfo}>
            <h2 style={styles.username}>{userInfo.firstName} {userInfo.lastName}</h2>
            <div style={styles.infoGrid}>
              <div>
                <p><strong>Email:</strong> {userInfo.email}</p>
                <p><strong>Address:</strong> {userInfo.address}</p>
                <p><strong>Birthday:</strong> {userInfo.birthday}</p>
              </div>
              <div>
                <p><strong>Do You Have Cats?</strong> {userInfo.cats ? "Yes" : "No"}</p>
                <p><strong>Do You Have Dogs?</strong> {userInfo.dogs ? "Yes" : "No"}</p>
                <p><strong>Do You Have Kids?</strong> {userInfo.kids ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

const styles = {
  pageContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  profileHeader: {
    textAlign: "center",
    borderBottom: "2px solid #f4f4f4",
    paddingBottom: "20px",
  },
  username: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  placeholder: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontSize: "1rem",
    color: "#666",
  },
  fileInput: {
    marginTop: "10px",
  },
};

export default ProfilePage;
