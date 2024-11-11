import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pawPrintLogo from '../assets/pawPrintLogo.png';

const NavBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (linkName) => {
        setHoveredLink(linkName);
        if (linkName === 'FAQ') setDropdownVisible(true);
    };

    const handleMouseLeave = (linkName) => {
        setHoveredLink(null);
        if (linkName === 'FAQ') setDropdownVisible(false);
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.navLeft}>
                <Link to="/" style={styles.logoLink}>
                    <img src={pawPrintLogo} alt="Paw Print Logo" style={styles.logo} />
                </Link>
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
            <ul style={styles.navRight}>
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

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0E9EB',
        color: '#fff',
        padding: '0.5rem 1rem',
        width: '100vw',
        position: 'fixed',
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
        color: '#6F94F1',
    },
    dropdown: {
        position: 'absolute',
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
        backgroundColor: '#6F94F1',
    },
};

export default NavBar;
