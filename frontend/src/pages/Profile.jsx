import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const [activeSection, setActiveSection] = useState(null);

  const registeredComplaints = [
    "🗑 Overflowing Garbage in Green Park",
    "🌊 Illegal Dumping Near River",
    "🚛 Garbage Collection Delayed in Downtown",
    "🏭 Factory Dumping Waste in Lake",
    "🚮 Street Littering Near Mall",
  ];

  const resolvedComplaints = [
    "✔ Garbage Cleared from Green Park",
    "✔ Illegal Dumping Stopped at River",
    "✔ Garbage Collection Resumed in Downtown",
    "✔ Waste Segregation Awareness Program Done",
    "✔ Recycling Bins Installed in Market",
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
      {/* Centered Top Section */}
      <div className="relative w-full max-w-md p-8 bg-white rounded-2xl shadow-lg font-poppins text-center flex flex-col items-center">
        
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute inset-0 w-36 h-36 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.abbHwUGf7cWF1KrClYxa5AHaHa%26pid%3DApi&f=1&ipt=05d0cb4c116a13033992c1cb7c061662b8bd57b9d614cd6713782a9c8fcaa76f&ipo=images"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* User Info */}
        <div className="pt-6">
          <h2 className="text-2xl font-bold text-gray-900 hover:text-green-500">Your Name</h2>
          <p className="text-gray-500 text-sm">@your_username</p>
          <p className="text-gray-600 mt-3 text-base px-4">Passionate about solving waste management issues 🚀</p>
        </div>

        {/* Buttons - Centered */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setActiveSection(activeSection === "register" ? null : "register")}
            className={`px-5 py-2 rounded-lg shadow-md transition-all duration-300 ${
              activeSection === "register"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            Register Complaint
          </button>

          <button
            onClick={() => setActiveSection(activeSection === "resolved" ? null : "resolved")}
            className={`px-5 py-2 rounded-lg shadow-md transition-all duration-300 ${
              activeSection === "resolved"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            Resolved Complaints
          </button>
        </div>
      </div>

      {/* Changing Bottom Section (Appears Below on Click) */}
      <div className="relative w-full max-w-md mt-6">
        <AnimatePresence>
          {activeSection === "register" && (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">📌 Registered Complaints</h3>
              <div className="space-y-2">
                {registeredComplaints.map((complaint, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-green-100 transition-all duration-300"
                  >
                    {complaint}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "resolved" && (
            <motion.div
              key="resolved"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">✅ Resolved Complaints</h3>
              <div className="space-y-2">
                {resolvedComplaints.map((complaint, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-green-100 transition-all duration-300"
                  >
                    {complaint}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;
