import { SolarTerm } from "../types";
import CardFC from "./CardFC";

const SolarTermFC: React.FC<{ solarTerms: SolarTerm[] }> = ({ solarTerms }) => {
  return (
    <div className="flex flex-col">
      {solarTerms.map((solarTerm, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-5xl vertical-lr">
              {solarTerm.name.zh}
            </p>
            <div key={index+24} className="ivory w-px mx-2 mb-8"></div>
            <CardFC cards={solarTerm.cards} />
          </div>
        );
      })}
    </div>
  );
};

export default SolarTermFC;
