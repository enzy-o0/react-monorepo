import React from "react";
import { MemoTodoListItemProps } from "..";
import MemoTodoListItemBody from "./MemoTodoListItemBody";
import MemoTodoListItemDeleteButton from "./MemoTodoListItemDeleteButton";

type Props = {
  todoListItem: MemoTodoListItemProps;
  deleteTodo: (id: number) => void;
};

const MemoTodoListItem = (props: Props) => {
  console.log("## TodoListItem");
  return (
    <li>
      {/* <span>{props.todoListItem.todo}</span> */}
      <MemoTodoListItemBody todoListItem={props.todoListItem} />
      {/* <span
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => props.deleteTodo(props.todoListItem.id)}
      >
        삭제
      </span> */}
      &nbsp;&nbsp;&nbsp;
      <MemoTodoListItemDeleteButton
        deleteTodo={props.deleteTodo}
        id={props.todoListItem.id}
      />
    </li>
  );
};

// export default React.memo(MemoTodoListItem, (prevProps, nextProps) => {
//   return prevProps.todoListItem === nextProps.todoListItem;
// });

export default React.memo(MemoTodoListItem);
