// 🟢 Register Authority
export const registerAuthority = async (req, res) => {
    try {
      console.log("Authority registration successful");
      res.status(201).json({ message: "Authority registration successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // 🔵 Login Authority
  export const loginAuthority = async (req, res) => {
    try {
      console.log("Authority login successful");
      res.status(200).json({ message: "Authority login successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // 🟠 Get Authority Profile
  export const getAuthorityProfile = async (req, res) => {
    try {
      console.log("Authority profile fetched successfully");
      res.status(200).json({ message: "Authority profile fetched successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  