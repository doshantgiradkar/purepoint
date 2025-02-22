import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

// Mock Data
const mockData = [
  { id: 1, name: "Alice Green", points: 1200, rank: 1, profilePic: "https://i.pravatar.cc/100?img=1", isAuthority: false },
  { id: 2, name: "Bob Earth", points: 1100, rank: 2, profilePic: "https://i.pravatar.cc/100?img=2", isAuthority: false },
  { id: 3, name: "Charlie Eco", points: 1000, rank: 3, profilePic: "https://i.pravatar.cc/100?img=3", isAuthority: false },
  { id: 4, name: "David Tree", points: 900, rank: 4, profilePic: "https://i.pravatar.cc/100?img=4", isAuthority: false },
  { id: 5, name: "Eve Nature", points: 850, rank: 5, profilePic: "https://i.pravatar.cc/100?img=5", isAuthority: false },
  { id: 6, name: "Municipal Corp", points: 1500, rank: 1, profilePic: "https://i.pravatar.cc/100?img=6", isAuthority: true },
  { id: 7, name: "Clean City NGO", points: 1400, rank: 2, profilePic: "https://i.pravatar.cc/100?img=7", isAuthority: true },
  { id: 8, name: "Green Planet Org", points: 1300, rank: 3, profilePic: "https://i.pravatar.cc/100?img=8", isAuthority: true },
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("warriors");
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setUsers(mockData);
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }, 500);
  }, []);

  const filteredUsers = users.filter((user) =>
    activeTab === "warriors" ? !user.isAuthority : user.isAuthority
  );

  const topThree = filteredUsers.filter((user) => user.rank <= 3);
  const otherUsers = filteredUsers.filter((user) => user.rank > 3);

  return (
    <div className={`flex-grow flex flex-col  ${darkMode ? "bg-gray-900" : "bg-gray-50"} transition-all duration-500 `}>
      <div className="max-w-full mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="w-full flex justify-around mb-12 mt-8">
            <button onClick={() => setActiveTab("warriors")} className="px-8 py-3 text-lg font-medium">
              🌱 Eco-Warriors
            </button>
            <button onClick={() => setActiveTab("authorities")} className="px-8 py-3 text-lg font-medium">
              🏛 Authorities
            </button>
        
        </div>

        {/* Top 3 Users */}
        <div className="block justify-center items-end gap-8 mb-16 md:flex">
          {topThree.map((user) => (
            <div key={user.id} className="p-6 m-6 rounded-2xl shadow-lg bg-white text-center">
              <img src={user.profilePic} className="w-24 h-24 rounded-full mx-auto mb-4" alt={user.name} />
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-sm">Rank #{user.rank}</p>
              <p className="text-2xl font-bold text-green-500">{user.points} pts</p>
            </div>
          ))}
        </div>

        {/* Other Users */}
        <div className="space-y-4">
          {otherUsers.map((user) => (
            <div key={user.id} className="p-4 rounded-xl mx-1/2 flex justify-center items-center gap-4 bg-white shadow">
              <span className="text-lg font-bold">#{user.rank}</span>
              <img src={user.profilePic} className="w-12 h-12 rounded-full border-2 border-green-400" alt={user.name} />
              <div className="flex-1">
                <h3 className="font-semibold">{user.name}</h3>
                <span className="text-sm text-green-400">+{Math.floor(user.points / 10)} today</span>
              </div>
              <span className="text-lg font-bold text-green-500">{user.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
