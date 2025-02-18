import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="my-16 md:my-24 xl:my-28 mr-auto max-w-4xl  text-secondary">
      <h1 className="text-4xl font-bold mt-12 mb-6">Privacy Policy</h1>

      <p className="mb-4 text-lg">
        Welcome to our{" "}
        <span className="text-primary font-semibold">Privacy Policy</span>. Your
        privacy is critically important to us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We collect various types of information in order to provide and improve
        our services, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="text-primary font-medium">
            Personal Information:
          </span>{" "}
          Name, email address, phone number, and billing details.
        </li>
        <li>
          <span className="text-primary font-medium">Technical Data:</span> IP
          address, browser type, device information, and website interaction
          data.
        </li>
        <li>
          <span className="text-primary font-medium">
            Cookies & Tracking Technologies:
          </span>{" "}
          To personalize content, analyze traffic, and improve user experience.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">Your data is used for the following purposes:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide, operate, and maintain our services.</li>
        <li>To enhance user experience and improve functionality.</li>
        <li>
          To send newsletters, promotions, and other marketing communications
          (opt-in required).
        </li>
        <li>To analyze website traffic and improve performance.</li>
        <li>
          To detect and prevent fraud, unauthorized access, and other security
          concerns.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell or trade your personal information. However, we may share
        your data with:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="text-primary font-medium">Service Providers:</span>{" "}
          Third-party vendors assisting with payment processing, analytics, or
          cloud storage.
        </li>
        <li>
          <span className="text-primary font-medium">Legal Compliance:</span> If
          required by law or to protect against legal claims.
        </li>
        <li>
          <span className="text-primary font-medium">Business Transfers:</span>{" "}
          In case of a merger, acquisition, or sale of assets.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures, including encryption,
        access controls, and secure servers to protect your data. However, no
        method of transmission over the Internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access, update, or delete your personal data upon request.</li>
        <li>Opt-out of receiving marketing communications at any time.</li>
        <li>
          Request data portability in a structured, machine-readable format.
        </li>
        <li>Withdraw consent for data processing where applicable.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to external sites. We are not responsible
        for their privacy policies or practices, and we encourage you to review
        their policies before providing any personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        7. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this policy periodically. Any changes will be reflected on
        this page, and we encourage you to review this policy regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Privacy Policy, please contact us
        at:
      </p>
      <p className="font-semibold text-primary">support@sephanly.com</p>
    </div>
  );
};

export default PrivacyPolicy;
