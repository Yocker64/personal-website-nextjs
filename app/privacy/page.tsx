import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const lastUpdated = "February 7, 2026";
  const siteName = "Yocker64";
  const siteUrl = "https://yocker64.com";
  const ownerName = "Sandoval Mario";
  const contactEmail = "mdyoc74@gmail.com";

  return (
    <div className="sm:px-6 lg:px-8 font-sans bg-white text-black dark:bg-[#242535] dark:bg-gradient-to-br dark:from-[#242535] dark:to-[#10101C] dark:text-white">
      <Navbar />
      
      <div className="max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden p-8 sm:p-12 mt-6 mb-6 bg-white border border-gray-100 dark:bg-[#242535] dark:border-gray-700">
        
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          <section>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              This privacy policy describes how {siteName} (operated by {ownerName}, “we,” “us,” or “our”) collects, uses, and shares information when you visit {siteUrl} (the “Site”).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Information You Provide Directly</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Newsletter Subscriptions:</strong> We may collect your email address if you voluntarily subscribe to our newsletter. This is used solely to send you updates, new posts, or content related to {siteName}. You may unsubscribe at any time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Information Collected Automatically</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When you visit our Site, we automatically collect certain information about your device and your visit, including your IP address, browser type, operating system, referring URLs, and information about how you interact with the Site. We collect this information using cookies and similar technologies via Google Analytics 4.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
              <li>To operate and maintain the Site.</li>
              <li>To improve the design and content of the Site based on user behavior.</li>
              <li>To send you newsletters and updates (only if you have opted in).</li>
              <li>To analyze Site traffic and protect against spam or abuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              We use trusted third-party services to help us operate our Site. These services may collect information about you:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-[#1E1E2E] p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Google Analytics 4 (GA4)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  We use GA4 to understand how visitors interact with our content. Google Analytics collects data such as pages visited, time spent on the site, and general location data (not precise geolocation). Google uses cookies to collect this information. You can learn more about <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">how Google uses data here</a>.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1E1E2E] p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Hostinger</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Our website is hosted on Hostinger. Like most hosting providers, Hostinger may collect technical logs (including IP addresses) to ensure the security and performance of their servers.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1E1E2E] p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Embedded Content (YouTube, Spotify, Social Media)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Articles on this site may include embedded content (e.g., YouTube videos, Spotify players). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-[#1E1E2E] p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Google Fonts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  We use Google Fonts to display typography. Your browser may request fonts from Google servers, which may log your IP address for caching and optimization purposes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use cookies to analyze site traffic and optimize your website experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Data Retention</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. If you subscribe to our newsletter, we retain your email address until you unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request that we correct any information you believe is inaccurate.</li>
              <li>Request that we delete your personal data.</li>
              <li>Withdraw consent for data processing (e.g., unsubscribing from newsletters).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 inline-block">
              <p className="font-semibold text-blue-900 dark:text-blue-100">{ownerName}</p>
              <a href={`mailto:${contactEmail}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {contactEmail}
              </a>
            </div>
          </section>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;