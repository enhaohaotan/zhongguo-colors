import { Color } from "../types";
import ValueFC from "./ValueFC";

const InfoFC: React.FC<{ color: Color }> = ({ color }) => {
  return (
    <div className="flex mt-2 relative transition-colors duration-300 ">
      <p className="text-3xl vertical-lr">{color.name.zh}</p>
      <p className="text-base vertical-lr mt-1.5 mr-1 relative right-1.5">
        {color.name["zh-Latn"]}
      </p>
      <ValueFC color={color} />
      <p
        className="text-2xl relative bottom-3 left-2"
        style={{
          color: `rgb(${color.RGB[0]}, ${color.RGB[1]}, ${color.RGB[2]})`,
        }}
      >
        {color.id.toString().padStart(3, "0")}
      </p>
    </div>
  );
};

export default InfoFC;
