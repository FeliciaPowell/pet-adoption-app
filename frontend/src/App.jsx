import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import AccountCreation from "./pages/AccountCreation";
import AdminDashboard from "./pages/AdminDashboard";
import AdoptionListings from "./pages/AdoptionListings";
import AdoptionManagement from "./pages/AdoptionManagement";
import LoginPage from "./pages/LoginPage";
import PersonProfile from "./pages/PersonProfile";
import ShelterManagement from "./pages/ShelterManagement";
import MoreInfoAdopters from "./pages/MoreInfoAdopters.jsx";
import MoreInfoShelters from "./pages/MoreInfoShelters.jsx";
import AddPet from "./pages/AddPet.jsx"; // Houses the pet intake form to add a pet for adoption
import PetProfileView from "./pages/PetProfileView.jsx"; // Viewing of individual pet profiles
import PetListings from "./pages/PetListings.jsx"; // Pet listings of card displayed pets

function App() {
  return (
    <Router basename="/pet-adoption-app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/account" element={<AccountCreation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adoption" element={<AdoptionListings />} />
        <Route path="/adoption_management" element={<AdoptionManagement />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/person" element={<PersonProfile />} />
        <Route path="/add_pet" element={<AddPet />} />
        <Route path="/pets/:_id" element={<PetProfileView />} />
        <Route path="/pets" element={<PetListings />} />
        <Route path="/shelter_management" element={<ShelterManagement />} />
        <Route path="/more_info_adopters" element={<MoreInfoAdopters />} />
        <Route path="/more_info_shelters" element={<MoreInfoShelters />} />
      </Routes>
    </Router>
  );
}

export default App;
