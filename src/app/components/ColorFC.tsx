import { Color } from "../types";
import InfoFC from "./InfoFC";

const ColorFC: React.FC<{ colors: Color[] }> = ({ colors }) => {
  // "use client"
  return (
    <div className="flex">
      {colors.map((color, index) => {
        return (
          <div key={index} id={color.HEX} className="flex flex-col ">
            <div
              key={index}
              className="h-4 w-60"
              style={{
                backgroundColor: `rgb(${color.RGB[0]}, ${color.RGB[1]}, ${color.RGB[2]})`,
              }}
            ></div>
            <InfoFC color={color} />
          </div>
        );
      })}
    </div>
  );
};

export default ColorFC;
