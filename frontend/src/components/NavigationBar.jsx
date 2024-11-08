import React from 'react';
import { Link } from 'react-router-dom';
import pawPrintLogo from '../assets/paw-print-logo.png';

const NavBar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.navLeft}>
                <Link to="/">
                    <img src={pawPrintLogo} alt="Paw Print Logo" style={styles.logo} />
                </Link>
                <Link to="/" style={styles.navLink}>HOME</Link>
            </div>
            <ul style={styles.navRight}>
                <li style={styles.navItem}>
                    <Link to="/adoption" style={styles.navLink}>ADOPT</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>ABOUT US</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/faqs" style={styles.navLink}>FAQ</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between', // Space between left and right
        alignItems: 'center',
        backgroundColor: '#E0E9EB',
        color: '#fff',
        padding: '0.5rem 1.5rem',
        width: '100vw',
        position: 'fixed',
        top: '30vh',
        left: '0',
        zIndex: '999',
        borderBottom: '4px solid black',
        height: '3rem',
    },
    navLeft: {
        display: 'flex',
        flex: '1', // Takes up space on the left
    },
    navRight: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        marginTop: '0.3rem'
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem',
        marginTop: '0.25rem'
    },
    logo: {
        width: '1.5rem', // Adjust logo size
        height: '1.5rem',
        marginRight: '0.5rem', // Adds space between logo and the "HOME" link
        marginTop: '0.5rem'
    },
};

export default NavBar;
