import React from "react";
import Clock2 from "./Clock2";

type Props = {};

const AppClock2 = (props: Props) => {
  const [formatString, setFormatString] = React.useState<string>("HH:mm:ss");
  const [clockVisible, setClockVisible] = React.useState<boolean>(false);
  return (
    <div className="boxStyle">
      <h2>간단한 시계</h2>
      <button onClick={() => setClockVisible(!clockVisible)}>
        시계 토글하기
      </button>
      <hr />
      {clockVisible ? <Clock2 formatString={formatString} /> : ""}
    </div>
  );
};

export default AppClock2;
