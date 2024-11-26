import Layout from '../components/Layout';
import LandingPageDog from "../assets/landingPageDog.png"
import LandingPageCat from "../assets/landingPageCat.png"
import {Link} from "react-router-dom";
const LandingPage = () => (
    <Layout footerType="default">
        <div style={styles.imageContainer}>
            <img src={LandingPageDog} alt="A Golden Retriever" style = {styles.dogImage} />
            <img src={LandingPageCat} alt="A Striped Cat" style = {styles.catImage} />
        </div>
        <div style={styles.callToAction}>
            <p style={styles.callToActionText}>ARE YOU READY TO MEET YOUR PURRRFECT MATCH?</p>
            <Link to="/login?mode=register" >
                <button style={styles.joinButton}>JOIN NOW</button>
            </Link>
        </div>
    </Layout>
);


const styles = {
    imageContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '5vh',
        marginTop: '10vh',
        position: 'relative',
        height: '400px',
        width: '80vw',

    },
    dogImage: {
        width: 'auto',
        height: '55vh',
        objectFit: 'cover',
        left: 'calc(50% - 150px)',
        marginRight: '-40px'
    },
    catImage: {
        width: 'auto',
        height : '40vh',
        objectFit: 'cover',
        //marginBottom: '-4px',
        right: 'calc(50% - 150px)',
        marginLeft: '-100px',
    },
    callToAction: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E9EB',
        borderRadius: '20px',
        padding: '5px 0px',
        marginTop: '-70px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #000',
        position: 'relative',
        zIndex: 1,
    },
    callToActionText: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
    },
    joinButton: {
        padding: '1px 10px',
        fontSize: '25px',
        fontFamily: "'Modak', cursive",
        backgroundColor: 'black',
        color: '#E0E9EB',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
    },
}
export default LandingPage;
