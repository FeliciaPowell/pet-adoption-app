import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logoLink}>
            <img src={logo} alt="Purrrfect Match Logo" style={styles.logo} />
          </Link>
        </div>
        <Link to="/account" style={styles.loginLink}>
          <button style={styles.loginButton}>LOGIN</button>
        </Link>
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
    right: '0px',
    backgroundColor: 'black',
    color: 'white',
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
