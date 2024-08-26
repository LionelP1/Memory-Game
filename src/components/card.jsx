// import React from "react";

// export default function Card({ card, onClick, isBackSide }) {
//   return (
//     <div className="card-inner" onClick={onClick}>
//       {isBackSide ? (
//         <div className="card-back">
//           <button className="card">
//             <img
//               src={""} // Replace with the actual path to the back image
//               alt="pokemon card back"
//               className="back"
//             />
//           </button>
//         </div>
//       ) : (
//         <div className="card-front">
//           <img
//             src={card.image}
//             alt={card.name}
//             className="card-image"
//             draggable="false"
//           />
//           <p className="card-name">
//             <span className="name">{card.name}</span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }





import React from "react";

export default function Card({ card, onClick, cardState }) {
  return (
    <div className="card-inner">
      {cardState === "back" && (
        <div className="card-back" onClick={onClick}>
          <img
            src={""} // Replace with the actual path to the back image
            alt="Card Back"
            className="back"
          />
        </div>
      )}

      {cardState === "front" && (
        <div className="card-front">
          <img
            src={card.image}
            alt={card.name}
            className="card-image"
            draggable="false"
          />
          <p className="card-name">
            <span className="name">{card.name}</span>
          </p>
        </div>
      )}

      {cardState === "invisible" && (
        <div className="card-invisible">
        </div>
      )}
    </div>
  );
}
