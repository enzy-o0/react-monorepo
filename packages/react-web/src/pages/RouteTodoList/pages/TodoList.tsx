import React from "react";
import { CallbacksType, StatesType } from "../RouteTodoListAppContainer";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";

type Props = { states: StatesType; callbacks: CallbacksType };

const TodoList = ({ states, callbacks }: Props) => {
  let todoItems = states.todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />;
  });
  
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to={"/todos/add"}>
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
