import React, { useEffect } from 'react';
import Layout from "../components/Layout.jsx";
import H1 from "../components/H1.jsx";
import TextBox from "../components/TextBox.jsx";

const MoreInfoShelters = () => {
    useEffect(() => {
        // Disable scrolling on the body when this component is mounted
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling on the body when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <Layout footerType="default">
            <div style={styles.page}>
                <div style={styles.heading}>
                    <H1>THINKING OF LISTING YOUR PETS?</H1>
                </div>
                <TextBox>
                    <div>
                        <p style={styles.question}>WHY SHOULD I LIST MY PETS ON THIS PLATFORM?</p>
                        <p style={styles.answer}>
                            OUR PLATFORM CONNECTS SHELTERS WITH A WIDE AUDIENCE OF POTENTIAL ADOPTERS. BY LISTING YOUR PETS,
                            YOU INCREASE THEIR CHANCES OF FINDING LOVING HOMES QUICKLY.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT INFORMATION DO I NEED TO PROVIDE FOR EACH PET?</p>
                        <p style={styles.answer}>
                            YOU’LL NEED TO PROVIDE BASIC DETAILS LIKE THE PET’S NAME, AGE, BREED, HEALTH STATUS, AND
                            A BRIEF DESCRIPTION. PHOTOS OR VIDEOS CAN ALSO HELP ATTRACT POTENTIAL ADOPTERS.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>IS THERE A FEE TO LIST PETS ON THE PLATFORM?</p>
                        <p style={styles.answer}>
                            NO, LISTING PETS IS COMPLETELY FREE FOR SHELTERS. WE AIM TO MAKE THE PROCESS ACCESSIBLE
                            TO HELP AS MANY ANIMALS AS POSSIBLE.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>HOW DO I KEEP MY LISTINGS UP TO DATE?</p>
                        <p style={styles.answer}>
                            OUR PLATFORM ALLOWS YOU TO EASILY MANAGE YOUR LISTINGS. YOU CAN UPDATE DETAILS, ADD NEW PETS,
                            OR MARK PETS AS ADOPTED IN JUST A FEW CLICKS.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT SUPPORT IS AVAILABLE IF I HAVE QUESTIONS?</p>
                        <p style={styles.answer}>
                            WE PROVIDE A DEDICATED SUPPORT TEAM TO ASSIST WITH ANY ISSUES OR QUESTIONS YOU MAY HAVE.
                            WE’RE HERE TO ENSURE YOUR EXPERIENCE IS SMOOTH AND SUCCESSFUL.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>CAN I FEATURE SPECIFIC PETS TO INCREASE VISIBILITY?</p>
                        <p style={styles.answer}>
                            YES, OUR PLATFORM ALLOWS YOU TO HIGHLIGHT CERTAIN PETS FOR INCREASED VISIBILITY,
                            HELPING THEM STAND OUT TO POTENTIAL ADOPTERS.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT KINDS OF SHELTERS CAN USE THIS PLATFORM?</p>
                        <p style={styles.answer}>
                            ANY SHELTER, RESCUE ORGANIZATION, OR FOSTER NETWORK CAN USE OUR PLATFORM.
                            WE WELCOME ALL GROUPS DEDICATED TO ANIMAL WELFARE.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>HOW DO POTENTIAL ADOPTERS CONTACT US?</p>
                        <p style={styles.answer}>
                            ADOPTERS CAN CONTACT YOU DIRECTLY THROUGH THE PLATFORM. WE PROVIDE SECURE MESSAGING
                            AND CONTACT FEATURES TO MAKE COMMUNICATION EASY AND EFFICIENT.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT ARE THE BENEFITS OF JOINING THIS PLATFORM?</p>
                        <p style={styles.answer}>
                            JOINING OUR PLATFORM INCREASES YOUR REACH, SIMPLIFIES THE ADOPTION PROCESS,
                            AND PROVIDES TOOLS TO MANAGE YOUR SHELTER’S NEEDS EFFECTIVELY.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>HOW DO I GET STARTED?</p>
                        <p style={styles.answer}>
                            SIMPLY SIGN UP ON OUR PLATFORM, CREATE YOUR SHELTER’S PROFILE, AND START ADDING PETS TO YOUR LISTINGS.
                            IT’S QUICK AND EASY TO BEGIN!
                        </p>
                    </div>
                </TextBox>
            </div>
        </Layout>
    );
};

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh', // Viewport height
        overflow: 'hidden', // Prevent page scrolling
    },
    heading: {
        flexShrink: 0,
        textAlign: 'center',
        padding: '10px 0',
        marginTop: '50px',
    },
    question: {
        fontWeight: 'bold', // Make questions bold
        fontSize: '18px', // Slightly larger font size for questions
        color: '#000000', // Darker text color for questions
        marginTop: '15px',
        textTransform: 'uppercase', // Convert text to uppercase
    },
    answer: {
        fontWeight: 'normal', // Normal weight for answers
        fontSize: '16px', // Slightly smaller font size for answers
        color: '#7F8C8D', // Lighter text color for answers
        marginLeft: '15px', // Slight indent for answers
        marginBottom: '15px', // Add space after each answer
        lineHeight: '1.6', // Improve readability with line height
        textTransform: 'uppercase', // Convert text to uppercase
    },
};

export default MoreInfoShelters;
