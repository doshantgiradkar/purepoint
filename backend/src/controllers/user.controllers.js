// 🟢 Register User
export const registerUser = async (req, res) => {
    try {
      console.log("User registration successful");
      res.status(201).json({ message: "User registration successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // 🔵 Login User
  export const loginUser = async (req, res) => {
    try {
      console.log("User login successful");
      res.status(200).json({ message: "User login successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // 🟠 Get User Profile
  export const getUserProfile = async (req, res) => {
    try {
      console.log("User profile fetched successfully");
      res.status(200).json({ message: "User profile fetched successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  