import { Card } from "../types";
import ColorFC from "./ColorFC";

const CardFC: React.FC<{ cards: Card[] }> = ({ cards }) => {
  "use client"
  return (
    <div className="flex flex-col">
      {cards.map((card, index) => {
        return (
          <div key={index} id={card.id.toString()} className="flex h-80">
            <p key={index} className="text-3xl vertical-lr">
              {card.name.zh}
            </p>
            <div key={index+96} className="ivory w-px mx-2 mb-8"></div>
            <ColorFC colors={card.colors} />
          </div>
        );
      })}
    </div>
  );
};

export default CardFC;
