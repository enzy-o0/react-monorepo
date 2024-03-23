import { TimeFormatEnum, useClockTime } from "@/hooks/useClockTime";
import React from "react";

type Props = {};

// App08에서 커스텀 훅 적용 상태
const App09 = (props: Props) => {
  const currentTime = useClockTime(1000, TimeFormatEnum.HHmmssKOR);
  return (
    <>
      <h2>현재 시각</h2>
      <hr />
      <div>{currentTime}</div>
    </>
  );
};

export default App09;
