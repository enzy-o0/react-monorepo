import React from "react";

type Props = {};

const App05 = (props: Props) => {
  const [name, setName] = React.useState("홍길동");
  const refTel = React.useRef("010-2222-2222");
  return (
    <div className="boxStyle">
      <h2>상태 데이터</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <div>상태 (name) : {name}</div>
      <hr />
      <input type="text" onChange={(e) => (refTel.current = e.target.value)} />
      <br />
      <div>refTel 값 : {refTel.current}</div>
    </div>
  );
};

export default App05;
