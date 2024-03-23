import React from "react";
import { MemoTodoListItemProps } from "..";
import MemoTodoListItem from "./MemoTodoListItem";

type Props = {
  todoList: Array<MemoTodoListItemProps>;
  deleteTodo: (id: number) => void;
};

const MemoTodoList = (props: Props) => {
  console.log("## TodoList");
  return (
    <ul>
      {props.todoList.map((item) => (
        <MemoTodoListItem
          key={item.id}
          todoListItem={item}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default React.memo(MemoTodoList);
