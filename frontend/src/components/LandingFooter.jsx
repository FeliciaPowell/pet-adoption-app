import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.topStripe}></div>
            <p style={styles.footerText}>NEED MORE INFO?</p>
            <div style={styles.buttonContainer}>
                <Link to="/more_info_shelters" style={styles.infoButton}>I RUN A SHELTER</Link>
                <Link to="/more_info_adopters" style={styles.infoButton}>I'M LOOKING FOR A PET</Link>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#E0E9EB',
        height: '130px',
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
    footerText: {
        color: 'black',
        zIndex: '3',
        position: 'fixed',
        backgroundColor: '#E0E9EB',
        textAlign: 'center',
        fontSize: '1.3rem',
        marginBottom: '40px'
    },
    topStripe: {
        backgroundColor: 'black',
        height: '4px',
        width: '100%',
        position: 'absolute',
        top: '0'
    },
    buttonContainer: {
        display: 'flex',
        gap: '30px',
        marginTop: '40px',
    },
    infoButton: {
        backgroundColor: 'black',
        color: '#E0E9EB',
        width: '250px',
        height: '40px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        fontFamily: '"Hammersmith One", sans-serif',
        fontSize: '1rem',
        margin: '0',
    }
};

export default Footer;
