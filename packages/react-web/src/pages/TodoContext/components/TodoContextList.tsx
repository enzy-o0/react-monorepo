import React from "react";
import TodoContext from "..";
import TodoContextListItem from "./TodoContextListItem";

const TodoContextList = () => {
  const value = React.useContext(TodoContext);

  let items = value?.state.todoList.map((item) => {
    return (
      <TodoContextListItem
        key={item.no}
        todoItem={item}
        deleteTodo={value?.actions.deleteTodo}
        toggleDone={value?.actions.toggleDone}
      />
    );
  });

  return (
    <div className="row">
      {" "}
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
};

export default TodoContextList;
