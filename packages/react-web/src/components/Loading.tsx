import React from "react";
import { ScaleLoader } from "react-spinners";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="w-100 h-75 position-fixed">
      <div className="row w-100 h-100 justify-content-center align-items-center">
        <div className="col-6 text-center">
          <h3>Loading</h3>
          <ScaleLoader height={40} width={6} radius={2} margin={2} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
