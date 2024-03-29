import React from "react";
import { CallbackType, TodoItemType } from "../RouteTodoListAppContainer";
import { useNavigate } from "react-router";

type Props = { todoItem: TodoItemType; callbacks: CallbackType };

const TodoItem = ({ todoItem, callbacks }: Props) => {
  const navigate = useNavigate();
  let itemClassName = "list-group-item";

  if (todoItem.done) itemClassName += " list-group-item-success";

  return (
    <li className={itemClassName}>
      <span
        className={todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => callbacks.toggleDone(todoItem.id)}
      >
        {todoItem.todo}
        {todoItem.done ? "(완료)" : ""}
      </span>
      <span
        className="float-end badge bg-secondary pointer m-1"
        onClick={() => navigate("/todos/edit/" + todoItem.id)}
      >
        편집
      </span>
      <span
        className="float-end badge bg-secondary pointer m-1"
        onClick={() => callbacks.deleteTodo(todoItem.id)}
      >
        삭제
      </span>
    </li>
  );
};

export default TodoItem;
