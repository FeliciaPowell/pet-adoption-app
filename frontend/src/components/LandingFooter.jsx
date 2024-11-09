import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.topStripe}></div>
            <p style={styles.footerText}>Your footer text here</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#E0E9EB',
        height: '20%', // Footer height for spacing
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
        marginTop: '20px',
        zIndex: '3',
        height: '22vh'
    },
    footerText: {
        marginTop: '10px',
        color: 'black',
        zIndex: '3',
        backgroundColor: '#E0E9EB',
        textAlign: 'center',
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
