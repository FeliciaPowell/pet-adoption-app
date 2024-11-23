// AccountCreation Component
// - A step-based user account creation form with progress tracking and completion modal.
// - Steps include:
//   1. User Choice (Adopt/Create Shelter)
//   2. Personal Info Collection
//   3. Additional Information (Checkboxes)
// - Integrated with React Router for step navigation via query parameters.

// Importing necessary dependencies and components
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUser, faAddressBook, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

// Main AccountCreation Component
const AccountCreation = () => {
  // Router hooks for managing navigation and URL query parameters
  const location = useLocation();
  const navigate = useNavigate();

  // States for tracking the current step, user status, and modal visibility
  const [currentStep, setCurrentStep] = useState(1);
  const [userStatus, setUserStatus] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);

  // Sync step state with URL query parameter on load or change
  useEffect(() => {
    const stepFromUrl = new URLSearchParams(location.search).get("step");
    if (stepFromUrl) {
      setCurrentStep(parseInt(stepFromUrl, 10));
    } else {
      navigate("?step=1", { replace: true }); // Default to step 1 if no query param exists
    }
  }, [location.search, navigate]);

  // Handlers for user choices
  const handleChoice1 = () => {
    setUserStatus("Want to Adopt"); // Save user choice
    setCurrentStep(2); // Move to step 2
    navigate(`?step=2`); // Update URL
  };

  const handleChoice2 = () => {
    setUserStatus("Create a Shelter");
    setCurrentStep(2);
    navigate(`?step=2`);
  };

  // Handlers for navigation buttons
  const handleNext = () => {
    if (currentStep < 3) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      navigate(`?step=${nextStep}`);
    } else {
      setIsModalActive(true); // Show modal on "Complete"
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      navigate(`?step=${prevStep}`);
    }
  };

  // Close the modal and reset state
  const closeModal = () => {
    setIsModalActive(false);
    navigate("/"); // Redirect to home after completion
  };

  return (
    <Layout footerType="default">
      <div className="account-wrapper">
        {/* Progress Bar Header */}
        <div className="create-account-header">
          <ul>
            {/* Highlight the active step in the progress bar */}
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

        {/* Completion Modal */}
        {isModalActive && (
          <div className="modal-wrapper active">
            <div className="shadow" onClick={closeModal}></div>
            <div className="success-wrap">
              <span className="modal-icon">
                <FontAwesomeIcon icon={faPaw} />
              </span>
              <p>YOU HAVE SUCCESSFULLY COMPLETED THE REGISTRATION PROCESS!</p>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="form-wrap">
          {/* Step 1: User Choice */}
          {currentStep === 1 && (
            <div className="form-box">
              <h2>DO YOU</h2>
              <Button onClick={handleChoice1} className="btn-choice">WANT TO ADOPT</Button>
              <h3>OR</h3>
              <Button onClick={handleChoice2} className="btn-choice">CREATE A SHELTER</Button>
            </div>
          )}

          {/* Step 2: Personal Info Form */}
          {currentStep === 2 && (
            <div className="form-box">
              <h2 className="heading-margin">PERSONAL INFO</h2>
              <form>
                {/* Input Fields for User Details */}
                <div className="input-box"><input type="text" required /><label>FIRST NAME</label><i><FontAwesomeIcon icon={faUser} /></i></div>
                <div className="input-box"><input type="text" required /><label>LAST NAME</label><i><FontAwesomeIcon icon={faUser} /></i></div>
                <div className="input-box"><input type="text" required /><label>ADDRESS</label><i><FontAwesomeIcon icon={faAddressBook} /></i></div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder=""
                    onFocus={(e) => {
                      e.target.type = "date"; // Show date picker on focus
                      e.target.placeholder = "mm/dd/yyyy";
                    }}
                    onBlur={(e) => {
                      e.target.type = e.target.value ? "date" : "text";
                      e.target.placeholder = "";
                    }}
                    required
                  />
                  <label>BIRTHDAY</label><i><FontAwesomeIcon icon={faCakeCandles} /></i>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Checkbox Group */}
          {currentStep === 3 && (
            <div className="form-box">
              <h2>DO YOU HAVE...?</h2>
              <form className="checkbox-group">
                <label><input type="checkbox" /> DO YOU HAVE KIDS?</label>
                <label><input type="checkbox" /> DO YOU HAVE CATS?</label>
                <label><input type="checkbox" /> DO YOU HAVE DOGS?</label>
                <label><input type="checkbox" /> DO YOU HAVE OTHER PETS?</label>
              </form>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="btns-wrap">
          {currentStep > 1 && <Button onClick={handleBack} className="btn-back">BACK</Button>}
          {currentStep < 3 ? (
            <Button onClick={handleNext} className="btn-next">NEXT</Button>
          ) : (
            <Button onClick={handleNext} className="btn-complete">COMPLETE</Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AccountCreation;
