const ContactItem = ({ item }) => {
  return (
    <div className="border-look flex flex-col gap-2">
      <h3 className="text-base sm:text-lg font-medium text-secondary">
        {item.title}
      </h3>
      {item.content.map((content, index) => (
        <p
          key={index}
          className="text-base text-secondary text-opacity-90 sm:text-lg"
        >
          {content}
        </p>
      ))}
    </div>
  );
};

export default ContactItem;
