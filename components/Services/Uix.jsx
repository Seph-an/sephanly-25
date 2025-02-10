import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Uix = ({ large }) => {
  return (
    <section id="Uix" className="service-section ">
      <div className="service-div">
        <h2 className="sub-headers">User Interface/User Experience (UI/UX)</h2>
        <h3 className="service-sub">
          <span className="text-primary">
            Deliver exceptional user experiences
          </span>{" "}
          with our innovative UI/UX design services. Our design philosophy
          centers on user-centric approaches, ensuring that every interaction is
          intuitive, engaging, and effective.
        </h3>
        <div className="service-detail">
          <Image
            src="/services/user-interface-user-experience-beautiful-websites.svg"
            alt="user-interface-user-experience-beautiful-websites"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="service-image"
          />
          <div className="service-content">
            <p className="service-listIntro">
              We use industry-leading tools like{" "}
              <span className="text-primary">Figma</span> to bring your ideas to
              life, featuring:
            </p>
            <ul className="service-list">
              <li className="service-listItem">
                <span>Intuitive Interfaces: </span>Clean, modern designs that
                make navigation a breeze.
              </li>
              <li className="service-listItem">
                <span>Interactive Prototypes: </span>Real-time feedback and
                iterative testing to perfect your user journey.
              </li>
              <li className="service-listItem">
                <span>Visual Consistency: </span>Cohesive design elements that
                reflect your brand’s identity.
              </li>
              <li className="service-listItem">
                <span>Accessibility & Responsiveness: </span>Designs that cater
                to all users and devices, ensuring a seamless experience across
                the board.
              </li>
            </ul>
            <p className="service-listIntro">
              Let our UI/UX experts transform your digital touchpoints into
              memorable experiences that{" "}
              <span>keep your users coming back.</span>
            </p>
            <Quotation large={large} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Uix;
