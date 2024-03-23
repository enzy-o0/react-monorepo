import React from "react";
import InputTodoContext from "./components/InputTodoContext";
import TodoContextList from "./components/TodoContextList";

type Props = {};

const TodoContextApp = (props: Props) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: Todolist App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputTodoContext />
          <TodoContextList />
        </div>
      </div>
    </div>
  );
};

export default TodoContextApp;
