import { useState, useEffect } from "react";

export default function AccountPage() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    bio: "",
    profilePicture: "",
  });

  useEffect(() => {
    // Fetch user data (replace with your API call)
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePicture: reader.result, // Preview the selected image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Saving user data:", user);

    const formData = new FormData();
    formData.append("fullName", user.fullName);
    formData.append("bio", user.bio);
    if (user.profilePicture) {
      formData.append("profilePicture", user.profilePicture);
    }

    // API call to update user data
    await fetch("/api/user/update", {
      method: "POST",
      body: formData,
    }).catch((err) => console.error("Error updating user:", err));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
      <div className="mt-18 w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Details</h2>

        <div className="flex items-center space-x-4">
          <label className="relative cursor-pointer">
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <img
              src={user.profilePicture || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 hover:opacity-75 transition"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 text-white text-sm font-semibold rounded-full">
              Change
            </div>
          </label>
          <div>
            <h3 className="text-xl font-medium">{user.fullName || 'Your Name'}</h3>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-600">Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Tell something about yourself..."></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
