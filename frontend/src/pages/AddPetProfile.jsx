// Pet Profile
import React from "react";
import Header from "../components/Header";
import PetForm from "../components/PetForm";

// Pet Profile is for pet intake form to add a pet for adoption
// We are adding a pet by filling out the adoption form
const AddPetProfile = () => {
  return (
    <>
      <Header />
      <h2>Provide details on the pet you would like to put up for adoption.</h2>
      <PetForm />
    </>
  );
};

export default AddPetProfile;
