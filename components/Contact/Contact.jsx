import ContactItem from "./ContactItem";

const Contact = () => {
  const contacts = [
    { title: "Phone", content: ["02-07-86-86-06"], canCopy: true },
    { title: "E-mail", content: ["solutions@sephanly.com"], canCopy: true },
    {
      title: "Hours",
      content: ["8:00 am - 5:00 pm, Mon - Fri", "8:00 am - 1:00 pm, Sat"],
      canCopy: false,
    },
    {
      title: "Socials",
      content: ["Twitter: @sephanly", "Facebook: sephanly"],
      canCopy: false,
    },
  ];
  return (
    <section className="text-secondary min-h-screen w-full py-5 flex items-center justify-center lg:py-24">
      <div className="contact-border flex-1 max-w-7xl my-auto ">
        <h1 className="  mt-3 mb-2 text-xl xs-custom:text-2xl sm:text-4xl font-semibold leading-[1.15] text-cool-blue md:mb-5">
          Get in touch
        </h1>
        <p className=" text-base text-cool-blue opacity-90 max-w-3xl sm:text-xl">
          Hello 🖐, we specialize in guiding individuals to achieve their
          professional goals, and take great pride in their progress and
          success. Talk to us.
        </p>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 mt-12 lg:mt-24 mb-7 xs:mt-14 sm:mt-16">
          {contacts.map((item, index) => (
            <ContactItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
