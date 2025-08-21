import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">
          Privacy
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Policy </span>
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p className="mb-4">
              At SecureOPS ASPM, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our application security platform.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us when you register for an account, 
              use our services, or communicate with us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information such as name, email address, and company details</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Information about your repositories and code (with your explicit permission)</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending technical notices, updates, and support messages</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Personalizing and improving your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect the security of your personal information. 
              However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            <p>
              We use industry-standard encryption, secure data centers, regular security audits, and strict access controls 
              to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this 
              privacy policy. We will retain and use your information to the extent necessary to comply with our legal 
              obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@secureops.com.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-gray-400 text-sm">
          Last Updated: August 19, 2025
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

export default Privacy;