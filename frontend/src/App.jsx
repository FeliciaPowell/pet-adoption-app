import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import AccountCreation from "./pages/AccountCreation";
import LoginPage from "./pages/LoginPage";
import PersonProfile from "./pages/PersonProfile";
import MoreInfoAdopters from "./pages/MoreInfoAdopters.jsx";
import PetProfileView from "./pages/PetProfileView.jsx"; // Viewing of individual pet profiles
import PetListings from "./pages/PetListings.jsx"; // Pet listings of card displayed pets

function App() {
  return (
    <Router
      basename="/pet-adoption-app"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/account" element={<AccountCreation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/person" element={<PersonProfile />} />
        <Route path="/pets/:_id" element={<PetProfileView />} />
        <Route path="/pets" element={<PetListings />} />
        <Route path="/more_info_adopters" element={<MoreInfoAdopters />} />
      </Routes>
    </Router>
  );
}

export default App;
