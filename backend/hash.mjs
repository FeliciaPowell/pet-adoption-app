import bcrypt from "bcrypt";

const createHash = async (userPassword) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(userPassword, salt);

    return hash; // Return hashed password
  } catch (error) {
    console.error("Error generating hash:", error);
    throw error;
  }
};

const checkHash = async (userPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(userPassword, hashedPassword);
    if (match) {
      console.log("Passwords match! User authenticated.");
      return true;
    } else {
      console.log("Passwords do not match! Authentication failed.");
      return false;
    }
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error;
  }
};

export { createHash, checkHash };
