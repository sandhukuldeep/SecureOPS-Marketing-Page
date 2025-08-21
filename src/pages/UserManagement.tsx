import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Search, Plus, Edit, Trash2, MoreHorizontal, UserPlus, Users, UserCheck, Lock, Mail, CheckCircle, XCircle, Filter, Download, ChevronDown, ChevronUp, Clock } from 'lucide-react';

const UserManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('users');
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [showRoleModal, setShowRoleModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [roleFilter, setRoleFilter] = useState<string[]>(['admin', 'security-analyst', 'developer', 'viewer']);
  const [statusFilter, setStatusFilter] = useState<string[]>(['active', 'inactive', 'pending']);

  // Sample user data
  const users = [
    {
      id: 'user-001',
      name: 'Sarah Chen',
      email: 'sarah.chen@example.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2025-08-18T14:32:15Z',
      teams: ['Security Team', 'Management'],
      avatar: 'SC'
    },
    {
      id: 'user-002',
      name: 'Michael Rodriguez',
      email: 'michael.rodriguez@example.com',
      role: 'security-analyst',
      status: 'active',
      lastLogin: '2025-08-18T09:15:42Z',
      teams: ['Security Team'],
      avatar: 'MR'
    },
    {
      id: 'user-003',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'security-analyst',
      status: 'active',
      lastLogin: '2025-08-17T16:45:22Z',
      teams: ['Security Team', 'Compliance'],
      avatar: 'EW'
    },
    {
      id: 'user-004',
      name: 'David Kim',
      email: 'david.kim@example.com',
      role: 'developer',
      status: 'active',
      lastLogin: '2025-08-16T11:20:05Z',
      teams: ['Development'],
      avatar: 'DK'
    },
    {
      id: 'user-005',
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      role: 'developer',
      status: 'inactive',
      lastLogin: '2025-08-10T08:30:15Z',
      teams: ['Development'],
      avatar: 'AJ'
    },
    {
      id: 'user-006',
      name: 'Jessica Taylor',
      email: 'jessica.taylor@example.com',
      role: 'viewer',
      status: 'pending',
      lastLogin: null,
      teams: ['Management'],
      avatar: 'JT'
    }
  ];

  // Helper function to render user status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <div className="flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span>Active</span>
          </div>
        );
      case 'inactive':
        return (
          <div className="flex items-center px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full">
            <XCircle className="w-4 h-4 mr-1" />
            <span>Inactive</span>
          </div>
        );
      case 'pending':
        return (
          <div className="flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
            <Clock className="w-4 h-4 mr-1" />
            <span>Pending</span>
          </div>
        );
      default:
        return null;
    }
  };

  // Helper function to render role badge
  const renderRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return (
          <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
            Admin
          </div>
        );
      case 'security-analyst':
        return (
          <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
            Security Analyst
          </div>
        );
      case 'developer':
        return (
          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
            Developer
          </div>
        );
      case 'viewer':
        return (
          <div className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm">
            Viewer
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SecureOPS ASPM
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">
            User
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Management </span>
          </h1>
          <div className="flex space-x-4">
            <button 
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform"
              onClick={() => setShowUserModal(true)}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Add User
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-8">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'users' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('users')}
          >
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Users</span>
            </div>
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'roles' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('roles')}
          >
            <div className="flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              <span>Roles</span>
            </div>
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'teams' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('teams')}
          >
            <div className="flex items-center">
              <UserCheck className="w-5 h-5 mr-2" />
              <span>Teams</span>
            </div>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
              placeholder="Search users by name, email, or role..."
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">User</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Role</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Status</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Last Login</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Teams</th>
                  <th className="text-right py-4 px-6 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-white/5 hover:bg-gray-800/30">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium mr-3">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-gray-400 text-sm">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {renderRoleBadge(user.role)}
                    </td>
                    <td className="py-4 px-6">
                      {renderStatusBadge(user.status)}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-2">
                        {user.teams.map((team, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                            {team}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end space-x-3">
                        <button 
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                          onClick={() => {
                            setSelectedUser(user);
                            setShowUserModal(true);
                          }}
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-white transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SecureOPS ASPM
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 SecureOPS ASPM. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-gray-800 rounded-xl border border-white/10 p-8 w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">
              {selectedUser ? 'Edit User' : 'Add New User'}
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                    defaultValue={selectedUser ? selectedUser.name.split(' ')[0] : ''}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                    defaultValue={selectedUser ? selectedUser.name.split(' ')[1] : ''}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                  defaultValue={selectedUser ? selectedUser.email : ''}
                />
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <button 
                  type="button" 
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  onClick={() => {
                    setShowUserModal(false);
                    setSelectedUser(null);
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform"
                  onClick={() => {
                    setShowUserModal(false);
                    setSelectedUser(null);
                  }}
                >
                  {selectedUser ? 'Save Changes' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;