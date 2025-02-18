import React from "react";

const CookiePolicy = () => {
  return (
    <div className="my-16 md:my-24 xl:my-28 mr-auto max-w-4xl text-secondary">
      <h1 className="text-4xl font-bold mt-12 mb-6">Cookie Policy</h1>

      <p className="mb-4 text-lg">
        This <span className="text-primary font-semibold">Cookie Policy</span>{" "}
        explains how we use cookies and similar tracking technologies on our
        website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device when you
        visit a website. They help improve user experience, analyze site
        performance, and support marketing activities.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. How We Use Cookies
      </h2>
      <p className="mb-4">We use cookies to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="text-primary font-medium">
            Enhance website functionality:
          </span>{" "}
          Remember user preferences and login sessions.
        </li>
        <li>
          <span className="text-primary font-medium">
            Analyze website traffic:
          </span>{" "}
          Understand user interactions and improve site performance.
        </li>
        <li>
          <span className="text-primary font-medium">
            Marketing and advertising:
          </span>{" "}
          Deliver relevant ads and track campaign effectiveness.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. Types of Cookies We Use
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="text-primary font-medium">Essential Cookies:</span>{" "}
          Required for core website functionality.
        </li>
        <li>
          <span className="text-primary font-medium">Analytical Cookies:</span>{" "}
          Help us understand user behavior and improve services.
        </li>
        <li>
          <span className="text-primary font-medium">Marketing Cookies:</span>{" "}
          Used for personalized advertising and tracking campaigns.
        </li>
        <li>
          <span className="text-primary font-medium">Third-Party Cookies:</span>{" "}
          Placed by third-party services (e.g., analytics, social media
          plugins).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        4. Managing Your Cookie Preferences
      </h2>
      <p className="mb-4">
        You can control cookie settings through your browser. Most browsers
        allow you to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Accept or reject cookies.</li>
        <li>Delete stored cookies.</li>
        <li>Enable notifications before cookies are stored.</li>
      </ul>
      <p className="mb-4">
        Note that disabling cookies may impact website functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Third-Party Services
      </h2>
      <p className="mb-4">
        Our website may use third-party services that also place cookies, such
        as:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Google Analytics for website traffic analysis.</li>
        <li>Advertising networks for targeted ads.</li>
        <li>Social media platforms for embedded content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        6. Updates to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Any changes will be
        reflected on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Cookie Policy, please contact us at:
      </p>
      <p className="font-semibold text-primary">support@sephanly.com</p>
    </div>
  );
};

export default CookiePolicy;
