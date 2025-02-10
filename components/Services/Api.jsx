import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Api = ({ large }) => {
  return (
    <section id="Api" className="service-section ">
      <div className="service-div">
        <h2 className="sub-headers">API Integration</h2>
        <h3 className="service-sub">
          <span className="text-primary">
            Streamline your operations and expand functionality
          </span>{" "}
          with our expert API Integration services. We connect your systems and
          services to create a seamless digital ecosystem.
        </h3>
        <div className="service-detail">
          <Image
            src="/services/api-integration-online-payment-shopping-cart.svg"
            alt="api-integration-online-payment-shopping-cart"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="service-image"
          />
          <div className="service-content">
            <p className="service-listIntro">
              Our integration solutions include but are not limited to:
            </p>
            <ul className="service-list">
              <li className="service-listItem">
                <span>Online Payment Gateways: </span>Smooth and secure
                integration with providers like{" "}
                <span className="dark-span">Mpesa, Pesapal,</span> and{" "}
                <span className="dark-span">Paystack</span> to support
                hassle-free transactions.
              </li>
              <li className="service-listItem">
                <span>Productivity Suites: </span>Enhance collaboration by
                integrating{" "}
                <span className="dark-span">Microsoft 365 (M365) </span>{" "}
                services and{" "}
                <span className="dark-span">Google Workspace </span>
                into your workflow.
              </li>
              <li className="service-listItem">
                <span>Custom Data Connections: </span>Tailored APIs that bridge
                your CRM, ERP, and other business-critical applications.
              </li>
              <li className="service-listItem">
                <span>Automated Workflows: </span>Reduce manual tasks and errors
                with efficient, automated processes.
              </li>
            </ul>
            <p className="service-listIntro">
              Experience a connected environment where all your essential tools
              work together effortlessly to
              <span> drive business growth.</span>
            </p>
            <Quotation large={large} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Api;
//web-development-web-design-cloud-computing.svg
