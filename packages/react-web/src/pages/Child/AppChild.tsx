import React from "react";
import Child from ".";

type Props = {};

const AppChild = (props: Props) => {
  return (
    <div>
      <h2>고차 컴포넌트 테스트</h2>
      <hr />
      <Child />
    </div>
  );
};

export default AppChild;
