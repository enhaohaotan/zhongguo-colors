import { Season } from "../types";
import MonthFC from "./MonthFC";

const SeasonFC: React.FC<{ seasons: Season[] }> = ({ seasons }) => {
  return (
    <>
      {seasons.map((season, index) => {
        return (
          <div key={index} className="flex">
            <p key={index} className="text-7xl vertical-lr">
              {season.name.zh}
            </p>
            <div key={index + 4} className="ivory w-px mx-2 mb-8"></div>
            <MonthFC months={season.months} />
          </div>
        );
      })}
    </>
  );
};

export default SeasonFC;
