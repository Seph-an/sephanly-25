import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Web = ({ large }) => {
  return (
    <section id="Web" className="service-section">
      <div className="service-div">
        <h2 className="sub-headers">Web Development</h2>
        <h3 className="service-sub">
          Your website is the cornerstone of your digital presence. We craft
          responsive, scalable websites that captivate your audience and drive
          conversions.
        </h3>
        <div className="service-detail">
          <Image
            src="/services/web-development-web-design-cloud-computing.svg"
            alt="web-development-web-design-cloud-computing"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="service-image"
          />

          <div className="service-content">
            <p className="service-listIntro">We create sites that are:</p>
            <ul className="service-list">
              <li className="service-listItem">
                <span>Mobile-Responsive & Fast: </span>Optimized for seamless
                performance across all devices, ensuring a smooth and
                lightning-fast user experience.
              </li>
              <li className="service-listItem">
                <span>Scalable & Secure: </span>Using robust back-end solutions
                that grow with your business and protect your data.
              </li>
              <li className="service-listItem">
                <span>Easy Content Management: </span>Empowering you with
                user-friendly CMS solutions, allowing you to update and manage
                your website’s content effortlessly—no technical skills
                required.
              </li>
              <li className="service-listItem">
                <span>SEO-Optimized: </span>Built with clean code, fast load
                times, and structured data to help search engines understand and
                rank your content.
              </li>
            </ul>
            <p className="service-listIntro">
              Whether you need{" "}
              <span>
                an e-commerce platform, a corporate website, or a portfolio
                site,
              </span>{" "}
              our web development solutions lay a strong digital foundation that
              supports your brand and business goals.
            </p>
            <Quotation large={large} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Web;
//web-development-web-design-cloud-computing.svg
