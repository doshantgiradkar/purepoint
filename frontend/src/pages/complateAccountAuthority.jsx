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
    return null;S
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
                }
            );
        } else {
            setLoadingLocation(false);
        }
    }, []);

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
        formData.append('latitude', location?.[0]);
        formData.append('longitude', location?.[1]);
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
                    <label className="block text-gray-600">Email</label>
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

                {/* Updated Location Section */}
                <div>
                    <label className="block text-gray-600 mb-2">Location</label>
                    <div className="z-0 w-full h-64 rounded-lg overflow-hidden border border-gray-300 relative">
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
                                style={{ height: '100%', width: '100%' }}
                            >
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
                        className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                        onClick={() => setLocation(userLocation)}
                        disabled={!userLocation}
                    >
                        Reset to My Location
                    </button>
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
