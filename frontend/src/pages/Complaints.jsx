import React, { useState } from "react";
import { MapPin, Clock, ChevronRight, GridIcon, ListIcon } from "lucide-react";

const sampleComplaints = [
  {
    id: 1,
    title: "Road Maintenance Required",
    status: "pending",
    dateSubmitted: "2024-02-23T10:30:00",
    location: "123 Main Street, Downtown",
    description: "Large pothole causing traffic disruption...",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Street Light Malfunction",
    status: "in_progress",
    dateSubmitted: "2024-02-22T15:45:00",
    location: "456 Park Avenue, Uptown",
    description: "Multiple street lights not functioning...",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

const statusColors = {
  pending: "bg-yellow-500",
  in_progress: "bg-blue-500",
  resolved: "bg-green-500",
};

const ComplaintCard = ({ complaint }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{complaint.title}</h3>
        <span className={`px-2 py-1 text-xs text-white rounded ${statusColors[complaint.status]}`}>
          {complaint.status.replace("_", " ").toUpperCase()}
        </span>
      </div>
      <div className="flex items-center text-gray-500 text-sm mt-2">
        <Clock className="w-4 h-4 mr-1" />
        {new Date(complaint.dateSubmitted).toLocaleString()}
      </div>
      <div className="flex items-center text-gray-600 text-xs mt-1">
        <MapPin className="w-4 h-4 mr-1" />
        {complaint.location}
      </div>
      {complaint.imageUrl && (
        <img
          src={complaint.imageUrl}
          alt="Complaint"
          className="w-full h-40 object-cover rounded-md mt-3"
        />
      )}
      <p className="text-sm text-gray-600 mt-3">
        {expanded ? complaint.description : `${complaint.description.slice(0, 100)}...`}
      </p>
      <button
        className="text-blue-600 hover:text-blue-800 text-sm mt-2 flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "View More"}
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

const Complaints = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Complaints Dashboard</h1>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-900 text-white" : "bg-gray-200"}`}
            onClick={() => setViewMode("grid")}
          >
            <GridIcon className="w-4 h-4" />
          </button>
          <button
            className={`p-2 rounded ${viewMode === "list" ? "bg-gray-900 text-white" : "bg-gray-200"}`}
            onClick={() => setViewMode("list")}
          >
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      
      <div
        className={`grid gap-4 ${
          viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        }`}
      >
        {sampleComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>
      <div className="w-full h-[400px] md:h-[500px] border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Map Component Would Render Here</p>
      </div>

    </div>
  );
};

export default Complaints;
