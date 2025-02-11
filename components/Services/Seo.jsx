import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Seo = ({ large }) => {
  return (
    <section id="Seo" className="service-section bg-tertiary">
      <div className="service-div">
        <h2 className="sub-headers">Search Engine Optimization (SEO)</h2>
        <h3 className="service-sub">
          <span className="text-primary">
            Rise to the top of search engine results
          </span>{" "}
          with our advanced SEO strategies. We focus on both on-page and
          off-page optimization to drive organic traffic and build your online
          authority
        </h3>
        <div className="service-detail">
          <div className="service-content order-2 lg:order-1">
            <p className="service-listIntro">
              Our comprehensive approach includes:
            </p>
            <ul className="service-list">
              <li className="service-listItem">
                <span>Keyword Optimization: </span>In-depth research to identify
                high-impact keywords for your niche.
              </li>
              <li className="service-listItem">
                <span>Technical SEO: </span>Audits, site speed improvements, and
                mobile optimization to ensure peak performance.
              </li>
              <li className="service-listItem">
                <span>Content Strategy: </span>Compelling, value-driven content
                that engages users and attracts backlinks.
              </li>
              <li className="service-listItem">
                <span>Local & Global Reach: </span>Tailored strategies for local
                businesses and international brands alike.
              </li>
            </ul>
            <p className="service-listIntro">
              With our proven SEO tactics, you’ll see a steady increase in{" "}
              <span>visibility, traffic, and ultimately, revenue.</span>
            </p>
            <Quotation large={large} />
          </div>
          <Image
            src="/services/digital-solutions-search-engine-optimization-increased-online-sales.svg"
            alt="digital-solutions-search-engine-optimization-increased-online-sales"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="service-image order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
};
export default Seo;
