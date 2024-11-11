// // // Login Page
// // import React from 'react'

// // const LoginPage = () => {
// //   return (
// //     <div>LoginPage</div>
// //   )
// // }

// // export default LoginPage

// import React, { useState } from 'react';
// // import 'boxicons/css/boxicons.min.css';
// import '/public/stylesheet/style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

// const LoginSignin = () => {
//     const [isRegister, setIsRegister] = useState(false);

//     const toggleForm = () => {
//         console.log("Toggle Form Clicked!");
//         setIsRegister((prev) => !prev);
//     };

//     return (
//         <div id="login-signin-page" className={`wrapper ${isRegister ? 'active' : ''}`}>

//             <span className="bg-animate"></span>
//             <span className="bg-animate2"></span>

//             <div className={`form-box login ${isRegister ? 'hidden' : ''}`}>
//                 <h2 className="animation" style={{ '--time': 0, '--reverse-time': 21 }}>LOGIN</h2>
//                 <form>
//                     <div className="input-box animation" style={{ '--time': 1, '--reverse-time': 22 }}>
//                         <input type="text" required />
//                         <label>USERNAME</label>
//                         <i><FontAwesomeIcon icon={faUser} /></i>
//                         {/* <box-icon type='solid' name='envelope'></box-icon> */}
//                     </div>
//                     <div className="input-box animation" style={{ '--time': 2, '--reverse-time': 23 }}>
//                         <input type="password" required />
//                         <label>PASSWORD</label>
//                         {/* <box-icon name='lock-alt' type='solid'></box-icon> */}
//                         <i><FontAwesomeIcon icon={faLock} /></i>
//                     </div>
//                     <button type="submit" className="btn animation" style={{ '--time': 3, '--reverse-time': 24 }}>LOGIN</button>
//                     <div className="logreg-link animation" style={{ '--time': 4, '--reverse-time': 25 }}>
//                         <p>
//                             DON'T HAVE AN ACCOUNT?{' '}
//                             <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }} className="register-link">SIGN UP</a>
//                         </p>
//                     </div>
//                 </form>
//             </div>

//             <div className={`info-text login ${isRegister ? 'hidden' : ''}`}>
//                 <h2 className="animation" style={{ '--time': 0, '--reverse-time': 20 }}>WELCOME BACK!</h2>
//                 <p className="animation" style={{ '--time': 1, '--reverse-time': 21 }}>READY TO MEET YOUR NEXT FURRY FRIEND?</p>
//             </div>

//             <div className={`form-box register ${!isRegister ? 'hidden' : ''}`}>
//                 <h2 className="animation" style={{ '--time': 17, '--reverse-time': 0 }}>SIGN UP</h2>
//                 <form>
//                     <div className="input-box animation" style={{ '--time': 18, '--reverse-time': 1 }}>
//                         <input type="text" required />
//                         <label>USERNAME</label>
//                         {/* <box-icon name='user' type='solid'></box-icon> */}
//                         <i><FontAwesomeIcon icon={faUser} /></i>
//                     </div>
//                     <div className="input-box animation" style={{ '--time': 19, '--reverse-time': 2 }}>
//                         <input type="email" required />
//                         <label>EMAIL</label>
//                         {/* <box-icon type='solid' name='envelope'></box-icon> */}
//                         <i><FontAwesomeIcon icon={faEnvelope} /></i>
//                     </div>
//                     <div className="input-box animation" style={{ '--time': 20, '--reverse-time': 3 }}>
//                         <input type="password" required />
//                         <label>PASSWORD</label>
//                         {/* <box-icon name='lock-alt' type='solid'></box-icon> */}
//                         <i><FontAwesomeIcon icon={faLock} /></i>
//                     </div>
//                     <button type="submit" className="btn animation" style={{ '--time': 21, '--reverse-time': 4 }}>SIGN UP</button>
//                     <div className="logreg-link animation" style={{ '--time': 22, '--reverse-time': 5 }}>
//                         <p>
//                             ALREADY HAVE AN ACCOUNT?{' '}
//                             <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }} className="login-link">LOGIN</a>
//                         </p>
//                     </div>
//                 </form>
//             </div>

//             <div className={`info-text register ${!isRegister ? 'hidden' : ''}`}>
//                 <h2 className="animation" style={{ '--time': 17, '--reverse-time': 0 }}>HELLO!</h2>
//                 <p className="animation" style={{ '--time': 18, '--reverse-time': 1 }}>JOIN US AND START FINDING YOUR PURRRFECT PET!</p>
//             </div>
//         </div>
//     );
// };

// export default LoginSignin;

