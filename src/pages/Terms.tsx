import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
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
          Terms of
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Service </span>
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p className="mb-4">
              Welcome to SecureOPS ASPM. These Terms of Service ("Terms") govern your access to and use of the SecureOPS ASPM
              application security platform, including any associated websites, APIs, and services (collectively, the "Service").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, 
              you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Account Registration</h2>
            <p className="mb-4">
              To use certain features of the Service, you may be required to register for an account. You agree to provide 
              accurate, current, and complete information during the registration process and to update such information 
              to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
              You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Use of the Service</h2>
            <p className="mb-4">
              You may use the Service only in compliance with these Terms and all applicable laws, rules, and regulations. 
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Use the Service to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to any portion of the Service or any other systems or networks connected to the Service</li>
              <li>Use the Service to develop, generate, transmit, or store information that infringes the intellectual property rights of any third party</li>
              <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Service</li>
              <li>Use the Service in a manner that could damage, disable, overburden, or impair the Service</li>
              <li>Use any robot, spider, or other automated device to access the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are owned by SecureOPS and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or transmit 
              any of the material obtained through the Service, except as necessary for your personal, non-commercial use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">User Content</h2>
            <p className="mb-4">
              You retain all rights in, and are solely responsible for, the content you post to the Service. By posting content 
              to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, 
              publish, translate, and distribute such content in connection with providing the Service.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to post any content to the Service, and that 
              your content does not violate the rights of any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Payment Terms</h2>
            <p className="mb-4">
              Certain aspects of the Service may be provided for a fee. You agree to pay all fees associated with your use of the Service.
            </p>
            <p className="mb-4">
              We may change our fees at any time. If we change our fees, we will provide notice of the change on the website or by email, 
              at our option, at least 14 days before the change is to take effect.
            </p>
            <p>
              Unless otherwise stated, all fees are quoted in U.S. Dollars. You are responsible for paying all taxes associated with your 
              use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
              for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, 
              you may simply discontinue using the Service or contact us to request account deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted or error-free, that defects will be corrected, or that 
              the Service or the servers that make it available are free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL SECUREOPS ASPM, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, 
              OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at 
              least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined 
              at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@secureopsaspm.com.
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

export default Terms;