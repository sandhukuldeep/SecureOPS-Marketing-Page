import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Code, Copy, ExternalLink, ChevronDown, ChevronUp, Search, Download, CheckCircle, Lock } from 'lucide-react';

const ApiDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('authentication');
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>('get-vulnerabilities');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // API Sections
  const sections = [
    { id: 'authentication', name: 'Authentication' },
    { id: 'vulnerabilities', name: 'Vulnerabilities API' },
    { id: 'repositories', name: 'Repositories API' },
    { id: 'compliance', name: 'Compliance API' },
    { id: 'users', name: 'Users API' },
    { id: 'webhooks', name: 'Webhooks' },
    { id: 'rate-limits', name: 'Rate Limits' }
  ];

  // API Endpoints
  const endpoints = {
    authentication: [
      {
        id: 'generate-token',
        method: 'POST',
        path: '/api/v1/auth/token',
        title: 'Generate API Token',
        description: 'Generate a new API token for authenticating API requests.',
        requestExample: `{
  "client_id": "your_client_id",
  "client_secret": "your_client_secret",
  "scope": "read:vulnerabilities write:repositories"
}`,
        responseExample: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "scope": "read:vulnerabilities write:repositories"
}`
      },
      {
        id: 'revoke-token',
        method: 'POST',
        path: '/api/v1/auth/revoke',
        title: 'Revoke API Token',
        description: 'Revoke an existing API token.',
        requestExample: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
        responseExample: `{
  "status": "success",
  "message": "Token revoked successfully"
}`
      }
    ],
    vulnerabilities: [
      {
        id: 'get-vulnerabilities',
        method: 'GET',
        path: '/api/v1/vulnerabilities',
        title: 'List Vulnerabilities',
        description: 'Retrieve a list of vulnerabilities with optional filtering.',
        parameters: [
          { name: 'severity', type: 'string', description: 'Filter by severity (critical, high, medium, low)' },
          { name: 'status', type: 'string', description: 'Filter by status (open, fixed, in_progress)' },
          { name: 'page', type: 'integer', description: 'Page number for pagination' },
          { name: 'limit', type: 'integer', description: 'Number of results per page (default: 20, max: 100)' }
        ],
        requestExample: 'GET /api/v1/vulnerabilities?severity=critical&status=open&page=1&limit=10',
        responseExample: `{
  "data": [
    {
      "id": "VUL-2025-0147",
      "title": "Insecure Deserialization",
      "description": "The application deserializes untrusted data without proper validation.",
      "severity": "critical",
      "status": "open",
      "discovered_date": "2025-08-18T00:00:00Z",
      "fixed_date": null,
      "affected_components": ["data-service", "processing-engine"],
      "cve": "CVE-2025-2345"
    },
    // More vulnerabilities...
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 10,
    "pages": 5
  }
}`
      },
      {
        id: 'get-vulnerability',
        method: 'GET',
        path: '/api/v1/vulnerabilities/{id}',
        title: 'Get Vulnerability',
        description: 'Retrieve detailed information about a specific vulnerability.',
        parameters: [
          { name: 'id', type: 'string', description: 'The vulnerability ID', required: true }
        ],
        requestExample: 'GET /api/v1/vulnerabilities/VUL-2025-0147',
        responseExample: `{
  "id": "VUL-2025-0147",
  "title": "Insecure Deserialization",
  "description": "The application deserializes untrusted data without proper validation, allowing attackers to execute arbitrary code.",
  "severity": "critical",
  "status": "open",
  "discovered_date": "2025-08-18T00:00:00Z",
  "fixed_date": null,
  "affected_components": ["data-service", "processing-engine"],
  "cve": "CVE-2025-2345",
  "assignee": {
    "id": "user-123",
    "name": "David Kim",
    "email": "david.kim@example.com"
  },
  "remediation_steps": "Update the deserialization library to version 2.5.0 or higher and implement proper validation.",
  "references": [
    {
      "title": "OWASP Deserialization Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html"
    }
  ]
}`
      },
      {
        id: 'update-vulnerability',
        method: 'PATCH',
        path: '/api/v1/vulnerabilities/{id}',
        title: 'Update Vulnerability',
        description: 'Update information about a specific vulnerability.',
        parameters: [
          { name: 'id', type: 'string', description: 'The vulnerability ID', required: true }
        ],
        requestExample: `PATCH /api/v1/vulnerabilities/VUL-2025-0147
{
  "status": "in_progress",
  "assignee_id": "user-456"
}`,
        responseExample: `{
  "id": "VUL-2025-0147",
  "status": "in_progress",
  "assignee": {
    "id": "user-456",
    "name": "Emma Wilson",
    "email": "emma.wilson@example.com"
  },
  "updated_at": "2025-08-19T10:15:30Z"
}`
      }
    ],
    repositories: [
      {
        id: 'list-repositories',
        method: 'GET',
        path: '/api/v1/repositories',
        title: 'List Repositories',
        description: 'Retrieve a list of repositories being monitored.',
        requestExample: 'GET /api/v1/repositories?page=1&limit=10',
        responseExample: `{
  "data": [
    {
      "id": "repo-123",
      "name": "auth-service",
      "url": "https://github.com/example/auth-service",
      "last_scan": "2025-08-15T14:30:00Z",
      "vulnerability_count": {
        "critical": 2,
        "high": 5,
        "medium": 8,
        "low": 3
      }
    },
    // More repositories...
  ],
  "meta": {
    "total": 28,
    "page": 1,
    "limit": 10,
    "pages": 3
  }
}`
      }
    ]
  };

  // Helper function to copy text to clipboard
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Toggle endpoint expansion
  const toggleEndpoint = (id: string) => {
    if (expandedEndpoint === id) {
      setExpandedEndpoint(null);
    } else {
      setExpandedEndpoint(id);
    }
  };

  // Render endpoint
  const renderEndpoint = (endpoint: any) => {
    const isExpanded = expandedEndpoint === endpoint.id;
    
    return (
      <div key={endpoint.id} className="mb-8 bg-gray-800/50 rounded-lg border border-white/10 overflow-hidden">
        <div 
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800/70 transition-colors"
          onClick={() => toggleEndpoint(endpoint.id)}
        >
          <div className="flex items-center">
            <div className={`px-3 py-1 rounded text-white font-medium mr-4 ${
              endpoint.method === 'GET' ? 'bg-green-600/70' :
              endpoint.method === 'POST' ? 'bg-blue-600/70' :
              endpoint.method === 'PATCH' ? 'bg-yellow-600/70' :
              endpoint.method === 'PUT' ? 'bg-purple-600/70' :
              'bg-red-600/70'
            }`}>
              {endpoint.method}
            </div>
            <div>
              <div className="font-medium">{endpoint.title}</div>
              <div className="text-gray-400 text-sm font-mono">{endpoint.path}</div>
            </div>
          </div>
          <div>
            {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </div>
        </div>
        
        {isExpanded && (
          <div className="p-4 border-t border-white/10">
            <p className="text-gray-300 mb-4">{endpoint.description}</p>
            
            {endpoint.parameters && endpoint.parameters.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 px-4 text-gray-400 font-medium">Name</th>
                        <th className="text-left py-2 px-4 text-gray-400 font-medium">Type</th>
                        <th className="text-left py-2 px-4 text-gray-400 font-medium">Description</th>
                        <th className="text-left py-2 px-4 text-gray-400 font-medium">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpoint.parameters.map((param: any, index: number) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="py-2 px-4 font-mono text-sm">{param.name}</td>
                          <td className="py-2 px-4 text-sm">{param.type}</td>
                          <td className="py-2 px-4 text-sm text-gray-300">{param.description}</td>
                          <td className="py-2 px-4 text-sm">{param.required ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium">Request</h4>
                  <button 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    onClick={() => copyToClipboard(endpoint.requestExample, `request-${endpoint.id}`)}
                  >
                    {copiedText === `request-${endpoint.id}` ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>{endpoint.requestExample}</pre>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium">Response</h4>
                  <button 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    onClick={() => copyToClipboard(endpoint.responseExample, `response-${endpoint.id}`)}
                  >
                    {copiedText === `response-${endpoint.id}` ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>{endpoint.responseExample}</pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
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
            API
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Documentation </span>
          </h1>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              API Reference
            </a>
            <button className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-white/10 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download OpenAPI Spec
            </button>
          </div>
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
              placeholder="Search API documentation..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">API Reference</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'hover:bg-gray-800/70 text-gray-300'
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-medium mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>Getting Started Guide</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>API Changelog</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>SDKs & Libraries</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>API Status</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'authentication' && (
              <div>
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-8">
                  <div className="flex items-center mb-6">
                    <Lock className="w-8 h-8 text-blue-400 mr-4" />
                    <h2 className="text-2xl font-semibold">Authentication</h2>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The SecureOPS ASPM API uses OAuth 2.0 for authentication. You'll need to generate an API token to authenticate your requests.
                    All API requests must include an <code className="bg-gray-700 px-1 py-0.5 rounded text-blue-300">Authorization</code> header with a Bearer token.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                    <pre>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</pre>
                  </div>
                  <div className="flex items-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-blue-300">
                      API tokens are valid for 1 hour. You'll need to refresh your token or generate a new one when it expires.
                    </p>
                  </div>
                </div>

                {endpoints.authentication.map(renderEndpoint)}
              </div>
            )}

            {activeSection === 'vulnerabilities' && (
              <div>
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Vulnerabilities API</h2>
                  <p className="text-gray-300">
                    The Vulnerabilities API allows you to retrieve, update, and manage vulnerability data in your SecureOPS ASPM instance.
                    You can use these endpoints to integrate vulnerability information into your existing security workflows and tools.
                  </p>
                </div>

                {endpoints.vulnerabilities.map(renderEndpoint)}
              </div>
            )}

            {activeSection === 'repositories' && (
              <div>
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Repositories API</h2>
                  <p className="text-gray-300">
                    The Repositories API allows you to manage the repositories that are monitored by SecureOPS ASPM.
                    You can add, remove, and update repositories, as well as trigger scans and retrieve scan results.
                  </p>
                </div>

                {endpoints.repositories.map(renderEndpoint)}
              </div>
            )}

            {/* Placeholder for other sections */}
            {(activeSection === 'compliance' || 
              activeSection === 'users' || 
              activeSection === 'webhooks' || 
              activeSection === 'rate-limits') && (
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center py-32">
                <h2 className="text-2xl font-semibold mb-4">{sections.find(s => s.id === activeSection)?.name}</h2>
                <p className="text-gray-400">
                  This section is under development. API documentation will be available soon.
                </p>
              </div>
            )}
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
    </div>
  );
};

export default ApiDocs;