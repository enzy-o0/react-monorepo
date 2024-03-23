import React, { Component } from "react";

type Props = { children: JSX.Element };

type State = { hasError: boolean; errorMessage: string };

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, errorMessage: "" };

  static getDerivedStateFromError(error: Error): State {
    // 에러가 발생했을 때 hasError 상태를 true로 변경함
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //에러 로깅, 서버로의 전송 등의 작업 수행
    console.log("에러 발생!");
    console.log("에러명 : ", error.name);
    console.log("에러 메세지 : ", error.message);
    console.log("컴포넌트 스택 : ", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>에러 발생</h2>
          <hr />
          <p>에러 메세지 : {this.state.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
