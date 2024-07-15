import { Color } from "../types";
import RGBFC from "./RGBFC";
import CMYKFC from "./CMYKFC";

const ValueFC: React.FC<{ color: Color }> = ({ color }) => {
  return (
    <div className="flex flex-col relative">
      <p className="text-base relative bottom-0.5">{color.HEX}</p>
      <div className="flex gap-1.5 relative bottom-2">
        <RGBFC rgb={{ name: "R", value: [color.RGB[0]] }} />
        <RGBFC rgb={{ name: "G", value: [color.RGB[1]] }} />
        <RGBFC rgb={{ name: "B", value: [color.RGB[2]] }} />
      </div>
      <div className="flex justify-end relative bottom-7 mx-2 right-3">
        <CMYKFC color={{ name: "cmyk", value: color.CMYK }} />
        <CMYKFC color={{ name: "hsl", value: color.HSL }} />
        <CMYKFC color={{ name: "hsv", value: color.HSV }} />
      </div>
    </div>
  );
};

export default ValueFC;
