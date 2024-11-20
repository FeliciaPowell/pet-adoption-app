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
    const [userEmail, setUserEmail] = useState(""); // User email from registration
    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", address: "", birthday: "" });
    const [additionalInfo, setAdditionalInfo] = useState({ kids: false, cats: false, dogs: false, otherPets: false });
    const [isModalActive, setIsModalActive] = useState(false);
    const [error, setError] = useState(""); // Error message for account setup

    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const token = localStorage.getItem("token"); // Fetch token from localStorage
                if (!token) throw new Error("No token found");

                const response = await axios.get(`http://localhost:3000/current-user`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log("Fetched user email:", response.data.email);
                setUserEmail(response.data.email);
            } catch (error) {
                console.error("Failed to load user email:", error);
                setError("Failed to verify user. Redirecting to login...");
                setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
            }
        };

        fetchUserEmail();

        const stepFromUrl = new URLSearchParams(location.search).get("step");
        setCurrentStep(stepFromUrl ? parseInt(stepFromUrl, 10) : 1);
    }, [location.search, navigate]);

    const handleNext = () => {
        if (currentStep < 3) {
            navigate(`?step=${currentStep + 1}`);
        } else {
            axios.post(`http://localhost:3000/save-account`, { userInfo, additionalInfo, email: userEmail })
                .then((response) => {
                    console.log("Account saved successfully:", response.data);
                    setIsModalActive(true);
                })
                .catch((error) => {
                    console.error("Failed to save account:", error);
                    setError("Account setup failed. Please try again.");
                });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) navigate(`?step=${currentStep - 1}`);
    };

    const closeModal = () => {
        setIsModalActive(false);
        navigate("/"); // Navigate to homepage
    };

    return (
        <Layout footerType="default">
            <div className="account-wrapper">
                <div className="create-account-header">
                    <ul>
                        <li className={`form-1-progressbar ${currentStep >= 1 ? "active" : ""}`}><p>1</p></li>
                        <li className={`form-2-progressbar ${currentStep >= 2 ? "active" : ""}`}><p>2</p></li>
                        <li className={`form-3-progressbar ${currentStep >= 3 ? "active" : ""}`}><p>3</p></li>
                    </ul>
                </div>

                {isModalActive && (
                    <div className="modal-wrapper active">
                        <div className="shadow" onClick={closeModal}></div>
                        <div className="success-wrap">
                            <span className="modal-icon"><FontAwesomeIcon icon={faPaw} /></span>
                            <p>Account setup complete!</p>
                        </div>
                    </div>
                )}

                {error && <p className="error-message">{error}</p>}

                <div className="form-wrap">
                    {currentStep === 1 && (
                        <div className="form-box">
                            <h2>Welcome, {userEmail}</h2>
                            <p>Do you want to adopt or create a shelter?</p>
                            <Button onClick={() => setCurrentStep(2)}>Adopt</Button>
                            <Button onClick={() => setCurrentStep(2)}>Create Shelter</Button>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="form-box">
                            <h2>Personal Info</h2>
                            <form>
                                <div className="input-box">
                                    <input type="text" value={userInfo.firstName} onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })} required />
                                    <label>First Name</label>
                                </div>
                                <div className="input-box">
                                    <input type="text" value={userInfo.lastName} onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })} required />
                                    <label>Last Name</label>
                                </div>
                                <div className="input-box">
                                    <input type="text" value={userInfo.address} onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} required />
                                    <label>Address</label>
                                </div>
                                <div className="input-box">
                                    <input
                                        type="date"
                                        value={userInfo.birthday}
                                        onChange={(e) => setUserInfo({ ...userInfo, birthday: e.target.value })}
                                        required
                                    />
                                    <label>Birthday</label>
                                </div>
                            </form>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="form-box">
                            <h2>Additional Information</h2>
                            <form>
                                <label><input type="checkbox" checked={additionalInfo.kids} onChange={(e) => setAdditionalInfo({ ...additionalInfo, kids: e.target.checked })} /> Kids?</label>
                                <label><input type="checkbox" checked={additionalInfo.cats} onChange={(e) => setAdditionalInfo({ ...additionalInfo, cats: e.target.checked })} /> Cats?</label>
                                <label><input type="checkbox" checked={additionalInfo.dogs} onChange={(e) => setAdditionalInfo({ ...additionalInfo, dogs: e.target.checked })} /> Dogs?</label>
                                <label><input type="checkbox" checked={additionalInfo.otherPets} onChange={(e) => setAdditionalInfo({ ...additionalInfo, otherPets: e.target.checked })} /> Other pets?</label>
                            </form>
                        </div>
                    )}
                </div>

                <div className="btns-wrap">
                    {currentStep > 1 && <Button onClick={handleBack}>Back</Button>}
                    <Button onClick={handleNext}>{currentStep === 3 ? "Complete" : "Next"}</Button>
                </div>
            </div>
        </Layout>
    );
};

export default AccountCreation;
