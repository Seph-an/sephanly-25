const coreValues = [
  {
    title: "Innovation",
    content:
      "We leverage cutting-edge technology to deliver revolutionary digital solutions that transform businesses and drive market leadership.",
  },
  {
    title: "Integrity",
    content:
      "We uphold transparency and ethical practices in every project, ensuring trust and reliability in our digital services.",
  },
  {
    title: "Collaboration",
    content:
      "Our team works closely with clients and partners, combining expertise and creativity to develop scalable digital strategies.",
  },
  {
    title: "Excellence",
    content:
      "We are committed to excellence in every facet—from design to development and digital marketing—ensuring superior performance and measurable results.",
  },
  {
    title: "Customer Centricity",
    content:
      "Our client-first approach drives us to craft personalized digital experiences that enhance engagement, growth, and long-term success.",
  },
  {
    title: "Agility",
    content:
      "We embrace agility in our processes, seamlessly adapting to market shifts and client needs to deliver dynamic, forward-thinking digital solutions.",
  },
];

const CoreValuesGrid = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-32">
      {coreValues.map((value, index) => {
        return (
          <div key={index} className={`about-card`}>
            <h3 className="about-card-title">
              {index + 1}. {value.title}
            </h3>
            <p className="text-secondary opacity-85">{value.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoreValuesGrid;
