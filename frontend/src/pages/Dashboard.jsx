import { useState } from 'react';
import { Bell, Search, FileText, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('received');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const complaints = [
    { id: 'CPT-001', user: 'John Doe', location: 'North Wing', date: '2023-08-15', status: 'received' },
    { id: 'CPT-002', user: 'Jane Smith', location: 'Cafeteria', date: '2023-08-14', status: 'resolved' },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-green-100">
      <div className="flex min-h-screen mt-16">
        {/* Sidebar */}
        <div className="w-64 h-screen bg-white p-4 shadow-lg">
          <div className="text-2xl font-bold text-green-600 mb-8">PurePoint</div>
          <nav>
            {[
              { id: 'received', label: 'Received Complaints', icon: FileText },
              { id: 'resolved', label: 'Resolved Complaints', icon: CheckCircle },
              { id: 'active', label: 'Active Complaints', icon: Clock },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center p-3 mb-2 rounded-lg transition-all ${
                  activeTab === item.id ? 'bg-green-100 text-green-600' : 'hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-700">Welcome Back, Admin</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search complaints..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Content Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Complaint ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">User</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-600">{complaint.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{complaint.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{complaint.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{complaint.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        complaint.status === 'resolved' 
                          ? 'bg-green-100 text-green-600' 
                          : complaint.status === 'active'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {complaint.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
