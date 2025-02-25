import React, { useState } from 'react';
import { MapPin, Clock, ChevronRight, GridIcon, ListIcon, Filter, Calendar } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const sampleComplaints = [
  {
    id: 1,
    title: 'Road Maintenance Required',
    status: 'pending',
    dateSubmitted: '2024-02-23T10:30:00',
    location: '123 Main Street, Downtown',
    description:
      'Large pothole causing traffic disruption and potential safety hazards for vehicles. Multiple complaints received from local residents about vehicle damage.',
    imageUrl: '/how_it_works.jpg',
    coordinates: [51.505, -0.09], // Latitude and Longitude
  },
  {
    id: 2,
    title: 'Street Light Malfunction',
    status: 'in_progress',
    dateSubmitted: '2024-02-22T15:45:00',
    location: '456 Park Avenue, Uptown',
    description:
      'Multiple street lights not functioning in the residential area, causing safety concerns for pedestrians during evening hours.',
    imageUrl: '/how_it_works.jpg',
    coordinates: [51.51, -0.1], // Latitude and Longitude
  },
];

const statusColors = {
  pending: 'bg-yellow-500',
  in_progress: 'bg-[#008236]',
  resolved: 'bg-[#0D542B]',
};

const ComplaintCard = ({ complaint, viewMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 ${
        viewMode === 'list' ? 'flex flex-col md:flex-row gap-6' : ''
      }`}>
      <div className={`relative ${viewMode === 'list' ? 'md:w-72 w-full' : 'w-full'}`}>
        <img
          src={complaint.imageUrl}
          alt="Complaint"
          className={`w-full object-cover ${
            viewMode === 'list'
              ? 'h-48 md:h-full md:rounded-l-xl md:rounded-r-none'
              : 'h-48 rounded-t-xl'
          }`}
        />
        <span
          className={`absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold text-white rounded-full ${
            statusColors[complaint.status]
          }`}>
          {complaint.status.replace('_', ' ').toUpperCase()}
        </span>
      </div>

      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight tracking-tight">
          {complaint.title}
        </h3>

        <div className="space-y-3 mb-5">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            {new Date(complaint.dateSubmitted).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            {new Date(complaint.dateSubmitted).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div className="flex items-start text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
            {complaint.location}
          </div>
        </div>

        <div className="bg-[#EAFDF0] rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {expanded ? complaint.description : `${complaint.description.slice(0, 100)}...`}
          </p>
          <button
            className="text-[#008236] hover:text-[#0D542B] text-sm mt-3 flex items-center font-medium transition-colors duration-200"
            onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show Less' : 'View More'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Complaints = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="w-full bg-gray-50 min-h-screen my-16">
      <div className="container mx-auto px-4 sm:px-6 py-18 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Complaints Dashboard
            </h1>
            <p className="text-gray-600 text-lg">Monitor and manage community reports</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>

            <div className="flex bg-white rounded-lg border border-gray-200 p-1 shadow-sm">
              <button
                className={`p-2.5 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-[#008236] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setViewMode('grid')}>
                <GridIcon className="w-4 h-4" />
              </button>
              <button
                className={`p-2.5 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-[#008236] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setViewMode('list')}>
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mb-8 grid-cols-1 lg:grid-cols-2">
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
            {sampleComplaints.map((complaint) => (
              <ComplaintCard key={complaint.id} complaint={complaint} viewMode={viewMode} />
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-10">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Complaint Locations</h2>
            </div>
            <div className="h-[calc(100%-4rem)] min-h-[400px]">
              <MapContainer
                center={[51.505, -0.09]} // Default center
                zoom={13}
                className="h-full w-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {sampleComplaints.map((complaint) => (
                  <Marker key={complaint.id} position={complaint.coordinates}>
                    <Popup>
                      <div>
                        <h3 className="font-semibold text-gray-800">{complaint.title}</h3>
                        <p className="text-sm text-gray-600">{complaint.location}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
