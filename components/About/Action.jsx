import Button from "@components/Common/Button";
import Image from "next/image";
const actions = [
  {
    title: "Find a digital solution",
    content: `Don't wait—supercharge your business with our cutting-edge digital services. 
    Act now to transform your online presence and stay ahead of the competition!`,
    isfaq: false,
  },
  {
    title: "Frequently asked questions",
    content: ` Dive into our FAQ section for immediate, 
    clear answers that empower you to take control of your digital journey today.`,
    isfaq: true,
  },
];
const Action = () => {
  return (
    <div className="flex justify-between flex-wrap items-center md:items-stretch  gap-6 my-6 sm:my-12 md:my-20">
      {actions.map((action, index) => {
        return (
          <div key={index} className={`about-action`}>
            <Image
              src={
                action.isfaq
                  ? `/services/digital-solutions-search-engine-optimization-increased-online-sales.svg`
                  : `/services/user-interface-user-experience-beautiful-websites.svg`
              }
              alt={
                action.isfaq
                  ? `digital-solutions-search-engine-optimization-increased-online-sales`
                  : `user-interface-user-experience-beautiful-websites`
              }
              width={100}
              height={80}
              sizes="(max-width: 600px) 200px, (max-width: 1200px) 200px, 200px"
              className="absolute bottom-0 right-0 hidden md:block service-image"
            />
            <h3 className="about-card-title border-l-2 border-primary  pl-2">
              {action.title}
            </h3>
            <p className="text-secondary opacity-85">{action.content}</p>
            {action.isfaq ? (
              <Button
                link={"FAQs-about-web-development-and-seo"}
                content={"Find answers"}
              />
            ) : (
              <Button
                link={"digital-solutions"}
                content={"Explore solutions"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Action;
