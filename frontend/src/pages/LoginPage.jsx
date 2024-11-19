import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button";

const LoginSignin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const mode = params.get("mode");
        setIsRegister(mode === "register");
    }, [location.search]);

    return (
        <Layout footerType="default">
            <div id="login-signin-page" className={`wrapper ${isRegister ? 'active' : ''}`}>
                <span className="bg-animate"></span>
                <span className="bg-animate2"></span>

                {/* Login Form */}
                <div className={`form-box login ${isRegister ? 'hidden' : ''}`}>
                    <h2 className="animation" style={{ '--time': 0, '--reverse-time': 21 }}>LOGIN</h2>
                    <form>
                        <div className="input-box animation" style={{ '--time': 1, '--reverse-time': 22 }}>
                            <input type="text" required />
                            <label>USERNAME</label>
                            <i><FontAwesomeIcon icon={faUser} /></i>
                        </div>
                        <div className="input-box animation" style={{ '--time': 2, '--reverse-time': 23 }}>
                            <input type="password" required />
                            <label>PASSWORD</label>
                            <i><FontAwesomeIcon icon={faLock} /></i>
                        </div>
                        <Button className="btn animation" style={{ '--time': 3, '--reverse-time': 24, marginTop: '20px' }}>
                            LOGIN
                        </Button>
                        <div className="logreg-link animation" style={{ '--time': 4, '--reverse-time': 25 }}>
                            <p>
                                DON'T HAVE AN ACCOUNT?{' '}
                                <Link to="/login?mode=register" className="register-link">SIGN UP</Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Info Text for Login */}
                <div className={`info-text login ${isRegister ? 'hidden' : ''}`}>
                    <h2 className="animation" style={{ '--time': 0, '--reverse-time': 20 }}>WELCOME BACK!</h2>
                    <p className="animation" style={{ '--time': 1, '--reverse-time': 21 }}>READY TO MEET YOUR NEXT FURRY FRIEND?</p>
                </div>

                {/* Register Form */}
                <div className={`form-box register ${!isRegister ? 'hidden' : ''}`}>
                    <h2 className="animation" style={{ '--time': 17, '--reverse-time': 0 }}>SIGN UP</h2>
                    <form>
                        <div className="input-box animation" style={{ '--time': 18, '--reverse-time': 1 }}>
                            <input type="text" required />
                            <label>USERNAME</label>
                            <i><FontAwesomeIcon icon={faUser} /></i>
                        </div>
                        <div className="input-box animation" style={{ '--time': 19, '--reverse-time': 2 }}>
                            <input type="email" required />
                            <label>EMAIL</label>
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                        </div>
                        <div className="input-box animation" style={{ '--time': 20, '--reverse-time': 3 }}>
                            <input type="password" required />
                            <label>PASSWORD</label>
                            <i><FontAwesomeIcon icon={faLock} /></i>
                        </div>
                        <Link to="/account">
                            <Button className="btn animation" style={{ '--time': 21, '--reverse-time': 4, marginTop: '20px' }}>
                                SIGN UP
                            </Button>
                        </Link>
                        <div className="logreg-link animation" style={{ '--time': 22, '--reverse-time': 5 }}>
                            <p>
                                ALREADY HAVE AN ACCOUNT?{' '}
                                <Link to="/login?mode=login" className="login-link">LOGIN</Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Info Text for Register */}
                <div className={`info-text register ${!isRegister ? 'hidden' : ''}`}>
                    <h2 className="animation" style={{ '--time': 17, '--reverse-time': 0 }}>HELLO!</h2>
                    <p className="animation" style={{ '--time': 18, '--reverse-time': 1 }}>JOIN US AND START FINDING YOUR PURRRFECT PET!</p>
                </div>
            </div>
        </Layout>
    );
};

export default LoginSignin;