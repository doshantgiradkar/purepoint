import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import { Camera } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  return null;
};

const LocationPicker = ({ position, onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect([e.latlng.lat, e.latlng.lng]);
    }
  });
  return null;
};

const Report = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState([51.505, -0.09]);
  const [userLocation, setUserLocation] = useState([51.505, -0.09]);
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        setLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      () => console.error('Geolocation permission denied')
    );
  }, []);
  
  const handleImageCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-16 mx-auto p-4 max-w-4xl relative z-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Report Garbage</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Take a Photo</label>
              <div className="relative">
                {!preview ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageCapture}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center pointer-events-none">
                      <Camera className="h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-gray-500">Tap to take a photo</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <img src={preview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition-colors"
                      onClick={() => {
                        setImage(null);
                        setPreview(null);
                      }}
                    >Remove</button>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <MapContainer center={location} zoom={13} className="h-64 w-full rounded-lg">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={location} icon={L.icon({
                  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                })} />
                <RecenterMap position={location} />
                <LocationPicker position={location} onLocationSelect={setLocation} />
              </MapContainer>
              <button
                type="button"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() => setLocation(userLocation)}
              >Reposition to My Location</button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the garbage issue..."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!image || !location || !description || loading}
              className={`w-full py-2 px-4 rounded-md text-white font-medium
                ${(!image || !location || !description || loading)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 transition-colors'}`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </div>
              ) : (
                'Submit Report'
              )}
            </button>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
                Report submitted successfully! We'll look into it shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
