import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Digital = ({ large }) => {
  return (
    <section id="Digital" className="service-section bg-tertiary">
      <div className="service-div">
        <h2 className="sub-headers">Digital Marketing</h2>
        <h3 className="service-sub">
          <span className="text-primary">
            Transform your brand’s online impact
          </span>{" "}
          with our full-service Digital Marketing solutions. We combine
          creativity with data-driven strategies to deliver measurable results
          across multiple channels.
        </h3>
        <div className="service-detail">
          <div className="service-content order-2 lg:order-1 ">
            <p className="service-listIntro">
              Our digital campaigns are designed to:
            </p>
            <ul className="service-list">
              <li className="service-listItem">
                <span>Boost Engagement: </span>Social media, email, and content
                marketing that connects with your target audience.
              </li>
              <li className="service-listItem">
                <span>Drive Conversions: </span>PPC, retargeting, and influencer
                partnerships that turn visitors into loyal customers.
              </li>
              <li className="service-listItem">
                <span>Track & Optimize: </span>Advanced analytics to
                continuously refine your campaigns for maximum ROI.
              </li>
              <li className="service-listItem">
                <span>Enhance Brand Awareness: </span>Eye-catching visuals and
                compelling storytelling that set you apart from the competition.
              </li>
            </ul>
            <p className="service-listIntro">
              From strategy to execution, our digital marketing experts are
              ready to <span>help your business thrive online.</span>
            </p>
            <Quotation large={large} />
          </div>
          <Image
            src="/services/digital-marketing-more-likes-on-social-media-more-money.svg"
            alt="digital-marketing-more-likes-on-social-media-more-money"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="service-image order-1 lg:order-2 "
          />
        </div>
      </div>
    </section>
  );
};
export default Digital;
