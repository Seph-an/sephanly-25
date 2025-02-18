import concepts from "./Analogy";

const Layman = () => {
  return (
    // Outer wrapper that keeps the overall max-width and handles overflow
    <div className="w-full pb-5 my-8 sm:my-12 overflow-x-auto snap-x snap-mandatory sm:overflow-x-visible sm:max-w-7xl mx-auto sm:snap-none">
      <div className="flex gap-3 xl:gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className="bg-green-100 snap-start flex-shrink-0 w-[80vw] sm:w-auto shadow-md p-4 rounded-lg"
          >
            <h3 className="font-semibold text-start text-primary">
              {index + 1}. <span className="underline">{concept.concept}</span>
            </h3>
            <h3 className="font-medium text-start my-1">
              <span className="text-primary">Analogy:</span> {concept.analogy}
            </h3>
            <p>{concept.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layman;
