import React from "react";

type Props = {};

const Calculate = (props: Props) => {
  const [x, setX] = React.useState<number>(100);
  const [y, setY] = React.useState<number>(101);
  const [oper, setOper] = React.useState<string>("+");

  return (
    <div>
      {/* <Calc x={x} y={y} oper={oper} /> */}
      <Calc x={x} />
    </div>
  );
};

export default Calculate;
