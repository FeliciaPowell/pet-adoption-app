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
import ShelterListings from "./pages/ShelterListings";
import ShelterManagement from "./pages/ShelterManagement";
import Layout from "./components/Layout.jsx";
import AddPetProfile from "./pages/AddPetProfile.jsx"; // Houses the pet intake form to add a pet for adoption
import PetProfileView from "./pages/PetProfileView.jsx"; // Viewing of individual pet profiles
import PetListings from "./pages/PetListings.jsx"; // Pet listings of card displayed pets

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
            <Route
              path="/adoption_management"
              element={<AdoptionManagement />}
            />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/person" element={<PersonProfile />} />
            <Route path="/pet" element={<AddPetProfile />} />
            <Route path="/pets/:_id" element={<PetProfileView />} />
            <Route path="/pets" element={<PetListings />} />
            <Route path="/shelters" element={<ShelterListings />} />
            <Route path="/shelter_management" element={<ShelterManagement />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
