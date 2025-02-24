import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Mock Data
const mockData = [
  {
    id: 1,
    name: 'Alice Green',
    points: 1200,
    rank: 1,
    profilePic: 'https://i.pravatar.cc/100?img=1',
    isAuthority: false,
  },
  {
    id: 2,
    name: 'Bob Earth',
    points: 1100,
    rank: 2,
    profilePic: 'https://i.pravatar.cc/100?img=2',
    isAuthority: false,
  },
  {
    id: 3,
    name: 'Charlie Eco',
    points: 1000,
    rank: 3,
    profilePic: 'https://i.pravatar.cc/100?img=3',
    isAuthority: false,
  },
  {
    id: 4,
    name: 'David Tree',
    points: 900,
    rank: 4,
    profilePic: 'https://i.pravatar.cc/100?img=4',
    isAuthority: false,
  },
  {
    id: 5,
    name: 'Eve Nature',
    points: 850,
    rank: 5,
    profilePic: 'https://i.pravatar.cc/100?img=5',
    isAuthority: false,
  },
  {
    id: 6,
    name: 'Municipal Corp',
    points: 1500,
    rank: 1,
    profilePic: 'https://i.pravatar.cc/100?img=6',
    isAuthority: true,
  },
  {
    id: 7,
    name: 'Clean City NGO',
    points: 1400,
    rank: 2,
    profilePic: 'https://i.pravatar.cc/100?img=7',
    isAuthority: true,
  },
  {
    id: 8,
    name: 'Green Planet Org',
    points: 1300,
    rank: 3,
    profilePic: 'https://i.pravatar.cc/100?img=8',
    isAuthority: true,
  },
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('warriors');
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setUsers(mockData);
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }, 500);
  }, []);

  const filteredUsers = users.filter((user) =>
    activeTab === 'warriors' ? !user.isAuthority : user.isAuthority,
  );

  const topThree = filteredUsers.filter((user) => user.rank <= 3);
  const otherUsers = filteredUsers.filter((user) => user.rank > 3);

  return (
    <div
      className={`w-full min-h-screen flex flex-col ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } transition-all duration-500`}>
      <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
        {/* Tabs */}
        <div className="w-full flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab('warriors')}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === 'warriors'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}>
            🌱 Eco-Warriors
          </button>
          <button
            onClick={() => setActiveTab('authorities')}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              activeTab === 'authorities'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}>
            🏛 Authorities
          </button>
        </div>

        {/* Top 3 Users */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {topThree.map((user) => (
            <div
              key={user.id}
              className={`p-8 rounded-3xl shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } text-center transform transition-all duration-300 hover:scale-105`}>
              <img
                src={user.profilePic}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-green-400"
                alt={user.name}
              />
              <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
              <p className="text-sm text-gray-500 mb-4">Rank #{user.rank}</p>
              <p className="text-3xl font-bold text-green-500">{user.points} pts</p>
            </div>
          ))}
        </div>

        {/* Other Users */}
        <div className="space-y-4">
          {otherUsers.map((user) => (
            <div
              key={user.id}
              className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-md flex items-center gap-6 transition-all duration-300 hover:shadow-lg`}>
              <span className="text-xl font-bold text-gray-500">#{user.rank}</span>
              <img
                src={user.profilePic}
                className="w-14 h-14 rounded-full border-2 border-green-400"
                alt={user.name}
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <span className="text-sm text-green-400">
                  +{Math.floor(user.points / 10)} today
                </span>
              </div>
              <span className="text-xl font-bold text-green-500">{user.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
