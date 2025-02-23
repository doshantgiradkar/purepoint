import React from 'react'

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl font-poppins text-center">
        
        {/* Profile Image - Positioned in Center with Green Hover Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            {/* Outer Circle */}
            <div className="absolute inset-0 w-36 h-36 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            {/* Profile Image */}
            <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.abbHwUGf7cWF1KrClYxa5AHaHa%26pid%3DApi&f=1&ipt=05d0cb4c116a13033992c1cb7c061662b8bd57b9d614cd6713782a9c8fcaa76f&ipo=images"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Push content down to avoid overlap */}
        <div className="pt-20">
          <h2 className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-green-500">
            Your Name
          </h2>
          <p className="text-gray-500 text-sm">@your_username</p>
          <p className="text-gray-600 mt-3 text-base leading-relaxed px-4">
            Passionate about solving waste management issues 🚀
          </p>
        </div>

        {/* Complaint Register & Resolved Section */}
        <div className="mt-6 flex justify-center gap-6">
          {/* Complaint Register Button */}
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white">
            Register Complaint
          </button>

          {/* Complaints Resolved Button */}
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white">
            Resolved Complaints
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile