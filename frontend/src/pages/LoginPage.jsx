import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button";

const LoginSignin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Used for register mode
    const [error, setError] = useState("");

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) =>
        setConfirmPassword(event.target.value);

    // Navigate to AccountCreation with required data
    const goToAccountCreation = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        console.log("Navigating with state:", { email, password, confirmPassword });

        navigate("/account", { state: { email, password, confirmPassword } });
    };


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error message

        try {
            console.log("Logging in with:", { email, password });

            const response = await axios.post("https://lumpy-brass-lemongrass.glitch.me/login", {
                email,
                password,
            });

            if (response.status === 200) {
                console.log("Login successful:", response.data.user);
                localStorage.setItem("user", JSON.stringify(response.data.user)); // Save token for authentication
                navigate("/pets"); // Redirect to /pets upon successful login
            } else {
                setError("Login failed. Please check your email and password.");
            }
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            setError("Login failed. Please try again.");
        }
 
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const mode = params.get("mode");
        setIsRegister(mode === "register");
    }, [location.search]);

    return (
        <Layout footerType="default">
            <div id="login-signin-page" className={`wrapper ${isRegister ? "active" : ""}`}>
                <span className="bg-animate"></span>
                <span className="bg-animate2"></span>

                {/* Info Text for Login */}
                <div className={`info-text login ${isRegister ? "hidden" : ""}`}>
                    <h2 className="animation" style={{ "--time": 0, "--reverse-time": 20 }}>WELCOME BACK!</h2>
                    <p className="animation" style={{ "--time": 1, "--reverse-time": 21 }}>
                        READY TO MEET YOUR NEXT FURRY FRIEND?
                    </p>
                </div>

                {/* Info Text for Register */}
                <div className={`info-text register ${!isRegister ? "hidden" : ""}`}>
                    <h2 className="animation" style={{ "--time": 17, "--reverse-time": 0 }}>HELLO!</h2>
                    <p className="animation" style={{ "--time": 18, "--reverse-time": 1 }}>
                        JOIN US AND START FINDING YOUR PURRRFECT PET!
                    </p>
                </div>

                {/* Login Form */}
                <div className={`form-box login ${isRegister ? "hidden" : ""}`}>
                    <h2 className="animation" style={{ "--time": 0, "--reverse-time": 21 }}>LOGIN</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="input-box animation" style={{ "--time": 1, "--reverse-time": 22 }}>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                autoComplete="email"
                            />
                            <label>EMAIL</label>
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                        </div>
                        <div className="input-box animation" style={{ "--time": 2, "--reverse-time": 23 }}>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                autoComplete="current-password"
                            />
                            <label>PASSWORD</label>
                            <i><FontAwesomeIcon icon={faLock} /></i>
                        </div>
                        <Button
                            className="btn animation"
                            style={{ "--time": 3, "--reverse-time": 24, marginTop: "20px" }}
                            type="submit"
                            disabled={!email || !password} // Disable button if inputs are empty
                        >
                            LOGIN
                        </Button>
                        <div className="logreg-link animation" style={{ "--time": 4, "--reverse-time": 25 }}>
                            <p>
                                DON'T HAVE AN ACCOUNT?{" "}
                                <Link to="/login?mode=register" className="register-link">SIGN UP</Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Register Form */}
                <div className={`form-box register ${!isRegister ? "hidden" : ""}`}>
                    <h2 className="animation" style={{ "--time": 17, "--reverse-time": 0 }}>SIGN UP</h2>
                    <form onSubmit={goToAccountCreation}>
                        <div className="input-box animation" style={{ "--time": 18, "--reverse-time": 1 }}>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                autoComplete="email"
                            />
                            <label>EMAIL</label>
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                        </div>
                        <div className="input-box animation" style={{ "--time": 19, "--reverse-time": 2 }}>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                autoComplete="new-password"
                            />
                            <label>PASSWORD</label>
                            <i><FontAwesomeIcon icon={faLock} /></i>
                        </div>
                        <div className="input-box animation" style={{ "--time": 20, "--reverse-time": 3 }}>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                                autoComplete="new-password"
                            />
                            <label>CONFIRM PASSWORD</label>
                            <i><FontAwesomeIcon icon={faLock} /></i>
                        </div>
                        <Button
                            className="btn animation"
                            style={{ "--time": 21, "--reverse-time": 4, marginTop: "20px" }}
                            type="submit"
                        >
                            SIGN UP
                        </Button>
                        <div className="logreg-link animation" style={{ "--time": 22, "--reverse-time": 5 }}>
                            <p>
                                ALREADY HAVE AN ACCOUNT?{" "}
                                <Link to="/login?mode=login" className="login-link">LOGIN</Link>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </Layout>
    );
};

export default LoginSignin;
