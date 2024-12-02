import React from 'react';
import Layout from '../components/Layout';
import H1 from '../components/H1';
import TextBox from '../components/TextBox';

const AboutUs = () => (
    <Layout footerType="default">
        <div style={styles.container}>
            <div style={styles.headingContainer}>
                <H1>ABOUT US</H1>
            </div>
            <TextBox>
                <div>
                    <p style={styles.paragraph}>
                        WELCOME TO PURRRFECT MATCH – A PLACE WHERE COMPASSION MEETS TECHNOLOGY. OUR MISSION IS TO CONNECT
                        SHELTERS, RESCUE ORGANIZATIONS, AND PET LOVERS TO CREATE A WORLD WHERE EVERY ANIMAL HAS A CHANCE
                        TO FIND A LOVING HOME. WE BELIEVE THAT EVERY PET DESERVES CARE, SUPPORT, AND A SAFE ENVIRONMENT TO
                        THRIVE.
                    </p>
                    <p style={styles.paragraph}>
                        WE WORK HAND-IN-HAND WITH SHELTERS AND RESCUE GROUPS TO PROVIDE THEM WITH TOOLS TO MANAGE THEIR
                        OPERATIONS EFFECTIVELY. BY MAKING IT EASY TO LIST AVAILABLE PETS AND COMMUNICATE WITH POTENTIAL
                        ADOPTERS, OUR PLATFORM SIMPLIFIES THE ADOPTION PROCESS, MAKING IT FASTER AND MORE TRANSPARENT.
                    </p>
                    <p style={styles.paragraph}>
                        OUR TEAM IS PASSIONATE ABOUT BRINGING PEOPLE AND PETS TOGETHER. FROM THE DESIGN OF OUR PLATFORM TO
                        THE SUPPORT WE OFFER, EVERYTHING WE DO IS DRIVEN BY A LOVE FOR ANIMALS AND THE COMMUNITIES THAT
                        SUPPORT THEM. WHETHER YOU'RE LOOKING TO ADOPT YOUR NEXT BEST FRIEND OR HELP A SHELTER FIND HOMES
                        FOR THEIR PETS, WE'RE HERE TO HELP MAKE THAT CONNECTION.
                    </p>
                    <p style={styles.paragraph}>
                        JOIN US IN OUR JOURNEY TO MAKE PET ADOPTION SIMPLE, ACCESSIBLE, AND IMPACTFUL. TOGETHER, WE CAN
                        CREATE A BETTER FUTURE FOR OUR FURRY FRIENDS AND THE PEOPLE WHO LOVE THEM.
                    </p>
                </div>
            </TextBox>
        </div>
    </Layout>
);

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
    },
    headingContainer: {
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '-100px'
    },
    paragraph: {
        fontSize: '16px',
        color: '#333',
        lineHeight: '1.8',
        marginBottom: '15px',
        textAlign: 'justify',
        textTransform: 'uppercase', // All text in uppercase
    },
};

export default AboutUs;
