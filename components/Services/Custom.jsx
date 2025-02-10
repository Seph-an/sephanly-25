import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Custom = ({ large }) => {
  return (
    <section id="Custom" className="service-section bg-tertiary">
      <div className="service-div">
        <h2 className="sub-headers">Customer Software </h2>
        <h3 className="service-sub">
          Empower your business with
          <span className="text-primary">
            {" "}
            tailored software solutions
          </span>{" "}
          built to address your unique challenges and opportunities that align
          perfectly with your operational goals.
        </h3>
        <div className="service-detail">
          <div className="service-content">
            <p className="service-listIntro">We specialize in:</p>
            <ul className="service-list">
              <li className="service-listItem">
                <span>Tailored Applications: </span>Software built from the
                ground up to meet your specific business needs.
              </li>
              <li className="service-listItem">
                <span>Agile Development: </span>Rapid prototyping, continuous
                improvement, and seamless integration.
              </li>
              <li className="service-listItem">
                <span>Scalability & Performance: </span>Solutions that grow with
                your business and adapt to changing market demands.
              </li>
              <li className="service-listItem">
                <span>Robust Security: </span>Best-in-class security measures to
                safeguard your critical data and operations.
              </li>
            </ul>
            <p className="service-listIntro">
              From enterprise systems to customer-facing applications, our
              custom software solutions empower you to{" "}
              <span>innovate and outperform the competition.</span>
            </p>
            <Quotation large={large} />
          </div>
          <Image
            src="/services/custom-software-online-busines-seo-digital-marketing.svg"
            alt="custom-software-online-busines-seo-digital-marketing"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="service-image"
          />
        </div>
      </div>
    </section>
  );
};
export default Custom;
// <a href="https://storyset.com/online">Online illustrations by Storyset</a>
