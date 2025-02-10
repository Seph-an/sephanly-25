// import concepts from "./Analogy";

// const Layman = () => {
//   return (
//     <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-12">
//       {concepts.map((concept, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-start gap-3 border shadow-md p-3 rounded-lg"
//         >
//           <h3 className="font-semibold text-start text-primary">
//             {index + 1}. <span className="underline">{concept.concept}</span>
//           </h3>
//           <h3 className="font-semibold text-start">
//             {" "}
//             <span className="text-primary">Analogy:</span> {concept.analogy}
//           </h3>
//           <p>{concept.explanation}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Layman;
// import concepts from "./Analogy";

// const Layman = () => {
//   return (
//     // Outer wrapper to control the overall max-width and provide horizontal scrolling on mobile
//     <div className="max-w-7xl my-12 overflow-x-auto">
//       {/*
//         Inner container:
//         - On mobile (default): flex container with horizontal scrolling (flex-nowrap).
//         - On small screens and above: switch to grid layout.
//       */}
//       <div className="flex flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//         {concepts.map((concept, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start gap-3 border shadow-md p-3 rounded-lg
//                        flex-shrink-0 w-[50%] sm:w-auto" // Card width on mobile is 90%
//           >
//             <h3 className="font-semibold text-start text-primary">
//               {index + 1}. <span className="underline">{concept.concept}</span>
//             </h3>
//             <h3 className="font-semibold text-start">
//               <span className="text-primary">Analogy:</span> {concept.analogy}
//             </h3>
//             <p>{concept.explanation}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Layman;

import concepts from "./Analogy";

const Layman = () => {
  return (
    // Outer wrapper that keeps the overall max-width and handles overflow
    <div className=" max-w-7xl my-12 overflow-x-auto sm:overflow-x-visible">
      {/*
        Inner container:
        - On mobile (default): flex with horizontal scrolling and scroll snapping.
        - On small screens and up: switch to grid layout.
      */}
      <div className="flex snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-[90vw] sm:w-auto border shadow-md p-3 rounded-lg"
          >
            <h3 className="font-semibold text-start text-primary">
              {index + 1}. <span className="underline">{concept.concept}</span>
            </h3>
            <h3 className="font-semibold text-start">
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
