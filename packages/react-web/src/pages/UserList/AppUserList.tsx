import ErrorBoundary from "@/components/ErrorBoundary";
import React, { Component } from "react";
import UserList from ".";
import Chatting from "../Chatting";

type Props = {};

type State = {};

class AppUserList extends Component<Props, State> {
  render() {
    return (
      <ErrorBoundary>
        <div>
          참여 사용자:
          <UserList users={["gdhong, mrlee"]} />
          {/* <UserList users={"gdhong"} /> */}
          <hr />
          <Chatting />
        </div>
      </ErrorBoundary>
    );
  }
}

export default AppUserList;
