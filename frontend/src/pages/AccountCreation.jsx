import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.css";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUser, faAddressBook, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

const AccountCreation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [userEmail, setUserEmail] = useState("");
    const [role, setRole] = useState(null);
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        birthday: "",
    });
    const [additionalInfo, setAdditionalInfo] = useState({
        kids: false,
        cats: false,
        dogs: false,
        otherPets: false,
    });
    const [isModalActive, setIsModalActive] = useState(false);
    const [error, setError] = useState("");

    // Extract email from location.state
    useEffect(() => {
        const { email } = location.state || {};
        if (!email) {
            setError("Email not provided. Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
            return;
        }
        setUserEmail(email);
    }, [location.state, navigate]);

    // Save role to backend
    const saveRoleToBackend = async (selectedRole) => {
        try {
            console.log("Saving role:", selectedRole);
            const response = await axios.put("http://localhost:3000/user/update-role", {
                email: userEmail,
                role: selectedRole,
            });
            console.log("Role save response:", response.data);
            setRole(selectedRole);
            setCurrentStep(2); // Move to Step 2
        } catch (err) {
            console.error("Failed to save role:", err.response?.data || err.message);
            setError("Failed to save role. Please try again.");
        }
    };

    // Handle progression to the next step
    const handleNext = async () => {
        if (currentStep === 3) {
            // Final step - save all data to backend
            try {
                const payload = {
                    email: userEmail,
                    role,
                    ...userInfo,
                    additionalInfo,
                };
    
                console.log("Submitting account setup payload:", payload);
                
                // Show modal while processing
                setIsModalActive(true);
    
                const response = await axios.put("http://localhost:3000/user/account-setup", payload);
                console.log("Account setup response:", response.data);
    
                // Keep modal active or provide success feedback
                setIsModalActive(true); // Ensure it stays visible if needed
            } catch (err) {
                console.error("Failed to complete account setup:", err.response?.data || err.message);
                setError("Failed to complete account setup.");
                setIsModalActive(false); // Hide modal if there was an error
            }
        } else {
            setCurrentStep((prev) => prev + 1); // Move to next step
        }
    };
    

    // Handle "Back" button
    const handleBack = () => {
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : 1));
    };

    // Close success modal and redirect
    const closeModal = () => {
        setIsModalActive(false);
        navigate("/"); // Redirect to homepage
    };

    return (
        <Layout footerType="default">
            <div className="account-wrapper">
                {/* Progress Bar */}
                <div className="create-account-header">
                    <ul>
                        <li className={`form-1-progressbar ${currentStep >= 1 ? "active" : ""}`}><div>1</div></li>
                        <li className={`form-2-progressbar ${currentStep >= 2 ? "active" : ""}`}><div>2</div></li>
                        <li className={`form-3-progressbar ${currentStep >= 3 ? "active" : ""}`}><div>3</div></li>
                    </ul>
                </div>

                {/* Success Modal */}
                {isModalActive && (
                    <div className="modal-wrapper active">
                        <div className="shadow" onClick={closeModal}></div>
                        <div className="success-wrap">
                            <span className="modal-icon">
                                <FontAwesomeIcon icon={faPaw} />
                            </span>
                            <p>Account setup complete!</p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && <p className="error-message">{error}</p>}

                {/* Step 1: Role Selection */}
                {currentStep === 1 && (
                    <div className="form-box">
                        <h2>Select Your Role</h2>
                        <Button
                            className={`btn-choice ${role === "user" ? "active" : ""}`}
                            onClick={() => saveRoleToBackend("user")}
                        >
                            I am a User
                        </Button>
                        <Button
                            className={`btn-choice ${role === "admin" ? "active" : ""}`}
                            onClick={() => saveRoleToBackend("admin")}
                        >
                            I am an Admin
                        </Button>
                    </div>
                )}

                {/* Step 2: Personal Info */}
                {currentStep === 2 && (
                    <div className="form-box">
                        <h2 className="step-2-h2">Personal Info</h2>
                        <form>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={userInfo.firstName}
                                    onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                                    required
                                />
                                <label>First Name</label>
                                <i><FontAwesomeIcon icon={faUser} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={userInfo.lastName}
                                    onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                                    required
                                />
                                <label>Last Name</label>
                                <i><FontAwesomeIcon icon={faUser} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={userInfo.address}
                                    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                                    required
                                />
                                <label>Address</label>
                                <i><FontAwesomeIcon icon={faAddressBook} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder=""
                                    value={userInfo.birthday}
                                    onFocus={(e) => {
                                        e.target.type = "date";
                                        e.target.placeholder = "mm/dd/yyyy";
                                    }}
                                    onBlur={(e) => {
                                        e.target.type = userInfo.birthday ? "date" : "text";
                                        e.target.placeholder = "";
                                    }}
                                    onChange={(e) => setUserInfo({ ...userInfo, birthday: e.target.value })}
                                    required
                                />
                                <label>Birthday</label>
                                <i><FontAwesomeIcon icon={faCakeCandles} /></i>
                            </div>
                        </form>
                    </div>
                )}

                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                    <div className="form-box">
                        <h2>Additional Information</h2>
                        <form className="checkbox-group">
                            {[
                                { key: "kids", label: "Do you have kids?" },
                                { key: "cats", label: "Do you have cats?" },
                                { key: "dogs", label: "Do you have dogs?" },
                                { key: "otherPets", label: "Do you have other pets?" },
                            ].map(({ key, label }) => (
                                <label key={key}>
                                    <input
                                        type="checkbox"
                                        checked={additionalInfo[key]}
                                        onChange={(e) =>
                                            setAdditionalInfo({ ...additionalInfo, [key]: e.target.checked })
                                        }
                                    />
                                    {label}
                                </label>
                            ))}
                        </form>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="btns-wrap">
                    {currentStep > 1 && <Button className="btn-back" onClick={handleBack}>Back</Button>}
                    <Button className="btn-next" onClick={handleNext}>
                        {currentStep === 3 ? "Complete" : "Next"}
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default AccountCreation;
