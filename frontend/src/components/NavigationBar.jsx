import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pawPrintLogo from '../assets/pawPrintLogo.png';

const NavBar = () => {
    // state to control the visibility of the FAQ dropdown
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // state to manage which link is being hovered over
    const [hoveredLink, setHoveredLink] = useState(null);

    // show dropdown if 'FAQ' link is hovered
    const handleMouseEnter = (linkName) => {
        setHoveredLink(linkName);
        if (linkName === 'FAQ') setDropdownVisible(true);
    };

    // hide dropdown and reset hover state when mouse leaves
    const handleMouseLeave = (linkName) => {
        setHoveredLink(null);
        if (linkName === 'FAQ') setDropdownVisible(false);
    };

    return (
        <nav style={styles.nav}>
            {/* Left side of the nav bar with logo and home link */}
            <div style={styles.navLeft}>
                {/* Logo that links to the home page */}
                <Link to="/" style={styles.logoLink}>
                    <img src={pawPrintLogo} alt="Paw Print Logo" style={styles.logo} />
                </Link>
                {/* Home link */}
                <Link
                    to="/"
                    style={{
                        ...styles.navLink,
                        ...(hoveredLink === 'HOME' ? styles.navLinkHover : {})
                    }}
                    onMouseEnter={() => handleMouseEnter('HOME')}
                    onMouseLeave={() => handleMouseLeave('HOME')}
                >
                    HOME
                </Link>
            </div>
            {/* Right side of the nav bar with other links */}
            <ul style={styles.navRight}>
                {/* Adopt link */}
                <li style={styles.navItem}>
                    <Link
                        to="/adoption"
                        style={{
                            ...styles.navLink,
                            ...(hoveredLink === 'ADOPT' ? styles.navLinkHover : {})
                        }}
                        onMouseEnter={() => handleMouseEnter('ADOPT')}
                        onMouseLeave={() => handleMouseLeave('ADOPT')}
                    >
                        ADOPT
                    </Link>
                </li>
                {/* FAQ link with dropdown menu */}
                <li
                    style={styles.navItem}
                    onMouseEnter={() => handleMouseEnter('FAQ')}
                    onMouseLeave={() => handleMouseLeave('FAQ')}
                >
                    <Link
                        to="#"
                        style={{
                            ...styles.navLink,
                            ...(hoveredLink === 'FAQ' ? styles.navLinkHover : {})
                        }}
                    >
                        FAQ
                    </Link>
                    {dropdownVisible && (
                        <div style={styles.dropdown}>
                            {/* Dropdown link for adopters */}
                            <Link
                                to="/more_info_adopters"
                                style={{
                                    ...styles.dropdownLink,
                                    ...(hoveredLink === 'INFO_ADOPTERS' ? styles.dropdownLinkHover : {})
                                }}
                                onMouseEnter={() => setHoveredLink('INFO_ADOPTERS')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                MORE INFO FOR ADOPTERS
                            </Link>
                            {/* Dropdown link for shelters */}
                            <Link
                                to="/more_info_shelters"
                                style={{
                                    ...styles.dropdownLink,
                                    ...(hoveredLink === 'INFO_SHELTERS' ? styles.dropdownLinkHover : {})
                                }}
                                onMouseEnter={() => setHoveredLink('INFO_SHELTERS')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                MORE INFO FOR SHELTERS
                            </Link>
                        </div>
                    )}
                </li>
                {/* About Us link */}
                <li style={styles.navItem}>
                    <Link
                        to="/about"
                        style={{
                            ...styles.navLink,
                            ...(hoveredLink === 'ABOUT' ? styles.navLinkHover : {})
                        }}
                        onMouseEnter={() => handleMouseEnter('ABOUT')}
                        onMouseLeave={() => handleMouseLeave('ABOUT')}
                    >
                        ABOUT US
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

// Styling for the navigation bar and its elements
const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0E9EB',
        color: '#fff',
        padding: '0.5rem 1rem',
        width: '100vw',
        position: 'fixed', // Sticks to the top of the page
        top: '200px',
        left: '0',
        zIndex: '999',
        borderBottom: '4px solid black',
        height: '2rem',
    },
    navLeft: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.4rem'
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '0.5rem',
    },
    logo: {
        width: '1.0rem',
        height: '1.0rem',
    },
    navRight: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        marginTop: '0.4rem'
    },
    navItem: {
        position: 'relative',
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.0rem',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#6F94F1', // Hover color for main links
    },
    dropdown: {
        position: 'absolute', // Position dropdown below the FAQ link
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#E0E9EB',
        border: '4px solid black',
        width: '200px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '999',
    },
    dropdownLink: {
        display: 'block',
        padding: '0.5rem 1rem',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.2rem',
        borderBottom: '1px solid #ccc',
    },
    dropdownLinkHover: {
        backgroundColor: '#6F94F1', // Hover color for dropdown links
    },
};

export default NavBar;
