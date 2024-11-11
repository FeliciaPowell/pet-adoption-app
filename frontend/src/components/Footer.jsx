import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.topStripe}></div>
            <a href="/" style={styles.logoLink}>
                <img src={logo} alt="Company Logo" style={styles.logo} />
            </a>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#E0E9EB',
        height: '120px',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '20px',
    },
    logoLink: {
        textDecoration: 'none'
    },
    logo: {
        marginTop: '40px',
        zIndex: '3',
        height: '150px'
    },
    topStripe: {
        backgroundColor: 'black',
        height: '4px',
        width: '100%',
        position: 'absolute',
        top: '0'
    }
};

export default Footer;
