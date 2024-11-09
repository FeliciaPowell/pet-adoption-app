import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import AccountCreation from "./pages/AccountCreation";
import AdminDashboard from "./pages/AdminDashboard";
import AdoptionListings from "./pages/AdoptionListings";
import AdoptionManagement from "./pages/AdoptionManagement";
import FAQs from "./pages/FAQs";
import LoginPage from "./pages/LoginPage";
import PersonProfile from "./pages/PersonProfile";
import PetProfile from "./pages/PetProfile";
import ShelterListings from "./pages/ShelterListings";
import ShelterManagement from "./pages/ShelterManagement";
import Layout from "./components/Layout.jsx";
import MoreInfoAdopters from "./pages/MoreInfoAdopters.jsx";
import MoreInfoShelters from "./pages/MoreInfoShelters.jsx";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/account" element={<AccountCreation />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/adoption" element={<AdoptionListings />} />
            <Route path="/adoption_management" element={<AdoptionManagement />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/person" element={<PersonProfile />} />
            <Route path="/pet" element={<PetProfile />} />
            <Route path="/shelters" element={<ShelterListings />} />
            <Route path="/shelter_management" element={<ShelterManagement />} />
            <Route path="/more_info_adopters" element={<MoreInfoAdopters />} />
            <Route path="/more_info_shelters" element={<MoreInfoShelters />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
