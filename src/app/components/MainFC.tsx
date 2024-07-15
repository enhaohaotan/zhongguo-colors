import { Data } from "../types";
import SeasonFC from "./SeasonFC";

const MainFC: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <main className="flex flex-col justify-start my-20 mx-40">
      <SeasonFC seasons={data.seasons} />
    </main>
  );
};

export default MainFC;
