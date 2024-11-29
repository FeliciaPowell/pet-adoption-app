import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.css";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faAddressBook, faCakeCandles, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AccountCreation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        address: "",
        birthday: "",
        kids: false,
        cats: false,
        dogs: false,
        otherPets: false,
    });

    // Initialize email, password from location or localStorage
    useEffect(() => {
        const email = location.state?.email || localStorage.getItem("email");
        const password = location.state?.password || localStorage.getItem("password");
        const confirmPassword = location.state?.confirmPassword || localStorage.getItem("confirmPassword");

        if (!email || !password || !confirmPassword) {
            setError("Required information missing. Redirecting...");
            setTimeout(() => navigate("/login"), 3000);
        } else {
            setUserDetails((prev) => ({
                ...prev,
                email,
                password,
                confirmPassword,
            }));
        }
    }, [location.state, navigate]);

    // Handle field updates
    const handleInputChange = (field, value) => {
        setUserDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Next button handler
    const handleNext = (e) => {
        e.preventDefault();
        setError("");
        if (currentStep === 1) {
            if (!userDetails.email || !userDetails.password || !userDetails.confirmPassword) {
                setError("Please fill in all required fields.");
                return;
            }
            if (userDetails.password !== userDetails.confirmPassword) {
                setError("Passwords do not match!");
                return;
            }
        }
        if (currentStep === 2) {
            if (!userDetails.firstName || !userDetails.lastName || !userDetails.address || !userDetails.birthday) {
                setError("Please complete all fields in this step.");
                return;
            }
        }
        setCurrentStep((prev) => prev + 1);
    };

    // Back button handler
    const handleBack = () => {
        setError("");
        setCurrentStep((prev) => Math.max(1, prev - 1));
    };

    // Submit account creation
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const { confirmPassword, ...payload } = userDetails;

            const response = await axios.post("http://localhost:3000/user/account-setup", payload);

            if (response.status === 201) {
                setModalActive(true);
                localStorage.clear();
                setTimeout(() => {
                    setModalActive(false);
                    navigate("/login");
                }, 3000);
            } else {
                setError("Failed to create account. Please try again.");
            }
        } catch (err) {
            setError("Failed to create account: " + (err.response?.data?.error || "Unexpected error occurred."));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout footerType="default">
            <div className="account-wrapper">
                <div className="create-account-header">
                    <ul>
                        <li className={`form-1-progressbar ${currentStep >= 1 ? "active" : ""}`}><div>1</div></li>
                        <li className={`form-2-progressbar ${currentStep >= 2 ? "active" : ""}`}><div>2</div></li>
                        <li className={`form-3-progressbar ${currentStep === 3 ? "active" : ""}`}><div>3</div></li>
                    </ul>
                </div>

                {modalActive && (
                    <div className="modal-wrapper active">
                        <div className="modal-content">
                            <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
                            <p>Account setup complete! Redirecting to login...</p>
                        </div>
                    </div>
                )}

                {error && <p className="error-message">{error}</p>}

                {currentStep === 1 && (
                    <div className="form-box">
                        <h2>Account Details</h2>
                        <form>
                            <div className="input-box">
                                <input
                                    type="email"
                                    value={userDetails.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    required
                                />
                                <label>Email</label>
                                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    value={userDetails.password}
                                    onChange={(e) => handleInputChange("password", e.target.value)}
                                    required
                                />
                                <label>Password</label>
                                <i><FontAwesomeIcon icon={faLock} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    value={userDetails.confirmPassword}
                                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                    required
                                />
                                <label>Confirm Password</label>
                                <i><FontAwesomeIcon icon={faLock} /></i>
                            </div>
                        </form>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="form-box">
                        <h2>Personal Info</h2>
                        <form>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={userDetails.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    required
                                />
                                <label>First Name</label>
                                <i><FontAwesomeIcon icon={faUser} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={userDetails.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    required
                                />
                                <label>Last Name</label>
                                <i><FontAwesomeIcon icon={faUser} /></i>
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value={userDetails.address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
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

                {currentStep === 3 && (
                    <div className="form-box">
                        <h2>Preferences</h2>
                        <form className="checkbox-group">
                            {[{ key: "kids", label: "Do you have kids?" }, { key: "cats", label: "Do you have cats?" }, { key: "dogs", label: "Do you have dogs?" }, { key: "otherPets", label: "Do you have other pets?" }].map(({ key, label }) => (
                                <label key={key}>
                                    <input
                                        type="checkbox"
                                        checked={userDetails[key]}
                                        onChange={(e) => handleInputChange(key, e.target.checked)}
                                    />
                                    {label}
                                </label>
                            ))}
                        </form>
                    </div>
                )}

                <div className="btns-wrap">
                    {currentStep > 1 && <Button className="btn-back" onClick={handleBack}>Back</Button>}
                    {currentStep === 3 ? (
                        <Button className="btn-next" onClick={handleSubmit} disabled={loading}>
                            {loading ? "Submitting..." : "Complete"}
                        </Button>
                    ) : (
                        <Button className="btn-next" onClick={handleNext}>Next</Button>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default AccountCreation;
