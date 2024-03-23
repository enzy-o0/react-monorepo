import React from "react";
import { MemoTodoListItemProps } from "..";

type Props = {
  todoListItem: MemoTodoListItemProps;
};

const MemoTodoListItemBody = (props: Props) => {
  console.log("## TodoListItemBody");
  return <span>{props.todoListItem.todo}</span>;
};

export default React.memo(MemoTodoListItemBody);
