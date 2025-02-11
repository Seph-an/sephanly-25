import FAQAccordion from "./Accordion";
import Quotation from "@components/Common/Quotation";

export default function FAQ() {
  const generalFAQs = [
    {
      question: "What digital services does your firm offer?",
      answer:
        "Our firm specializes in a full spectrum of digital solutions including web development, SEO, digital marketing, API integration, UI/UX design, and custom software. We focus on delivering innovative, scalable, and data-driven strategies that enhance your online presence and drive business growth.",
    },
    {
      question: "Why should I choose your firm for my digital needs?",
      answer:
        "With a team of experienced professionals and a proven track record, we combine cutting-edge technology with industry best practices to deliver exceptional results. Our customized approach ensures that every solution is tailored to your specific business goals, leading to higher engagement, conversion rates, and long-term success.",
    },
    {
      question:
        "How do you ensure the quality and reliability of your services?",
      answer:
        "We adhere to strict quality standards and continuously update our methodologies with the latest industry trends. From rigorous testing and performance optimization to ongoing analytics and support, our commitment is to deliver reliable, high-quality digital solutions that meet your evolving needs.",
    },
  ];

  const webDevelopmentFAQs = [
    {
      question: "What is your approach to web development?",
      answer:
        "We build responsive, SEO-friendly websites using modern frameworks and best practices. Our development process focuses on performance, security, and scalability, ensuring your site not only looks great but also drives engagement and conversions.",
    },
    {
      question:
        "Do you develop e-commerce platforms and content management systems?",
      answer:
        "Yes, we create custom e-commerce solutions and CMS platforms tailored to your business model. Our sites are optimized for speed and usability, providing seamless shopping experiences and easy content management across all devices.",
    },
    {
      question: "How do you ensure website performance and security?",
      answer:
        "We implement advanced security measures, including SSL encryption, regular audits, and compliance with industry standards. Additionally, our websites are optimized for fast load times and efficient performance, ensuring a smooth user experience even during high traffic periods.",
    },
  ];

  const seoFAQs = [
    {
      question: "What SEO strategies do you employ?",
      answer:
        "Our SEO services encompass comprehensive keyword research, on-page optimization, quality link-building, and content marketing. We use data-driven techniques to improve your website’s ranking on search engines and drive organic traffic.",
    },
    {
      question: "How long does it typically take to see SEO results?",
      answer:
        "SEO is a long-term strategy; you can expect initial improvements within 3-6 months, with more substantial and sustainable results developing over time as our strategies continuously evolve based on performance data.",
    },
    {
      question: "Do you offer local SEO services?",
      answer:
        "Absolutely. Our local SEO strategies are designed to enhance your visibility in regional search results, driving targeted traffic and increasing conversions for businesses serving specific geographic areas.",
    },
  ];

  const digitalMarketingFAQs = [
    {
      question: "What does your digital marketing service include?",
      answer:
        "We offer a comprehensive range of digital marketing services including social media marketing, pay-per-click advertising, email marketing, and content creation. Our campaigns are crafted to boost brand awareness, engage audiences, and maximize ROI.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success is measured through key performance indicators such as website traffic, conversion rates, engagement levels, and overall ROI. We provide detailed analytics and regular reporting to ensure your campaigns are always optimized for peak performance.",
    },
    {
      question:
        "Can your digital marketing services improve my brand’s online presence?",
      answer:
        "Yes, our targeted digital marketing strategies are designed to enhance brand visibility, foster customer engagement, and build a strong online reputation that drives long-term business growth.",
    },
  ];

  const apiIntegrationFAQs = [
    {
      question: "What is API integration and why is it important?",
      answer:
        "API integration connects isolated software systems, enabling them to communicate and share data seamlessly. This is crucial for automating workflows, streamlining operations, and improving overall efficiency across your business applications.",
    },
    {
      question: "How do you ensure the security of API integrations?",
      answer:
        "We implement industry best practices for API security, including robust authentication, data encryption, and continuous monitoring. Our thorough testing and regular audits help protect your data throughout the integration process.",
    },
    {
      question:
        "Can you integrate third-party services with my existing systems?",
      answer:
        "Absolutely. Our team specializes in integrating various third-party APIs and custom solutions, ensuring that all systems work together smoothly to enhance your operational efficiency and data flow.",
    },
  ];

  const uiuxFAQs = [
    {
      question: "What is your approach to UI/UX design?",
      answer:
        "We focus on creating intuitive, engaging, and visually appealing interfaces. Our design process is centered on user research, wireframing, prototyping, and iterative testing to ensure that every digital experience is both accessible and enjoyable.",
    },
    {
      question: "How do you ensure that your designs improve user engagement?",
      answer:
        "By combining user feedback with best practices in design and usability testing, we create interfaces that not only look great but also enhance user satisfaction and drive higher engagement across all digital platforms.",
    },
    {
      question: "Can you redesign an existing website or mobile app?",
      answer:
        "Yes, we offer comprehensive redesign services to modernize your digital presence. Our goal is to improve usability, align with current design trends, and ensure that your digital product meets the evolving needs of your audience.",
    },
  ];

  const customSoftwareFAQs = [
    {
      question: "What types of custom software solutions do you develop?",
      answer:
        "We develop bespoke software solutions ranging from enterprise applications to mobile apps. Our custom software is designed to meet your unique business requirements, ensuring scalability, security, and enhanced performance.",
    },
    {
      question:
        "How do you ensure that custom software aligns with my business needs?",
      answer:
        "Our development process involves close collaboration with your team to fully understand your objectives. We follow an agile methodology that includes regular feedback and testing, ensuring that the final product is perfectly aligned with your vision and operational goals.",
    },
    {
      question: "What technologies do you use for custom software development?",
      answer:
        "We employ modern programming languages, frameworks, and tools that best suit your project’s requirements. Our commitment is to use the most effective and future-proof technologies to build robust, efficient, and scalable software solutions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-secondary">
      <FAQAccordion title="General FAQs" items={generalFAQs} />
      <FAQAccordion title="Web Development FAQs" items={webDevelopmentFAQs} />
      <FAQAccordion title="SEO FAQs" items={seoFAQs} />
      <FAQAccordion
        title="Digital Marketing FAQs"
        items={digitalMarketingFAQs}
      />
      <FAQAccordion title="API Integration FAQs" items={apiIntegrationFAQs} />
      <FAQAccordion title="UI/UX Design FAQs" items={uiuxFAQs} />
      <FAQAccordion title="Custom Software FAQs" items={customSoftwareFAQs} />
      <div className="py-8 flex flex-col items-center">
        <p className="max-w-3xl opacity-90">
          <span className="text-lg text-primary font-medium">
            Ready to elevate your digital success?
          </span>{" "}
          Contact us today to discover how our integrated services can transform
          your business and drive sustainable growth.
        </p>
        <Quotation large={true} />
      </div>
    </div>
  );
}
