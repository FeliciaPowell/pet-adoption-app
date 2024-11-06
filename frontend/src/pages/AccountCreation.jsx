import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
import '/public/stylesheet/style.css';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const LoginSignin = () => {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        console.log("Toggle Form Clicked!");
        setIsRegister((prev) => !prev);
    };

    return (
        <div id="login-signin-page" className={`wrapper ${isRegister ? 'active' : ''}`}>

            <span className="bg-animate"></span>
            <span className="bg-animate2"></span>

            <div className={`form-box login ${isRegister ? 'hidden' : ''}`}>
                <h2 className="animation" style={{ '--time': 0, '--reverse-time': 21 }}>LOGIN</h2>
                <form>
                    <div className="input-box animation" style={{ '--time': 1, '--reverse-time': 22 }}>
                        <input type="email" required />
                        <label>Email</label>
                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                        {/* <box-icon type='solid' name='envelope'></box-icon> */}
                    </div>
                    <div className="input-box animation" style={{ '--time': 2, '--reverse-time': 23 }}>
                        <input type="password" required />
                        <label>Password</label>
                        {/* <box-icon name='lock-alt' type='solid'></box-icon> */}
                        <i><FontAwesomeIcon icon={faLock} /></i>
                    </div>
                    <button type="submit" className="btn animation" style={{ '--time': 3, '--reverse-time': 24 }}>Login</button>
                    <div className="logreg-link animation" style={{ '--time': 4, '--reverse-time': 25 }}>
                        <p>
                            Don’t have an account?{' '}
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }} className="register-link">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={`info-text login ${isRegister ? 'hidden' : ''}`}>
                <h2 className="animation" style={{ '--time': 0, '--reverse-time': 20 }}>Welcome Back!</h2>
                <p className="animation" style={{ '--time': 1, '--reverse-time': 21 }}>Ready to meet your next furry friend?</p>
            </div>

            <div className={`form-box register ${!isRegister ? 'hidden' : ''}`}>
                <h2 className="animation" style={{ '--time': 17, '--reverse-time': 0 }}>Sign Up</h2>
                <form>
                    <div className="input-box animation" style={{ '--time': 18, '--reverse-time': 1 }}>
                        <input type="text" required />
                        <label>Full Name</label>
                        {/* <box-icon name='user' type='solid'></box-icon> */}
                        <i><FontAwesomeIcon icon={faUser} /></i>
                    </div>
                    <div className="input-box animation" style={{ '--time': 19, '--reverse-time': 2 }}>
                        <input type="email" required />
                        <label>Email</label>
                        {/* <box-icon type='solid' name='envelope'></box-icon> */}
                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    </div>
                    <div className="input-box animation" style={{ '--time': 20, '--reverse-time': 3 }}>
                        <input type="password" required />
                        <label>Password</label>
                        {/* <box-icon name='lock-alt' type='solid'></box-icon> */}
                        <i><FontAwesomeIcon icon={faLock} /></i>
                    </div>
                    <button type="submit" className="btn animation" style={{ '--time': 21, '--reverse-time': 4 }}>Sign Up</button>
                    <div className="logreg-link animation" style={{ '--time': 22, '--reverse-time': 5 }}>
                        <p>
                            Already have an account?{' '}
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }} className="login-link">Login</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={`info-text register ${!isRegister ? 'hidden' : ''}`}>
                <h2 className="animation" style={{ '--time': 17, '--reverse-time': 0 }}>Hello!</h2>
                <p className="animation" style={{ '--time': 18, '--reverse-time': 1 }}>Join us and start your journey to finding your purrrfect pet!</p>
            </div>
        </div>
    );
};

export default LoginSignin;
