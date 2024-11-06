import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Purrrfect Match Logo" style={styles.logo} />
        </div>
        <button style={styles.loginButton}>LOGIN</button>
        <div style={topStripe}></div>
        <div style={bottomStripe}></div>
      </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#E0E9EB',
    height: '30vh',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
  },
  loginButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: '"Hammersmith One", sans-serif',
  },
  logo: {
    height: '30vh',
  },
  stripe: {
    backgroundColor: 'black',
    height: '4px',
    width: '100%',
    position: 'absolute',
  },
};

const bottomStripe = {
...styles.stripe,
      top: '30vh',
}

const topStripe = {
  ...styles.stripe,
  top: '27vh',
}
export default Header;
