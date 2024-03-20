import React, { Component } from "react";
import DateAndTime from "date-and-time";

type Props = { formatString: string };

type State = { currentTime: Date };

export default class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  handle: number = 0;

  componentDidMount = () => {
    this.handle = setInterval(() => {
      console.log("## tick!");
      this.setState({ currentTime: new Date() });
    }, 1000);
  };

  componentWillUnmount = () => {
    // setInterval()로 1초마다 실행되는 함수를 계속해서 등록하기 때문에 1초에 한 번만 실행돼야 할 함수가 수십번씩 실행되고 있음
    // 이러한 문제 해결을 위해 clearInterval 사용
    clearInterval(this.handle);
  };

  render() {
    return (
      <div className="boxStyle">
        <h3>
          {DateAndTime.format(this.state.currentTime, this.props.formatString)}
        </h3>
      </div>
    );
  }
}
