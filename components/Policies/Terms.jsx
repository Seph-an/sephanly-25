import React from "react";

const TermsOfService = () => {
  return (
    <div className="my-16 md:my-24 xl:my-28 mr-auto max-w-4xl  text-secondary">
      <h1 className="text-4xl font-bold mt-12 mb-6">Terms of Service</h1>

      <p className="mb-4 text-lg">
        Welcome to our{" "}
        <span className="text-primary font-semibold">Terms of Service</span>.
        Please read these terms carefully before using our services. By
        accessing or using our services, you agree to comply with and be bound
        by the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing, browsing, or using our services, you confirm that you have
        read, understood, and agreed to these Terms of Service. If you do not
        agree to these terms, please discontinue use immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Services Provided</h2>
      <p className="mb-4">
        We provide a variety of digital services, including but not limited to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Software development</li>
        <li>Web development</li>
        <li>Digital marketing</li>
        <li>Search engine optimization (SEO)</li>
        <li>API integration</li>
        <li>Custom software solutions</li>
        <li>UI/UX design and consulting</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. User Responsibilities
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Users must provide accurate and up-to-date information when using our
          services.
        </li>
        <li>
          Users are responsible for maintaining the confidentiality of their
          account credentials.
        </li>
        <li>
          Users must comply with all applicable laws and regulations while using
          our services.
        </li>
        <li>
          Any unauthorized use of our services, including hacking, data
          scraping, or attempting to disrupt services, is strictly prohibited.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Payment and Fees</h2>
      <p className="mb-4">
        All fees for services are specified in agreements or invoices provided.
        Users must adhere to the following conditions:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Payments must be made on time as per the agreed terms.</li>
        <li>
          Failure to make timely payments may result in service suspension or
          termination.
        </li>
        <li>All payments are non-refundable unless stated otherwise.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Limitation of Liability
      </h2>
      <p className="mb-4">
        We are not liable for any direct, indirect, incidental, or consequential
        damages resulting from the use or inability to use our services. Users
        assume all risks associated with using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to our services
        at any time, with or without notice, if you violate these terms or
        engage in any activity that is deemed harmful to our company, services,
        or other users.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        7. Intellectual Property Rights
      </h2>
      <p className="mb-4">
        All content, including software, graphics, logos, and text provided by
        us, is the exclusive property of our company. Unauthorized use,
        reproduction, or distribution of our intellectual property is strictly
        prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Privacy Policy</h2>
      <p className="mb-4">
        Your use of our services is also governed by our{" "}
        <a href="/privacy-policy" className="text-primary font-semibold">
          Privacy Policy
        </a>
        . Please review it to understand how we collect, use, and protect your
        data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service periodically. Any changes will be
        posted on this page, and continued use of our services signifies
        acceptance of the modified terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding our Terms of Service,
        please contact us at:
      </p>
      <p className="font-semibold text-primary">support@sephanly.com</p>
    </div>
  );
};

export default TermsOfService;
