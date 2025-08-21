import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, XCircle, Info, FileText, Download } from 'lucide-react';

const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Compliance frameworks data
  const frameworks = [
    {
      id: 'soc2',
      name: 'SOC 2',
      status: 'compliant',
      score: 98,
      lastAudit: '2025-06-15',
      nextAudit: '2026-06-15',
      controls: { passed: 116, failed: 2, inProgress: 6 }
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      status: 'inProgress',
      score: 87,
      lastAudit: '2025-05-10',
      nextAudit: '2025-11-10',
      controls: { passed: 42, failed: 5, inProgress: 11 }
    },
    {
      id: 'gdpr',
      name: 'GDPR',
      status: 'compliant',
      score: 95,
      lastAudit: '2025-07-01',
      nextAudit: '2026-01-01',
      controls: { passed: 89, failed: 0, inProgress: 4 }
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      status: 'inProgress',
      score: 91,
      lastAudit: '2025-04-22',
      nextAudit: '2025-10-22',
      controls: { passed: 104, failed: 3, inProgress: 7 }
    },
    {
      id: 'pci',
      name: 'PCI DSS',
      status: 'compliant',
      score: 100,
      lastAudit: '2025-07-30',
      nextAudit: '2026-01-30',
      controls: { passed: 78, failed: 0, inProgress: 0 }
    }
  ];

  // Recent compliance activities
  const activities = [
    { id: 1, type: 'update', framework: 'SOC 2', control: 'Access Control', status: 'passed', date: '2025-08-18', user: 'Sarah Chen' },
    { id: 2, type: 'audit', framework: 'HIPAA', control: 'Data Encryption', status: 'failed', date: '2025-08-17', user: 'Michael Rodriguez' },
    { id: 3, type: 'remediation', framework: 'ISO 27001', control: 'Incident Response', status: 'inProgress', date: '2025-08-16', user: 'Alex Johnson' },
    { id: 4, type: 'update', framework: 'GDPR', control: 'Data Processing', status: 'passed', date: '2025-08-15', user: 'Emma Wilson' },
    { id: 5, type: 'audit', framework: 'PCI DSS', control: 'Network Security', status: 'passed', date: '2025-08-14', user: 'David Kim' }
  ];

  // Helper function to render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return (
          <div className="flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span>Compliant</span>
          </div>
        );
      case 'inProgress':
        return (
          <div className="flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
            <AlertTriangle className="w-4 h-4 mr-1" />
            <span>In Progress</span>
          </div>
        );
      case 'nonCompliant':
        return (
          <div className="flex items-center px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
            <XCircle className="w-4 h-4 mr-1" />
            <span>Non-Compliant</span>
          </div>
        );
      default:
        return null;
    }
  };

  // Helper function to render activity status icon
  const renderActivityStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'inProgress':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
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
            Compliance
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Dashboard </span>
          </h1>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-white/10 transition-colors">
              <FileText className="w-5 h-5 mr-2" />
              Generate Report
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-white/10 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Export Data
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-8">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'frameworks' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('frameworks')}
          >
            Frameworks
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'controls' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('controls')}
          >
            Controls
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'evidence' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('evidence')}
          >
            Evidence
          </button>
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Compliance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-gray-300 mb-4">Overall Compliance</h3>
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-bold text-blue-400">94%</div>
                  <div className="w-16 h-16 rounded-full border-4 border-blue-400 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  Last updated: August 19, 2025
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-gray-300 mb-4">Control Status</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-gray-300">Passed: 429</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                      <span className="text-gray-300">In Progress: 28</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      <span className="text-gray-300">Failed: 10</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center">
                    <span className="text-lg font-bold">92%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-gray-300 mb-4">Upcoming Audits</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-300">HIPAA</span>
                    <span className="text-yellow-400">Nov 10, 2025</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-300">ISO 27001</span>
                    <span className="text-yellow-400">Oct 22, 2025</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded-lg">
                    <span className="text-gray-300">PCI DSS</span>
                    <span className="text-gray-400">Jan 30, 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks Overview */}
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Compliance Frameworks</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Framework</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Score</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Last Audit</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Next Audit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {frameworks.map((framework) => (
                      <tr key={framework.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4 font-medium">{framework.name}</td>
                        <td className="py-4 px-4">{renderStatusBadge(framework.status)}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden mr-2">
                              <div 
                                className={`h-full rounded-full ${
                                  framework.score >= 90 ? 'bg-green-400' : 
                                  framework.score >= 80 ? 'bg-yellow-400' : 'bg-red-400'
                                }`}
                                style={{ width: `${framework.score}%` }}
                              ></div>
                            </div>
                            <span>{framework.score}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-400">{framework.lastAudit}</td>
                        <td className="py-4 px-4 text-gray-400">{framework.nextAudit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-700/20 rounded-lg hover:bg-gray-700/30 transition-colors">
                    <div className="flex items-center">
                      {renderActivityStatusIcon(activity.status)}
                      <div className="ml-4">
                        <div className="font-medium">
                          {activity.framework} - {activity.control}
                        </div>
                        <div className="text-sm text-gray-400">
                          {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)} by {activity.user}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{activity.date}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  View All Activities
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab === 'frameworks' && (
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center py-32">
            <h3 className="text-2xl font-semibold mb-4">Frameworks Details</h3>
            <p className="text-gray-400">Detailed information about each compliance framework would be displayed here.</p>
          </div>
        )}

        {activeTab === 'controls' && (
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center py-32">
            <h3 className="text-2xl font-semibold mb-4">Controls Management</h3>
            <p className="text-gray-400">Control implementation status and management interface would be displayed here.</p>
          </div>
        )}

        {activeTab === 'evidence' && (
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center py-32">
            <h3 className="text-2xl font-semibold mb-4">Evidence Repository</h3>
            <p className="text-gray-400">Evidence collection and documentation for compliance audits would be displayed here.</p>
          </div>
        )}
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
    </div>
  );
};

export default Compliance;