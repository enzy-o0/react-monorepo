import React, { type KeyboardEvent, ChangeEvent, Component } from "react";

type State = {
  msg: string;
  msgList: Array<string>;
};

class Chatting extends Component<{}, State> {
  chatRef = React.createRef<HTMLDivElement>();
  state: State = { msgList: [], msg: "" };

  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>
  ): number {
    const chat = this.chatRef.current;
    if (prevState.msgList !== this.state.msgList && chat !== null) {
      return chat.offsetHeight;
    }
    return 0;
  }

  componentDidUpdate(prevProps: {}, prevState: State, snapshot: number) {
    const chat = this.chatRef.current;
    if (snapshot > 0 && chat !== null) {
      chat.scrollTop = chat.scrollHeight - snapshot;
    }
  }

  setMsg = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, msg: e.target.value });
  };

  msgKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.setState({
        msg: "",
        msgList: [...this.state.msgList, this.state.msg],
      });
    }
  };

  render() {
    return (
      <div>
        채팅 목록 : <br />
        <div
          ref={this.chatRef}
          style={{
            width: 400,
            height: 120,
            overflow: "auto",
            border: "solid 1px black",
          }}
        >
          {this.state.msgList.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
          })}
        </div>
        입력 메세지 :
        <input
          type="text"
          value={this.state.msg}
          onChange={this.setMsg}
          onKeyUp={this.msgKeyUp}
        />
      </div>
    );
  }
}

export default Chatting;
