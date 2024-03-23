import React, { ChangeEvent } from "react";

type Props = {};

const APP01 = (props: Props) => {
  const [msg, setMsg] = React.useState<string>("");
  return (
    <div>
      <input
        type="text"
        value={msg}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)}
      />
      <br />
      <span>입력 메세지 : {msg}</span>
    </div>
  );
};

export default APP01;
