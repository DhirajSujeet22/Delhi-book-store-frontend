import React from 'react';

const PolicyPage = () => {
  return (
    <div className="mx-auto p-6 md:p-8 lg:p-12 bg-white w-full">
      <h1 className="text-[50px] font-bold mb-4 text-center text-red-600">Privacy Policy</h1>
      <p className="text-gray-700 mb-6">
        We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.
      </p>

      {/* Note Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Note</h2>
        <p className="text-gray-600 mb-2">
          Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
        </p>
        <p className="text-gray-600 mb-2">
          By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree, please do not use or access our Website.
        </p>
        <p className="text-gray-600">
          By mere use of the Website, you specifically consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.
        </p>
      </div>

      {/* Personal Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal information we collect</h2>
        <p className="text-gray-600 mb-4">
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.
        </p>

        <h3 className="text-lg font-semibold mb-2">We collect Device Information using the following technologies:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Cookies:</strong> Data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" className="text-blue-500 underline">www.allaboutcookies.org</a>.</li>
          <li><strong>Log files:</strong> Track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
          <li><strong>Web beacons, tags, and pixels:</strong> Electronic files used to record information about how you browse the Site.</li>
        </ul>
      </div>

      {/* How do we use your personal information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How do we use your personal information?</h2>
        <p className="text-gray-600 mb-4">
          We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Communicate with you</li>
          <li>Screen our orders for potential risk or fraud</li>
          <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
        </ul>
      </div>

      {/* Security Precautions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Security Precautions</h2>
        <p className="text-gray-600 mb-4">
          Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.
        </p>
      </div>

      {/* Consent */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Consent</h2>
        <p className="text-gray-600 mb-4">
          By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.
        </p>
      </div>

      {/* Changes to Policy */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to Our Privacy Policy</h2>
        <p className="text-gray-600">
          If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
