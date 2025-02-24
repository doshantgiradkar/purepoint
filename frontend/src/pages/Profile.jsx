import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trash2,
  Droplet,
  Truck,
  Factory,
  ShoppingBag,
  Check,
  Plus,
  Calendar,
  Clock,
  Award,
  Coins,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('register');

  const getComplaintIcon = (complaint) => {
    if (complaint.includes('Garbage')) return <Trash2 size={16} />;
    if (complaint.includes('Dumping')) return <Droplet size={16} />;
    if (complaint.includes('Collection')) return <Truck size={16} />;
    if (complaint.includes('Factory')) return <Factory size={16} />;
    if (complaint.includes('Mall') || complaint.includes('Market'))
      return <ShoppingBag size={16} />;
    return <Trash2 size={16} />;
  };

  const registeredComplaints = [
    { icon: '🗑', text: 'Overflowing Garbage in Green Park', time: '3d ago', status: 'In Progress' },
    { icon: '🌊', text: 'Illegal Dumping Near River', time: '4d ago', status: 'Investigating' },
    {
      icon: '🚛',
      text: 'Garbage Collection Delayed in Downtown',
      time: '2d ago',
      status: 'Assigned',
    },
    { icon: '🏭', text: 'Factory Dumping Waste in Lake', time: '1d ago', status: 'Under Review' },
    { icon: '🚮', text: 'Street Littering Near Mall', time: '5d ago', status: 'Pending' },
  ];

  const resolvedComplaints = [
    { icon: '✔', text: 'Garbage Cleared from Green Park', time: '5d ago', rating: 5 },
    { icon: '✔', text: 'Illegal Dumping Stopped at River', time: '7d ago', rating: 4 },
    { icon: '✔', text: 'Garbage Collection Resumed in Downtown', time: '6d ago', rating: 5 },
    { icon: '✔', text: 'Waste Segregation Awareness Program Done', time: '8d ago', rating: 4 },
    { icon: '✔', text: 'Recycling Bins Installed in Market', time: '10d ago', rating: 5 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto mt-16">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
          {/* Banner Image */}
          <div className="h-32 bg-gradient-to-r from-emerald-400 to-teal-500 relative">
            <div className="absolute inset-0 opacity-30 bg-[url('/api/placeholder/1000/200')]"></div>
            <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm font-medium">
              <span className="flex items-center gap-1 text-black">
                <Award size={14} /> Top Contributor
              </span>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-6 pt-0 pb-6 -mt-12">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-md">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-1">
                    <img
                      src="/sara_johnson.jpeg"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer">
                  <Plus size={16} />
                </motion.div>
              </div>

              {/* User Info */}
              <div className="relative flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mt-4 z-20">Sara Johnson</h2>
                <p className="text-emerald-600 font-medium">@sara_johnson</p>
                <p className="text-gray-600 mt-2">
                  Passionate about solving waste management issues 🌱
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-4 mt-4 md:mt-0">
                <div className="bg-teal-50 px-4 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <Coins size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-700">3200</p>
                      <p className="text-xs text-teal-600">Points</p>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-50 px-4 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <Trash2 size={16} className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-700">5</p>
                      <p className="text-xs text-teal-600">Registered</p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Check size={16} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-700">5</p>
                      <p className="text-xs text-emerald-600">Resolved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection('register')}
            className={`py-3 px-4 rounded-xl text-center font-medium transition-all duration-300 ${
              activeSection === 'register'
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-200'
                : 'bg-white text-gray-500 hover:text-gray-700 shadow-md'
            }`}>
            Registered Complaints
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection('resolved')}
            className={`py-3 px-4 rounded-xl text-center font-medium transition-all duration-300 ${
              activeSection === 'resolved'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200'
                : 'bg-white text-gray-500 hover:text-gray-700 shadow-md'
            }`}>
            Resolved Complaints
          </motion.button>
        </div>

        {/* Complaints List */}
        <AnimatePresence mode="wait">
          {activeSection === 'register' && (
            <motion.div
              key="register"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <Trash2 size={14} className="text-red-500" />
                  </div>
                  Complaints Needing Attention
                </h3>

                <div className="space-y-3">
                  {registeredComplaints.map((complaint, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
                      <div className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                            {getComplaintIcon(complaint.text)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{complaint.text}</h4>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock size={12} /> {complaint.time}
                              </span>
                              <span
                                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                  complaint.status === 'In Progress'
                                    ? 'bg-blue-100 text-blue-600'
                                    : complaint.status === 'Investigating'
                                    ? 'bg-purple-100 text-purple-600'
                                    : complaint.status === 'Assigned'
                                    ? 'bg-amber-100 text-amber-600'
                                    : complaint.status === 'Under Review'
                                    ? 'bg-teal-100 text-teal-600'
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                {complaint.status}
                              </span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="19" cy="12" r="1" />
                              <circle cx="5" cy="12" r="1" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-5 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-red-200 transition-all flex items-center justify-center gap-2">
                  <Plus size={18} /> <Link to="/report">Register New Complaint</Link>
                </motion.button>
              </div>
            </motion.div>
          )}

          {activeSection === 'resolved' && (
            <motion.div
              key="resolved"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-emerald-500" />
                  </div>
                  Successfully Resolved Issues
                </h3>

                <div className="space-y-3">
                  {resolvedComplaints.map((complaint, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                      <div className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                            <Check size={18} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{complaint.text}</h4>
                            <div className="flex items-center mt-1 justify-between">
                              <span className="flex items-center gap-1 text-xs text-gray-500">
                                <Calendar size={12} /> {complaint.time}
                              </span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < complaint.rating ? 'text-amber-400' : 'text-gray-300'
                                    }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="19" cy="12" r="1" />
                              <circle cx="5" cy="12" r="1" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-5 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 3.513-.681 4.571-1.65.262-.238.608-.344.95-.283 1.5.225 1.976.294 2.479.294z" />
                    <path d="M9.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M12 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M14.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  </svg>
                  <p className="text-sm font-medium">
                    All complaints have been successfully resolved 🎉
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;
