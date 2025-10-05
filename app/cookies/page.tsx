import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6 border-b border-purple-500/20">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            TruFan.ai
          </Link>
          <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-400 mb-12">Last Updated: October 5, 2025</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies for various purposes, including:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Enabling certain functions of the website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Providing analytics and tracking site usage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Storing your preferences and settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Enhancing security and preventing fraud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Personalizing content and advertisements</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and user authentication. The website cannot function properly without these cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this information to improve our website and services.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and login information.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use third-party services that also set cookies on your device. These include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong>Google Analytics:</strong> For website analytics and performance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong>Stripe:</strong> For payment processing and fraud prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong>Social Media Platforms:</strong> For social sharing and marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong>Advertising Networks:</strong> For targeted advertising</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                These third parties have their own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">5. How to Control Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><strong>Cookie Banner:</strong> When you first visit our site, you can accept or reject optional cookies through our cookie consent banner.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span><strong>Opt-Out Links:</strong> For third-party cookies, you can use opt-out mechanisms provided by the third parties.</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that if you choose to block or delete cookies, some features of our website may not function properly.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">6. Browser-Specific Instructions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Here&apos;s how to manage cookies in common browsers:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">7. Do Not Track Signals</h2>
              <p className="text-gray-300 leading-relaxed">
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to have your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we are committed to respecting your privacy choices.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last Updated&quot; date.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">9. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>Email: <a href="mailto:privacy@trufan.ai" className="text-cyan-400 hover:text-purple-400 transition-colors">privacy@trufan.ai</a></li>
                <li>Address: 123 Innovation Drive, Suite 400, San Francisco, CA 94105</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                For more information about how we handle your personal data, please see our <a href="/privacy" className="text-cyan-400 hover:text-purple-400 transition-colors">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 bg-slate-900/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            TruFan.ai
          </div>
          <p className="text-gray-500 text-sm">© 2025 TruFan.ai, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
