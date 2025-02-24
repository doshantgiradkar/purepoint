import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position]);
  return null;
};

const LocationPicker = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

export default function CompleteAccountAuthority() {
  const [location, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = [position.coords.latitude, position.coords.longitude];
          setUserLocation(newLocation);
          setLocation(newLocation);
          setLoadingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoadingLocation(false);
        },
      );
    } else {
      setLoadingLocation(false);
    }
  }, []);

  const [authority, setAuthority] = useState({
    Name: '',
    email: '',
    bio: '',
    profilePicture: '',
    location: { longitude: '', latitude: '' },
  });

  useEffect(() => {
    // Fetch authority data (replace with your API call)
    fetch('/api/authority')
      .then((res) => res.json())
      .then((data) => setAuthority(data))
      .catch((err) => console.error('Error fetching authority data:', err));
  }, []);

  const handleChange = (e) => {
    setAuthority({ ...authority, [e.target.name]: e.target.value });
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
    console.log('Saving authority data:', authority);

    const formData = new FormData();
    formData.append('Name', authority.Name);
    formData.append('bio', authority.bio);
    formData.append('longitude', authority.location.longitude);
    formData.append('latitude', authority.location.latitude);
    formData.append('latitude', location?.[0]);
    formData.append('longitude', location?.[1]);
    if (authority.profilePicture) {
      formData.append('profilePicture', authority.profilePicture);
    }

    // API call to update authority data
    await fetch('/api/authority/update', {
      method: 'POST',
      body: formData,
    }).catch((err) => console.error('Error updating authority:', err));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="mt-18 w-full max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Authority Account</h2>

        {/* Profile Section */}
        <div className="flex items-center space-x-6 mb-8">
          <label className="relative cursor-pointer group">
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <img
              src={authority.profilePicture || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-green-100 hover:border-green-200 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 text-white text-sm font-semibold rounded-full transition-all">
              Change
            </div>
          </label>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {authority.Name || 'Your Name'}
            </h3>
            <p className="text-gray-500">{authority.email}</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="Name"
              value={authority.Name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={authority.email}
              readOnly
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              name="bio"
              value={authority.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              rows="4"
              placeholder="Tell something about yourself..."></textarea>
          </div>

        {/* /* Location Section */ }
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Location</label>
                    <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-300 relative" style={{ zIndex: 1 }}>
                      {loadingLocation ? (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          Loading map...
                        </div>
                      ) : userLocation ? (
                        <MapContainer
                          ref={mapRef}
                          center={userLocation}
                          zoom={13}
                          className="h-full w-full"
                          style={{ height: '100%', width: '100%', zIndex: 1 }}>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <RecenterMap position={location || userLocation} />
                          <LocationPicker onLocationSelect={setLocation} />
                          {location && <Marker position={location} />}
                        </MapContainer>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          Location unavailable
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-xl hover:bg-green-700 transition-all"
                      onClick={() => setLocation(userLocation)}
                      disabled={!userLocation}>
                      Reset to My Location
                    </button>
                  </div>

                  {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 transition-all">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
