// PetForm lives inside of the AddPetProfile.jsx page
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";
import imageCompression from "browser-image-compression";

// PetForm component handles the form submission for adding a new pet with various details.
const PetForm = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petGender, setPetGender] = useState("male");
  const [petColor, setPetColor] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petImage, setPetImage] = useState(null);

  const [petDescription, setPetDescription] = useState("");
  const [petAvailability, setPetAvailability] = useState("now");
  const [petVaccination, setPetVaccination] = useState("current");
  const [petMedicalHistory, setPetMedicalHistory] = useState("");
  const [petLocation, setPetLocation] = useState("");

  const [petSpayNeuter, setPetSpayNeuter] = useState(true); // yes
  const [petOkWithKids, setPetOkWithKids] = useState(true);
  const [petOkWithCats, setPetOkWithCats] = useState(true);
  const [petOkWithDogs, setPetOkWithDogs] = useState(true);
  const [petTemperament, setPetTemperament] = useState(""); // color rating?
  const navigate = useNavigate();
  const api_url = import.meta.env.VITE_API_URL; // instead of process.env.REACT_APP_API_URL

  // profile image compression function to reduce the size of the image before uploading.
  const compressProfileImage = async (image) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };
    try {
      const compressedImage = await imageCompression(image, options);
      return compressedImage;
    } catch (error) {
      console.error("Oops, having issues compressing profile image!", error);
      return Promise.reject(error);
    }
  };

  // Handle profile image selection
  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const compressedImage = await compressProfileImage(file);
      setPetImage(compressedImage);
    }
  };

  // resetForm function resets the form fields to empty strings or defaults.
  const resetForm = () => {
    setPetName("");
    setPetType("");
    setPetBreed("");
    setPetAge("");
    setPetGender("male");
    setPetColor("");
    setPetWeight("");
    setPetImage(null);
    setPetDescription("");
    setPetAvailability("now");
    setPetVaccination("current");
    setPetMedicalHistory("");
    setPetSpayNeuter(true);
    setPetLocation("");
    setPetOkWithKids(true);
    setPetOkWithCats(true);
    setPetOkWithDogs(true);
    setPetTemperament("");
  };

  // handleSubmit function handles the form submission, sends data to the backend, and navigates to the pet profile view.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // use this one!!!!
    const petData = {
      name: petName,
      type: petType,
      breed: petBreed,
      age: petAge,
      gender: petGender,
      color: petColor,
      weight: petWeight,
      image: petImage ? petImage : undefined,

      description: petDescription,
      availability: petAvailability,
      vaccination: petVaccination,
      medicalHistory: petMedicalHistory,
      location: petLocation,
      spayedNeutered: petSpayNeuter,
      kids: petOkWithKids,
      cats: petOkWithCats,
      dogs: petOkWithDogs,
      temperament: petTemperament,
      // shelterID: "1234567890abcdef12345678",
      // Example ID
    };

    const response = await axios
      .post(`${api_url}/pet`, petData, {
        //pets/${petID}?
        headers: {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const pet_id = response.data._id;

        console.log("Form submitted puuurfectly! 😻🐾", response);
        console.log("Pet ID: ", pet_id);
        console.log("Pet Data: ", petData);
        navigate(`${api_url}/pets/${pet_id}`); //_id
        // navigate(`http://localhost:3000/pets/${pet_id}`); // goes to pet profile view
      })
      .catch((error) => {
        console.error(
          "Yelp, There was an error submitting the form! 🐶",
          error
        );
      });
  };

  return (
    <>
      <div className="PetForm">
        <h2>
          <center>Pet Form</center>
        </h2>
        <fieldset>
          <form>
            <label htmlFor="petName" className="petIntake">
              Name:
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Benny"
              className="petIntake"
              required
            />
            <br />

            <label htmlFor="petType" className="petIntake">
              Type:
            </label>
            <select
              id="petType"
              name="petType"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="petIntake"
              required
            >
              <option value="">Select pet type: </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              {/* <option value="rabbit">Rabbit</option>
              <option value="small furry animals">Small Furry Animals</option>
              <option value="fish">Fish</option>
              <option value="bird">Bird</option>
              <option value="reptiles">Reptiles</option> */}
              <option value="other">Other</option>
            </select>
            <br />
            <br />

            <label htmlFor="petBreed" className="petIntake">
              Breed:
            </label>
            <input
              type="text"
              id="petBreed"
              name="petBreed"
              value={petBreed}
              onChange={(e) => setPetBreed(e.target.value)}
              placeholder="North American beaver"
              className="petIntake"
              required
            />
            <br />

            <label htmlFor="petAge" className="petIntake">
              Age:
            </label>
            <input
              type="number"
              id="petAge"
              name="petAge"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              placeholder="3 years"
              className="petIntake"
              required
            />
            <br />
            <br />

            <label htmlFor="petGender" className="petIntake">
              Gender:
            </label>
            <input
              type="radio"
              id="male"
              name="petGender"
              value="male"
              checked={petGender === "male"}
              onChange={(e) => setPetGender(e.target.value)}
              className="petIntake"
              required
            />
            <label htmlFor="male" className="petIntake">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="petGender"
              value="female"
              checked={petGender === "female"}
              onChange={(e) => setPetGender(e.target.value)}
              className="petIntake"
              required
            />
            <label htmlFor="female" className="petIntake">
              Female
            </label>
            <br />
            <br />

            <label htmlFor="petColor" className="petIntake">
              Color:
            </label>
            <input
              type="text"
              id="petColor"
              name="petColor"
              value={petColor}
              onChange={(e) => setPetColor(e.target.value)}
              placeholder="Brown"
              className="petIntake"
              required
            />
            <br />

            <label htmlFor="petWeight" className="petIntake">
              Weight:
            </label>
            <input
              type="number"
              id="petWeight"
              name="petWeight"
              value={petWeight}
              onChange={(e) => setPetWeight(e.target.value)}
              placeholder="30 pounds"
              className="petIntake"
              required
            />
            <br />
            <br />

            <label htmlFor="petImage" className="petIntake">
              {" "}
              Profile Image:
            </label>
            <input
              type="file"
              id="petImage"
              name="petImage"
              accept="image/*"
              // onChange={(e) => setPetImage(e.target.files[0])}
              onChange={handleProfileImageChange}
              className="petIntake"
              required
            />
            <br />

            {/* stretch goal: <label htmlFor="petImages" className="petIntake">
              Images Gallery: (3-4)
            </label>
            <input
              type="file"
              id="petImages"
              name="petImages"
              accept="image/*"
              multiple
              // onChange={(e) => setPetImages([...e.target.files])}
              onChange={handleImagesChange}
              className="petIntake"
              // onChange{(e) => setPetImage(e.target.files[0])}
              //   onChange={(e) => setPetImages(Array.from(e.target.files))}
            /> */}
            <br />
            <br />

            <label htmlFor="petDescription" className="petIntake">
              Description:
            </label>
            <textarea
              id="petDescription"
              name="petDescription"
              value={petDescription}
              onChange={(e) => setPetDescription(e.target.value)}
              placeholder="Benny is a friendly beaver who loves to build dams."
              className="petIntake"
              required
            />
            <br />
            <br />

            <label htmlFor="petMedicalHistory" className="petIntake">
              Medical History:
            </label>
            <textarea
              id="petMedicalHistory"
              name="petMedicalHistory"
              value={petMedicalHistory}
              onChange={(e) => setPetMedicalHistory(e.target.value)}
              placeholder="Benny has no known medical conditions."
              required
              className="petIntake"
            />
            <br />
            <br />

            <label htmlFor="petLocation" className="petIntake">
              Location:
            </label>
            <input
              type="text"
              id="petLocation"
              name="petLocation"
              value={petLocation}
              onChange={(e) => setPetLocation(e.target.value)}
              placeholder="California"
              className="petIntake"
              required
            />
            <br />
            <br />

            <label htmlFor="petAvailability" className="petIntake">
              Availability:
            </label>
            <input
              type="radio"
              id="now"
              name="petAvailability"
              value="now"
              checked={petAvailability === "now"}
              onChange={(e) => setPetAvailability(e.target.value)}
              className="petIntake"
              required
            />
            <label htmlFor="now" className="petIntake">
              Now
            </label>
            <input
              type="radio"
              id="soon"
              name="petAvailability"
              value="soon"
              checked={petAvailability === "soon"}
              onChange={(e) => setPetAvailability(e.target.value)}
              className="petIntake"
              required
            />
            <label htmlFor="soon" className="petIntake">
              Soon
            </label>
            <br />

            <label htmlFor="petVaccination" className="petIntake">
              Vaccination:
            </label>
            <input
              type="radio"
              id="current"
              name="petVaccination"
              value="current"
              checked={petVaccination === "current"}
              onChange={(e) => setPetVaccination(e.target.value)}
              className="petIntake"
              required
            />
            <label htmlFor="current" className="petIntake">
              Current
            </label>
            <input
              type="radio"
              id="pending"
              name="petVaccination"
              value="pending"
              checked={petVaccination === "pending"}
              onChange={(e) => setPetVaccination(e.target.value)}
              required
            />
            <label htmlFor="pending" className="petIntake">
              Pending
            </label>
            <br />
            <br />

            <label htmlFor="petSpayNeuter" className="petIntake">
              Spay/Neutered:
            </label>
            <input
              type="radio"
              id="spayNeuterYes"
              name="petSpayNeuter"
              value="yes"
              checked={petSpayNeuter === true}
              onChange={() => setPetSpayNeuter(true)}
              className="petIntake"
            />
            <label htmlFor="spayNeuterYes" className="petIntake">
              Yes
            </label>

            <input
              type="radio"
              id="spayNeuterNo"
              name="petSpayNeuter"
              value="no"
              checked={petSpayNeuter === false}
              onChange={() => setPetSpayNeuter(false)}
              className="petIntake"
            />
            <label htmlFor="spayNeuterNo" className="petIntake">
              No
            </label>

            <br />

            <label htmlFor="petOkWithKids" className="petIntake">
              Ok with Kids:
            </label>
            <input
              type="radio"
              id="okWithKidsYes"
              name="petOkWithKids"
              value="yes"
              checked={petOkWithKids === true}
              onChange={() => setPetOkWithKids(true)}
              className="petIntake"
            />
            <label htmlFor="okWithKidsYes" className="petIntake">
              Yes
            </label>

            <input
              type="radio"
              id="okWithKidsNo"
              name="petOkWithKids"
              value="no"
              checked={petOkWithKids === false}
              onChange={() => setPetOkWithKids(false)}
              className="petIntake"
            />
            <label htmlFor="okWithKidsNo" className="petIntake">
              No
            </label>
            <br />

            <label htmlFor="petOkWithCats" className="petIntake">
              Ok with Cats:
            </label>
            <input
              type="radio"
              id="okWithCatsYes"
              name="petOkWithCats"
              value="yes"
              checked={petOkWithCats === true}
              onChange={() => setPetOkWithCats(true)}
              className="petIntake"
            />
            <label htmlFor="okWithCatsYes" className="petIntake">
              Yes
            </label>

            <input
              type="radio"
              id="okWithCatsNo"
              name="petOkWithCats"
              value="no"
              checked={petOkWithCats === false}
              onChange={() => setPetOkWithCats(false)}
              className="petIntake"
            />
            <label htmlFor="okWithCatsNo" className="petIntake">
              No
            </label>
            <br />

            <label htmlFor="petOkWithDogs" className="petIntake">
              Ok with Dogs:
            </label>
            <input
              type="radio"
              id="okWithDogsYes"
              name="petOkWithDogs"
              value="yes"
              checked={petOkWithDogs === true}
              onChange={() => setPetOkWithDogs(true)}
              className="petIntake"
            />
            <label htmlFor="okWithDogsYes" className="petIntake">
              Yes
            </label>

            <input
              type="radio"
              id="okWithDogsNo"
              name="petOkWithDogs"
              value="no"
              checked={petOkWithDogs === false}
              onChange={() => setPetOkWithDogs(false)}
              className="petIntake"
            />
            <label htmlFor="okWithDogsNo" className="petIntake">
              No
            </label>
            <br />
            <br />

            <label htmlFor="petTemperament" className="petIntake">
              Temperament:
            </label>
            <input
              type="text"
              id="petTemperament"
              name="petTemperament"
              value={petTemperament}
              onChange={(e) => setPetTemperament(e.target.value)}
              placeholder="Friendly"
              className="petIntake"
              required
            />
            <br />
            <br />

            <button type="submit" onClick={handleSubmit} className="pForm">
              Submit
            </button>

            <button
              type="reset"
              className="pForm"
              onClick={() => {
                resetForm();
              }}
            >
              Reset
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
};

export default PetForm;
