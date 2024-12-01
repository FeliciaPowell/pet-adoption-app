// import React, { useState } from "react";
// import Layout from "../components/Layout";

// const ProfilePage = () => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Layout footerType="profile">
//       <div style={styles.pageContainer}>
//         {/* Profile Header Section */}
//         <div style={styles.profileHeader}>
//           <div style={styles.profileImageContainer}>
//             {profileImage ? (
//               <img src={profileImage} alt="Profile" style={styles.profileImage} />
//             ) : (
//               <div style={styles.placeholder}>
//                 <p style={styles.placeholderText}>Upload Photo</p>
//               </div>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               style={styles.fileInput}
//               onChange={handleImageUpload}
//             />
//           </div>
//           {/* Profile Info */}
//           <div style={styles.profileInfo}>
//             <h2 style={styles.username}>John Doe</h2>
//             <div style={styles.infoGrid}>
//               <div>
//                 <p><strong>Username:</strong> johndoe123</p>
//                 <p><strong>Address:</strong> 1234 Main St</p>
//                 <p><strong>Birthday:</strong> 01/01/1990</p>
//               </div>
//               <div>
//                 <p><strong>Date Created:</strong> 01/01/2023</p>
//                 <p><strong>Status:</strong> Wants to Adopt</p>
//                 <p><strong>Do You Have Kids?</strong> Yes</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Favorites Section */}
//         <div style={styles.favorites}>
//           <h3 style={styles.sectionTitle}>Favorites</h3>
//           <div style={styles.favoritesList}>
//             {[1, 2, 3, 4, 5, 6].map((item, index) => (
//               <div key={index} style={styles.favoriteItem}>
//                 <div style={styles.petImage}></div>
//                 <div style={styles.petInfo}>
//                   <p><strong>Pet Name</strong></p>
//                   <p>6 months</p>
//                 </div>
//                 <button style={styles.favoriteHeart}>♡</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// const styles = {
//   pageContainer: {
//     marginTop: "13rem", // Set the margin to match your header height
//     padding: "20px",
//     backgroundColor: "#e6f0ff",
//     borderRadius: "10px",
//     minHeight: "calc(100vh - 100px)", // Subtract header height from full height
//     boxSizing: "border-box",
//   },
//   profileHeader: {
//     marginTop: "2rem",
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "50px",
//     marginBottom: "2rem",
//   },
//   profileImageContainer: {
//     position: "relative",
//     width: "260px",
//     height: "260px",
//     borderRadius: "50%",
//     overflow: "hidden",
//     backgroundColor: "#d9d9d9",
//   },
//   profileImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   placeholder: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100%",
//     color: "#aaa",
//     fontSize: "16px",
//   },
//   placeholderText: {
//     textAlign: "center",
//   },
//   fileInput: {
//     position: "absolute",
//     bottom: "0",
//     width: "100%",
//     height: "100%",
//     opacity: 0,
//     cursor: "pointer",
//   },
//   profileInfo: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     fontSize: "18px",
//     color: "#333",
//   },
//   username: {
//     fontSize: "28px",
//     marginBottom: "30px",
//   },
//   infoGrid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "30px",
//   },
//   favorites: {
//     marginTop: "60px",
//   },
//   sectionTitle: {
//     fontSize: "26px",
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   favoritesList: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//     gap: "30px",
//   },
//   favoriteItem: {
//     backgroundColor: "#fff",
//     padding: "15px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     position: "relative",
//     height: "240px",
//   },
//   petImage: {
//     width: "100%",
//     height: "140px",
//     backgroundColor: "#d9d9d9",
//     borderRadius: "10px",
//     marginBottom: "10px",
//   },
//   petInfo: {
//     textAlign: "center",
//     fontSize: "14px",
//   },
//   favoriteHeart: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     border: "none",
//     background: "none",
//     cursor: "pointer",
//     fontSize: "20px",
//   },
// };

// export default ProfilePage;

import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div>
      <style>
        {`
          .profile-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .profile-header {
            text-align: center;
            border-bottom: 2px solid #f4f4f4;
            padding-bottom: 20px;
          }

          .profile-header h1 {
            font-size: 2rem;
            color: #333333;
          }

          .profile-header .profile-email {
            font-size: 1rem;
            color: #777777;
          }

          .profile-details {
            padding-top: 20px;
          }

          .profile-details h2 {
            font-size: 1.5rem;
            color: #333333;
            margin-bottom: 10px;
          }

          .profile-details p {
            font-size: 1rem;
            color: #555555;
            line-height: 1.6;
          }

          .loading {
            text-align: center;
            font-size: 1.2rem;
            color: #777777;
            margin-top: 50px;
          }
        `}
      </style>
      <div className="profile-container">
        <div className="profile-header">
          <h1>{userData.name}</h1>
          <p className="profile-email">{userData.email}</p>
        </div>
        <div className="profile-details">
          <h2>About</h2>
          <p>{userData.bio || "This user hasn't added any information yet."}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
