import CopyText from "@components/Common/Copy";
const ContactItem = ({ item }) => {
  const canCopy = item.canCopy;
  return (
    <div className="border-look flex flex-col gap-2">
      <h3 className="text-base sm:text-lg font-medium text-secondary">
        {item.title}
      </h3>
      {item.content.map((content, index) =>
        canCopy ? (
          <CopyText
            key={index}
            text={content}
            className="text-base text-secondary text-opacity-90 sm:text-lg"
          />
        ) : (
          <p
            key={index}
            className="text-base text-secondary text-opacity-90 sm:text-lg"
          >
            {content}
          </p>
        )
      )}
    </div>
  );
};

export default ContactItem;
