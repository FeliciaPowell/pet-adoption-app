import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";

// PetProfileView to view specific pet profile details
// after completing intake pet adoption form thru submitting, will see specific pet profile completed

const PetProfileView = () => {
  const { _id } = useParams();
  const petData = {}; // placeholder for pet data

  return (
    <>
      <div>
        <h2>Individual Pet Profile View</h2>
        <p>In progress: Will transfer draft code here for Code Review #2.</p>
      </div>
    </>
  );
};

export default PetProfileView;
