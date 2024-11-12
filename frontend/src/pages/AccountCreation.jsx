// Importing necessary dependencies and components
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const AccountCreation = () => {
  // Using React Router hooks to manage navigation and URL location
  const location = useLocation();
  const navigate = useNavigate();

  // Defining state for tracking the current step, user choice status, and modal visibility
  const [currentStep, setCurrentStep] = useState(1);
  const [userStatus, setUserStatus] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);

  // Effect to set the step based on URL parameters
  useEffect(() => {
    const stepFromUrl = new URLSearchParams(location.search).get("step");
    if (stepFromUrl) {
      setCurrentStep(parseInt(stepFromUrl, 10));
    } else {
      navigate("?step=1", { replace: true });
    }
  }, [location.search, navigate]);

  // Handler for selecting "Want to Adopt" option, moves to step 2
  const handleChoice1 = () => {
    setUserStatus("Want to Adopt");
    setCurrentStep(2);
    navigate(`?step=2`);
  };

  // Handler for selecting "Create a Shelter" option, moves to step 2
  const handleChoice2 = () => {
    setUserStatus("Create a Shelter");
    setCurrentStep(2);
    navigate(`?step=2`);
  };

  // Handler for "Next" button, moves to the next step, or shows modal if on last step
  const handleNext = () => {
    if (currentStep < 3) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      navigate(`?step=${nextStep}`);
    } else {
      setIsModalActive(true); // Show modal on "Complete"
    }
  };

  // Handler for "Back" button, moves to the previous step
  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      navigate(`?step=${prevStep}`);
    }
  };

  // Closes the modal and redirects the user after completion
  const closeModal = () => {
    setIsModalActive(false);
    navigate("/"); // Redirect or reset after completion if needed
  };

  return (
    <Layout footerType="default">
      <div className="account-wrapper">
        {/* Progress Bar Header */}
        <div className="create-account-header">
          <ul>
            <li className={`form-1-progressbar ${currentStep >= 1 ? "active" : ""}`}>
              <div><p>1</p></div>
            </li>
            <li className={`form-2-progressbar ${currentStep >= 2 ? "active" : ""}`}>
              <div><p>2</p></div>
            </li>
            <li className={`form-3-progressbar ${currentStep >= 3 ? "active" : ""}`}>
              <div><p>3</p></div>
            </li>
          </ul>
        </div>

        {/* Modal for Completion */}
        {isModalActive && (
          <div className="modal-wrapper active">
            <div className="shadow" onClick={closeModal}></div>
            <div className="success-wrap">
              <span className="modal-icon">
                <FontAwesomeIcon icon={faPaw} />
              </span>
              <p>You have successfully completed the process.</p>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="form-wrap">
          {/* Step 1: Choose an Option */}
          {currentStep === 1 && (
            <div className="form-box">
              <h2>Do You</h2>
              <Button onClick={handleChoice1} className="btn-choice">Want to Adopt</Button>
              <h3>OR</h3>
              <Button onClick={handleChoice2} className="btn-choice">Create a Shelter</Button>
            </div>
          )}
          {/* Step 2: Personal Info Form */}
          {currentStep === 2 && (
            <div className="form-box">
              <h2 className="heading-margin">Personal Info</h2>
              <form>
                <div className="input-box"><input type="text" required /><label>First Name</label></div>
                <div className="input-box"><input type="text" required /><label>Last Name</label></div>
                <div className="input-box"><input type="text" required /><label>Address Line 1</label></div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder=""
                        onFocus={(e) => {
                        e.target.type = "date"; // Show date picker on focus
                        e.target.placeholder = "mm/dd/yyyy"; // Show placeholder on focus
                        }}
                        onBlur={(e) => {
                        e.target.type = e.target.value ? "date" : "text"; // Keep type as date if a value exists
                        e.target.placeholder = ""; // Remove placeholder on blur
                        }}
                        required
                    />
                    <label>Birthday</label>
                </div>
              </form>
            </div>
          )}
          {/* Step 3: Checkbox Group for Additional Info */}
          {currentStep === 3 && (
            <div className="form-box">
              <h2>Do You Have</h2>
              <form className="checkbox-group">
                <label><input type="checkbox" /> Do you have kids?</label>
                <label><input type="checkbox" /> Do you have cats?</label>
                <label><input type="checkbox" /> Do you have dogs?</label>
                <label><input type="checkbox" /> Do you have other pets?</label>
              </form>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="btns-wrap">
          {currentStep > 1 && <Button onClick={handleBack} className="btn-back">Back</Button>}
          {currentStep < 3 ? (
            <Button onClick={handleNext} className="btn-next">Next</Button>
          ) : (
            <Button onClick={handleNext} className="btn-complete">Complete</Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AccountCreation;
