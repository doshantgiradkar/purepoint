import { useState, useEffect } from "react";

export default function CompleteAccountAuthority() {
  const [authority, setAuthority] = useState({
    Name: "",
    email: "",
    bio: "",
    profilePicture: "",
    location: { longitude: "", latitude: "" },
  });

  useEffect(() => {
    // Fetch authority data (replace with your API call)
    fetch("/api/authority")
      .then((res) => res.json())
      .then((data) => setAuthority(data))
      .catch((err) => console.error("Error fetching authority data:", err));
  }, []);

  const handleChange = (e) => {
    setAuthority({ ...authority, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (e) => {
    setAuthority({
      ...authority,
      location: { ...authority.location, [e.target.name]: e.target.value },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthority((prevAuthority) => ({
          ...prevAuthority,
          profilePicture: reader.result, // Preview the selected image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Saving authority data:", authority);

    const formData = new FormData();
    formData.append("Name", authority.Name);
    formData.append("bio", authority.bio);
    formData.append("longitude", authority.location.longitude);
    formData.append("latitude", authority.location.latitude);
    if (authority.profilePicture) {
      formData.append("profilePicture", authority.profilePicture);
    }

    // API call to update authority data
    await fetch("/api/authority/update", {
      method: "POST",
      body: formData,
    }).catch((err) => console.error("Error updating authority:", err));
  };

  return (
    <div className="mt-18 w-9/12 max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Authority Account</h2>

      <div className="flex items-center space-x-4">
        <label className="relative cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <img
            src={authority.profilePicture || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 hover:opacity-75 transition"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 text-white text-sm font-semibold rounded-full">
            Change
          </div>
        </label>
        <div>
          <h3 className="text-xl font-medium">{authority.Name || "Your Name"}</h3>
          <p className="text-gray-500">{authority.email}</p>
        </div>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600">Full Name</label>
          <input
            type="text"
            name="Name"
            value={authority.Name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-gray-600">Email (Cannot be changed)</label>
          <input
            type="email"
            name="email"
            value={authority.email}
            readOnly
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-gray-600">Bio</label>
          <textarea
            name="bio"
            value={authority.bio}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Tell something about yourself..."
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Longitude</label>
            <input
              type="number"
              name="longitude"
              value={authority.location.longitude}
              onChange={handleLocationChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter longitude"
            />
          </div>

          <div>
            <label className="block text-gray-600">Latitude</label>
            <input
              type="number"
              name="latitude"
              value={authority.location.latitude}
              onChange={handleLocationChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter latitude"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
