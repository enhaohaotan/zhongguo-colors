import { ColorValue } from "../types";

const CMYKFC: React.FC<{ color: ColorValue }> = ({ color }) => {
  let len: number[];
  switch (color.name) {
    case "cmyk":
      len = [
        color.value[0] / 100,
        color.value[1] / 100,
        color.value[2] / 100,
        color.value[3] / 100,
      ];
      break;
    case "hsl":
      len = [color.value[0] / 360, color.value[1] / 100, color.value[2] / 100];
      break;
    case "hsv":
      len = [color.value[0] / 360, color.value[1] / 100, color.value[2] / 100];
      break;
  }

  return (
    <div className="flex relative">
      <p className="text-base vertical-lr relative left-2">
        {color.name + " " + color.value.join(" ")}
      </p>
      <div className="flex relative">
        {color.value.map((value, index) => {
          return (
            <>
              <div key={index} className="h-40 w-px opacity-30 ivory"></div>
              <div
                key={index+4}
                className="w-px relative right-px mr-px ivory"
                style={{ height: `${len[index] * 10}rem` }}
              ></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CMYKFC;
