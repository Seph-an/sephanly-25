import concepts from "./Analogy";

const Layman = () => {
  return (
    <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-12">
      {concepts.map((concept, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-2 border p-3 rounded-lg"
        >
          <h3 className="font-semibold text-start text-primary">
            {index + 1}. <span className="underline">{concept.concept}</span>
          </h3>
          <h3 className="font-semibold text-start">
            {" "}
            <span className="text-primary">Analogy:</span> {concept.analogy}
          </h3>
          <p>{concept.explanation}</p>
        </div>
      ))}
    </div>
  );
};
export default Layman;
