// Profile management screen for shelters
import React from "react";
import Layout from "../components/Layout.jsx";
import PetForm from "../components/PetForm.jsx";

const ShelterManagement = () => {
  return (
    <Layout footerType="default">
      {/* adding PetForm here just for tesitng post route */}
      <PetForm />
    </Layout>
  );
};

export default ShelterManagement;
