import { Month } from "../types";
import SolarTermFC from "./SolarTermFC";

const MonthFC: React.FC<{ months: Month[] }> = ({ months }) => {
  return (
    <div className="flex flex-col">
      {months.map((month, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-6xl vertical-lr">
              {month.name.zh}
            </p>
            <div key={index+12} className="ivory w-px mx-2 mb-8"></div>
            <SolarTermFC solarTerms={month.solar_terms} />
          </div>
        );
      })}
    </div>
  );
};

export default MonthFC;
