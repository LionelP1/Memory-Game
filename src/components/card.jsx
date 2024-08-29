import React from "react";
import "../styles/Card.css";
import pokeBallImg from '../assets/pokeball.png';

export default function Card({ id, card, onClick, cardState }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      {cardState === "back" && (
        <div className="card-back">
          <img className="back-img" src={pokeBallImg} alt="Pokeball"/>
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


// import React from "react";
// import "../styles/Card.css";

// export default function Card({ id, card, onClick, cardState }) {
//   return (
//     <div className="card-container">
//       <div className="card-inner">
//         {cardState === "back" && (
//           <div className="card-back" onClick={() => onClick(id)}>
//             {/* <img
//               src={""} // Replace with the actual path to the back image
//               alt="Card Back"
//               className="back"
//             /> */}
//           </div>
//         )}

//         {cardState === "front" && (
//           <div className="card-front">
//             <img
//               src={card.image}
//               alt={card.name}
//               className="card-image"
//               draggable="false"
//             />
//             <p className="card-name">
//               <span className="name">{card.name}</span>
//             </p>
//           </div>
//         )}

//         {cardState === "invisible" && (
//           <div className="card-invisible"></div>
//         )}
//       </div>
//     </div>
//   );
// }