import React, { useEffect } from 'react';
import Layout from "../components/Layout.jsx";
import H1 from "../components/H1.jsx";
import TextBox from "../components/TextBox.jsx";

const MoreInfoAdopters = () => {
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
            <div style={styles.container}>
                <div style={styles.headingContainer}>
                    <H1>THINKING ABOUT ADOPTING?</H1>
                </div>
                <TextBox>
                    <div>
                        <p style={styles.question}>WHAT SHOULD I CONSIDER BEFORE ADOPTING A PET?</p>
                        <p style={styles.answer}>
                            ADOPTING A PET IS A LONG-TERM COMMITMENT THAT REQUIRES TIME, RESOURCES, AND LOVE. CONSIDER YOUR
                            LIFESTYLE, FINANCIAL READINESS, AND ABILITY TO PROVIDE A STABLE ENVIRONMENT.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT IS THE ADOPTION PROCESS LIKE?</p>
                        <p style={styles.answer}>
                            OUR ADOPTION PROCESS INCLUDES AN APPLICATION, A BRIEF INTERVIEW, AND A MEET-AND-GREET WITH THE
                            PET. WE AIM TO FIND THE BEST MATCH FOR YOU AND THE ANIMAL.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>ARE THERE ANY FEES INVOLVED IN THE ADOPTION?</p>
                        <p style={styles.answer}>
                            YES, THERE IS AN ADOPTION FEE THAT HELPS COVER THE PET'S VACCINATIONS, MICROCHIPPING, AND
                            OTHER ESSENTIAL CARE.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT KIND OF SUPPORT CAN I EXPECT AFTER ADOPTION?</p>
                        <p style={styles.answer}>
                            WE PROVIDE RESOURCES FOR PET CARE, TRAINING, AND HEALTH. OUR TEAM IS AVAILABLE TO HELP WITH
                            ANY QUESTIONS OR ISSUES YOU MIGHT HAVE.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>HOW DO I PREPARE MY HOME FOR A NEW PET?</p>
                        <p style={styles.answer}>
                            ENSURE YOU HAVE FOOD, WATER BOWLS, A BED, AND TOYS READY. PET-PROOF YOUR HOME BY REMOVING
                            HAZARDS LIKE TOXIC PLANTS, SMALL OBJECTS, AND ACCESSIBLE CORDS.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>CAN I ADOPT IF I LIVE IN AN APARTMENT?</p>
                        <p style={styles.answer}>
                            ABSOLUTELY! MANY PETS ARE WELL-SUITED FOR APARTMENT LIVING. MAKE SURE THE PET'S EXERCISE
                            AND MENTAL STIMULATION NEEDS ALIGN WITH YOUR LIVING SPACE.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>WHAT IF THE PET DOESN’T ADJUST TO MY HOME?</p>
                        <p style={styles.answer}>
                            ADJUSTMENT PERIODS CAN TAKE TIME. WE PROVIDE POST-ADOPTION SUPPORT AND GUIDANCE TO HELP.
                            IN RARE CASES, RETURNS CAN BE DISCUSSED.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>CAN I MEET THE PET BEFORE ADOPTING?</p>
                        <p style={styles.answer}>
                            YES, WE ENCOURAGE YOU TO MEET THE PET IN A COMFORTABLE ENVIRONMENT TO ENSURE COMPATIBILITY
                            BEFORE FINALIZING THE ADOPTION.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>ARE PETS ADOPTED FROM SHELTERS HEALTHY?</p>
                        <p style={styles.answer}>
                            YES, ALL PETS ARE THOROUGHLY VETTED, VACCINATED, AND SPAYED/NEUTERED AS NEEDED BEFORE BEING
                            ADOPTED OUT.
                        </p>
                    </div>
                    <div>
                        <p style={styles.question}>CAN I ADOPT A SPECIFIC BREED?</p>
                        <p style={styles.answer}>
                            WHILE SHELTERS PRIMARILY FOCUS ON RESCUING PETS, SPECIFIC BREEDS CAN OCCASIONALLY BE AVAILABLE.
                            YOU CAN ALSO INQUIRE ABOUT BREED-SPECIFIC RESCUES.
                        </p>
                    </div>
                </TextBox>
            </div>
        </Layout>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 120px)', // Subtract footer height from viewport height
        overflowY: 'auto', // Enable scrolling for overflow
        marginTop: '50px',
    },
    headingContainer: {
        marginTop: '-100px', // Adjust positioning of the heading
    },
    question: {
        fontWeight: 'bold', // Bold font for questions
        fontSize: '18px', // Slightly larger font size
        color: '#000', // Black color for questions
        marginTop: '15px',
        textTransform: 'uppercase', // Convert to uppercase
    },
    answer: {
        fontWeight: 'normal', // Normal font for answers
        fontSize: '16px', // Slightly smaller font size
        color: '#7F8C8D', // Grayish color for answers
        marginLeft: '15px', // Slight indent
        marginBottom: '15px',
        lineHeight: '1.6',
        textTransform: 'uppercase', // Convert to uppercase
    },
};

export default MoreInfoAdopters;
