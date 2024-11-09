import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";

// PetProfileView to view specific pet profile details
// after completing intake pet adoption form thru submitting, will see specific pet profile completed

const PetProfileView = () => {
  const { _id } = useParams();
  const petData = {}; // placeholder for pet data

  return (
      <Layout footerType="default">
          {/* Page content here */}
      </Layout>
  );
};

export default PetProfileView;
