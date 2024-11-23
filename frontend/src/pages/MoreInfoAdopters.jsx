// Person Profile
import React from 'react'
import Layout from "../components/Layout.jsx";
import H1 from "../components/H1.jsx";
const MoreInfoAdopters = () => {
    return (
        <Layout footerType="default">
            <div style={styles.headingContainer}>
                <H1>THINKING ABOUT ADOPTING?</H1>
            </div>
            <div style={styles.textBox}>
                <div>
                    <p style={styles.question}>What should I consider before adopting a pet?</p>
                    <p style={styles.answer}>
                        Adopting a pet is a long-term commitment that requires time, resources, and love. Consider your
                        lifestyle, financial readiness, and ability to provide a stable environment.
                    </p>
                </div>
                <div>
                    <p style={styles.question}>What is the adoption process like?</p>
                    <p style={styles.answer}>
                        Our adoption process includes an application, a brief interview, and a meet-and-greet with the
                        pet. We aim to find the best match for you and the animal.
                    </p>
                </div>
                <div>
                    <p style={styles.question}>Are there any fees involved in the adoption?</p>
                    <p style={styles.answer}>
                        Yes, there is an adoption fee that helps cover the pet's vaccinations, microchipping, and
                        other essential care.
                    </p>
                </div>
                <div>
                    <p style={styles.question}>What kind of support can I expect after adoption?</p>
                    <p style={styles.answer}>
                        We provide resources for pet care, training, and health. Our team is available to help with
                        any questions or issues you might have.
                    </p>
                </div>
            </div>
        </Layout>
    );
};


const styles = {
    headingContainer: {
        marginTop: '10px', // Adjust this value to move the heading up
        textAlign: 'center',
    },
    textBox: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px', // Space between the heading and text box
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6',
    },
    question: {
        fontWeight: 'bold',
        marginTop: '15px',
    },
    answer: {
        marginLeft: '10px',
        marginBottom: '10px',
    },
};

export default MoreInfoAdopters