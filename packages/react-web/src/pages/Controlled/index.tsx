import React, { type ChangeEvent } from "react";

type Props = {};

const Controlled = (props: Props) => {
  const [x, setX] = React.useState<number>(0);
  const [y, setY] = React.useState<number>(0);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);
    if (isNaN(newValue)) newValue = 0;
    if (e.target.id === "x") setX(newValue);
    else setY(newValue);
  };
  return (
    <div>
      <h3>제어 컴포넌트</h3>
      X : <input id="x" type="text" value={x} onChange={changeValue} />
      <br />
      Y : <input id="y" type="text" value={y} onChange={changeValue} />
      <br />
      결과 <span>{x + y}</span>
    </div>
  );
};

export default Controlled;
