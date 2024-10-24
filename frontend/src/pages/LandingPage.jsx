// Landing Page
import { Link } from "react-router-dom";
import teaserLogo from "../assets/teaser.jpg";

const LandingPage = () => {
  return (
    <div>
      <img
        src={teaserLogo}
        alt="logo"
        style={{ width: "35%", height: "auto" }}
      />
      <h1>Welcome to PurrrfectMatch</h1>
      <p>You can find your furry match today!</p>
      <ul>
        <li>
          <Link to="/about">Learn about PurrrfectMatch</Link>
        </li>
        <li>
          <Link to="/login">Login here</Link>
        </li>
        <li>
          <Link to="/account">AccountCreation</Link>
        </li>
        <li>
          <Link to="/admin">AdminDashboard </Link>
        </li>
        <li>
          <Link to="/adoption">AdoptionListings</Link>
        </li>
        <li>
          <Link to="/adoption_management">AdoptionManagement</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/login">LoginPage</Link>
        </li>
        <li>
          <Link to="/person">PersonProfile</Link>
        </li>
        <li>
          <Link to="/pet">PetProfile</Link>
        </li>
        <li>
          <Link to="/shelters">ShelterListings</Link>
        </li>
        <li>
          <Link to="/shelter_management">ShelterManagement</Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
