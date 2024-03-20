import React, { useState } from "react";
import Controlled from "./pages/Controlled";
import UnControlled from "./pages/UnControlled";
import ImmerTest from "./pages/ImmerTest";
import TodoAppContainer from "./pages/TodoList";
import Clock from "./pages/Clock";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      {/* <Controlled /> */}
      {/* <UnControlled /> */}
      {/* <ImmerTest /> */}
      {/* <TodoAppContainer /> */}
      <div className="boxStyle">
        <h2>간단한 디지털 시계</h2>
        <hr />
        <Clock formatString="HH:mm:ss" />
      </div>
    </div>
  );
};

export default App;
