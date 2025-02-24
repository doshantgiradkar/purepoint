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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-green-50 to-gray-100 p-6">
      {/* Profile Card */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl font-sans border border-gray-100">
        <div className="flex items-center gap-6">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-green-500 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.abbHwUGf7cWF1KrClYxa5AHaHa%26pid%3DApi&f=1&ipt=05d0cb4c116a13033992c1cb7c061662b8bd57b9d614cd6713782a9c8fcaa76f&ipo=images"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-green-500 shadow-md transition-all duration-300 group-hover:scale-105 object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md cursor-pointer">
              +
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 hover:text-green-500 transition-colors">Your Name</h2>
            <p className="text-gray-500 text-sm">@your_username</p>
            <p className="text-gray-600 mt-2 text-sm">Passionate about solving waste management issues 🌱</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-6 mb-6 py-3 border-y border-gray-100">
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">5</p>
            <p className="text-xs text-gray-500">Registered</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">5</p>
            <p className="text-xs text-gray-500">Resolved</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">100%</p>
            <p className="text-xs text-gray-500">Success Rate</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveSection(activeSection === "register" ? null : "register")}
            className={`flex-1 py-3 text-center text-sm font-medium transition-all relative ${
              activeSection === "register" ? "text-green-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Registered Complaints
            {activeSection === "register" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                initial={false}
              />
            )}
          </button>

          <button
            onClick={() => setActiveSection(activeSection === "resolved" ? null : "resolved")}
            className={`flex-1 py-3 text-center text-sm font-medium transition-all relative ${
              activeSection === "resolved" ? "text-green-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Resolved Complaints
            {activeSection === "resolved" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                initial={false}
              />
            )}
          </button>
        </div>
      </div>

      {/* Complaints List */}
      <div className="w-full max-w-md mt-4 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeSection === "register" && (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {registeredComplaints.map((complaint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                      {complaint.slice(0, 1)}
                    </div>
                    <div className="flex-1 text-sm text-gray-700">{complaint.slice(2)}</div>
                    <div className="text-xs text-gray-400">3d ago</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                <button className="w-full py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors shadow-sm">
                  + Register New Complaint
                </button>
              </div>
            </motion.div>
          )}

          {activeSection === "resolved" && (
            <motion.div
              key="resolved"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {resolvedComplaints.map((complaint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1 text-sm text-gray-700">{complaint.slice(2)}</div>
                    <div className="text-xs text-gray-400">5d ago</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                <p className="text-center text-xs text-gray-500">All complaints have been resolved 🎉</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;