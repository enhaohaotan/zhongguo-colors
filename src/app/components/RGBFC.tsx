import { ColorValue } from "../types";
import { getSVG } from "../utilities";

const RGBFC: React.FC<{ rgb: ColorValue }> = ({ rgb }) => {
  return (
    <div className="flex flex-col relative">
      <p className="text-base">{rgb.name + rgb.value}</p>
      <svg
        className="opacity-30 h-8 w-8"
        height="100"
        viewBox="-50 -50 100 100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 -20 L 0 -50 A 50 50 0 0 1 0 50 A 50 50 0 0 1 0 -50 L 0 -20 A 20 20 0 0 0 0 20 A 20 20 0 0 0 0 -20"></path>
      </svg>
      <svg
        className="h-8 w-8 relative bottom-8"
        height="100"
        viewBox="-50 -50 100 100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={getSVG(rgb.value[0])}></path>
      </svg>
    </div>
  );
};

export default RGBFC;
