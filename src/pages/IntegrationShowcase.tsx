import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Search, Filter, ChevronDown, ChevronUp, ExternalLink, CheckCircle, XCircle, Clock, Download } from 'lucide-react';

const IntegrationShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string[]>(['cicd', 'security', 'monitoring', 'cloud', 'development']);
  const [statusFilter, setStatusFilter] = useState<string[]>(['available', 'beta', 'coming-soon']);

  // Sample integrations data
  const integrations = [
    {
      id: 'integration-001',
      name: 'GitHub',
      description: 'Connect your GitHub repositories for continuous security scanning and vulnerability detection.',
      category: 'development',
      status: 'available',
      logo: '🐙',
      features: [
        'Automated code scanning',
        'Pull request security checks',
        'Vulnerability detection',
        'Dependency analysis'
      ],
      docsUrl: 'https://docs.example.com/integrations/github'
    },
    {
      id: 'integration-002',
      name: 'GitLab',
      description: 'Integrate with GitLab repositories to monitor security issues and enforce security policies.',
      category: 'development',
      status: 'available',
      logo: '🦊',
      features: [
        'CI/CD pipeline integration',
        'Merge request scanning',
        'Security policy enforcement',
        'Dependency tracking'
      ],
      docsUrl: 'https://docs.example.com/integrations/gitlab'
    },
    {
      id: 'integration-003',
      name: 'Jenkins',
      description: 'Add security scanning to your Jenkins CI/CD pipelines for continuous security testing.',
      category: 'cicd',
      status: 'available',
      logo: '🔧',
      features: [
        'Pipeline integration',
        'Build-time security scanning',
        'Automated security testing',
        'Deployment gates'
      ],
      docsUrl: 'https://docs.example.com/integrations/jenkins'
    },
    {
      id: 'integration-004',
      name: 'AWS',
      description: 'Monitor and secure your AWS cloud infrastructure and services.',
      category: 'cloud',
      status: 'available',
      logo: '☁️',
      features: [
        'Infrastructure scanning',
        'IAM policy analysis',
        'S3 bucket security',
        'Lambda function scanning'
      ],
      docsUrl: 'https://docs.example.com/integrations/aws'
    },
    {
      id: 'integration-005',
      name: 'Azure',
      description: 'Secure your Microsoft Azure cloud resources and services.',
      category: 'cloud',
      status: 'available',
      logo: '☁️',
      features: [
        'Resource security scanning',
        'Azure AD integration',
        'Container registry scanning',
        'Function app security'
      ],
      docsUrl: 'https://docs.example.com/integrations/azure'
    },
    {
      id: 'integration-006',
      name: 'Slack',
      description: 'Receive security alerts and notifications directly in your Slack channels.',
      category: 'monitoring',
      status: 'available',
      logo: '💬',
      features: [
        'Real-time security alerts',
        'Vulnerability notifications',
        'Interactive commands',
        'Custom alert channels'
      ],
      docsUrl: 'https://docs.example.com/integrations/slack'
    },
    {
      id: 'integration-007',
      name: 'Jira',
      description: 'Create and track security issues in Jira for streamlined remediation workflows.',
      category: 'development',
      status: 'available',
      logo: '🎯',
      features: [
        'Automated issue creation',
        'Vulnerability tracking',
        'Custom workflows',
        'Two-way synchronization'
      ],
      docsUrl: 'https://docs.example.com/integrations/jira'
    },
    {
      id: 'integration-008',
      name: 'Docker',
      description: 'Scan Docker images and containers for vulnerabilities and security issues.',
      category: 'security',
      status: 'available',
      logo: '🐳',
      features: [
        'Image scanning',
        'Container runtime security',
        'Base image analysis',
        'Registry integration'
      ],
      docsUrl: 'https://docs.example.com/integrations/docker'
    },
    {
      id: 'integration-009',
      name: 'Kubernetes',
      description: 'Monitor and secure your Kubernetes clusters and workloads.',
      category: 'security',
      status: 'available',
      logo: '⎈',
      features: [
        'Cluster security scanning',
        'Pod security policy enforcement',
        'RBAC analysis',
        'Runtime security monitoring'
      ],
      docsUrl: 'https://docs.example.com/integrations/kubernetes'
    },
    {
      id: 'integration-010',
      name: 'PagerDuty',
      description: 'Route critical security alerts to on-call teams for immediate response.',
      category: 'monitoring',
      status: 'available',
      logo: '🚨',
      features: [
        'Alert routing',
        'On-call scheduling',
        'Incident management',
        'Escalation policies'
      ],
      docsUrl: 'https://docs.example.com/integrations/pagerduty'
    },
    {
      id: 'integration-011',
      name: 'Datadog',
      description: 'Correlate security events with performance and infrastructure metrics.',
      category: 'monitoring',
      status: 'beta',
      logo: '🐶',
      features: [
        'Security event correlation',
        'Unified dashboards',
        'Anomaly detection',
        'Custom alerts'
      ],
      docsUrl: 'https://docs.example.com/integrations/datadog'
    },
    {
      id: 'integration-012',
      name: 'Terraform',
      description: 'Scan Terraform configurations for security issues and compliance violations.',
      category: 'cicd',
      status: 'beta',
      logo: '🏗️',
      features: [
        'IaC security scanning',
        'Policy enforcement',
        'Compliance validation',
        'Drift detection'
      ],
      docsUrl: 'https://docs.example.com/integrations/terraform'
    },
    {
      id: 'integration-013',
      name: 'Google Cloud',
      description: 'Secure your Google Cloud Platform resources and services.',
      category: 'cloud',
      status: 'beta',
      logo: '☁️',
      features: [
        'GCP resource scanning',
        'IAM policy analysis',
        'GKE security',
        'Cloud Function scanning'
      ],
      docsUrl: 'https://docs.example.com/integrations/gcp'
    },
    {
      id: 'integration-014',
      name: 'Okta',
      description: 'Integrate with Okta for identity and access management security.',
      category: 'security',
      status: 'coming-soon',
      logo: '🔐',
      features: [
        'Identity security',
        'Access policy analysis',
        'User provisioning',
        'SSO integration'
      ],
      docsUrl: 'https://docs.example.com/integrations/okta'
    },
    {
      id: 'integration-015',
      name: 'Splunk',
      description: 'Send security events and logs to Splunk for advanced analysis and correlation.',
      category: 'monitoring',
      status: 'coming-soon',
      logo: '📊',
      features: [
        'Security event forwarding',
        'Custom dashboards',
        'Advanced correlation',
        'Long-term storage'
      ],
      docsUrl: 'https://docs.example.com/integrations/splunk'
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Integrations' },
    { id: 'cicd', name: 'CI/CD' },
    { id: 'security', name: 'Security Tools' },
    { id: 'monitoring', name: 'Monitoring & Alerts' },
    { id: 'cloud', name: 'Cloud Providers' },
    { id: 'development', name: 'Development Tools' }
  ];

  // Helper function to render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return (
          <div className="flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span>Available</span>
          </div>
        );
      case 'beta':
        return (
          <div className="flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
            <Clock className="w-4 h-4 mr-1" />
            <span>Beta</span>
          </div>
        );
      case 'coming-soon':
        return (
          <div className="flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
            <Clock className="w-4 h-4 mr-1" />
            <span>Coming Soon</span>
          </div>
        );
      default:
        return null;
    }
  };

  // Filter integrations based on active category, search query, and filters
  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = activeCategory === 'all' || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategoryFilter = categoryFilter.includes(integration.category);
    const matchesStatusFilter = statusFilter.includes(integration.status);
    
    return matchesCategory && matchesSearch && matchesCategoryFilter && matchesStatusFilter;
  });

  // Toggle category filter
  const toggleCategoryFilter = (category: string) => {
    if (categoryFilter.includes(category)) {
      setCategoryFilter(categoryFilter.filter(c => c !== category));
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
  };

  // Toggle status filter
  const toggleStatusFilter = (status: string) => {
    if (statusFilter.includes(status)) {
      setStatusFilter(statusFilter.filter(s => s !== status));
    } else {
      setStatusFilter([...statusFilter, status]);
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
            Integration
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Showcase </span>
          </h1>
          <div className="flex space-x-4">
            <button 
              className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-white/10 transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-white/10 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Filters Dropdown */}
        {showFilters && (
          <div className="bg-gray-800 rounded-lg shadow-lg border border-white/10 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <label key={category.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={categoryFilter.includes(category.id)} 
                        onChange={() => toggleCategoryFilter(category.id)}
                        className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-300">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Status</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={statusFilter.includes('available')} 
                      onChange={() => toggleStatusFilter('available')}
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-300">Available</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={statusFilter.includes('beta')} 
                      onChange={() => toggleStatusFilter('beta')}
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-300">Beta</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={statusFilter.includes('coming-soon')} 
                      onChange={() => toggleStatusFilter('coming-soon')}
                      className="rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-300">Coming Soon</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/70'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map(integration => (
            <div
              key={integration.id}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-3">{integration.logo}</div>
                    <h3 className="text-xl font-semibold">{integration.name}</h3>
                  </div>
                  {renderStatusBadge(integration.status)}
                </div>
                <p className="text-gray-300 mb-6">{integration.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Features</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <a
                    href={integration.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Documentation</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIntegrations.length === 0 && (
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl border border-white/10 p-12 text-center">
            <XCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No integrations found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
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

export default IntegrationShowcase;