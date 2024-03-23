import React from "react";
import { TodoContextListItemType } from "..";

type TodoListItemProps = {
  todoItem: TodoContextListItemType;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoContextListItem = (props: TodoListItemProps) => {
  let itemClassName = "list-group-item";
  if (props.todoItem.done) itemClassName += " list-group-item-success";

  return (
    <li className={itemClassName}>
      <span
        className={props.todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => props.toggleDone(props.todoItem.no)}
      >
        {props.todoItem.todo}
        {props.todoItem.done ? " (완료)" : ""}
      </span>
      <span
        className="float-end badge bg-secondary pointer"
        onClick={() => props.deleteTodo(props.todoItem.no)}
      >
        삭제
      </span>
    </li>
  );
};

export default TodoContextListItem;
