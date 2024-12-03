import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [login, setLogin] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLogin(true);
    }
    else {
      setLogin(false);
    }
  }, [])

  return (
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logoLink}>
            <img src={logo} alt="Purrrfect Match Logo" style={styles.logo} />
          </Link>
        </div>
        {/* Logged in */}
        {login &&  <Link to="/person" style={styles.loginLink}>
          <button style={styles.loginButton}>ACCOUNT</button>
        </Link>}
        {/* Logged in on person page, to log out */}
        {login && location.pathname == '/person' && <Link to="/" style={styles.loginLink}>
          <button onClick={localStorage.setItem('user', '')} style={styles.loginButton}>LOGOUT</button>
        </Link>}
        {/* Not logged in */}
        {!login &&  <Link to="/login" style={styles.loginLink}>
          <button style={styles.loginButton}>LOGIN</button>
        </Link>}
        <div style={styles.bottomStripe}></div>
      </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#E0E9EB',
    height: '200px',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  logoContainer: {
    position: 'fixed',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: '10px',
    height: '250px',
  },
  loginButton: {
    position: 'absolute',
    top: '10px',
    right: '5px',
    backgroundColor: 'black',
    color: '#E0E9EB',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: '"Hammersmith One", sans-serif',
  },
  bottomStripe: {
    backgroundColor: 'black',
    height: '4px',
    width: '100%',
    position: 'absolute',
    top: '200px',
    left: '0',
  },
};

export default Header;