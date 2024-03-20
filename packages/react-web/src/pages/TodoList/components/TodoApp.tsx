import React from "react";
import TodoList, { TodoListItemType } from "..";
import InputTodo from "./InputTodo";

type TodoAppProps = {
  todoList: Array<TodoListItemType>;
  addTodo: (todo: string) => void;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoApp = (props: TodoAppProps) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: TodoList App</div>
      </div>
      <div className="card card-default card-borderliess">
        <div className="card-body">
          <InputTodo addTodo={props.addTodo} />
          <TodoList
            todoList={props.todoList}
            toggleDone={props.toggleDone}
            deleteTodo={props.deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
