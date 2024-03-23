import { produce } from "immer";
import React from "react";

// 4장의 TodoList 컴포넌트 활용

export type TodoContextListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

type TodoContextListValueType = {
  state: { todoList: Array<TodoContextListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    toggleDone: (no: number) => void;
    deleteTodo: (no: number) => void;
  };
};

const TodoContext = React.createContext<TodoContextListValueType | null>(null);

type PropsType = {
  children: JSX.Element | JSX.Element[];
};

export const TodoProvider = (props: PropsType) => {
  const [todoList, setTodoList] = React.useState<Array<TodoContextListItemType>>([
    { no: 1, todo: "React학습1", done: false },
    { no: 2, todo: "React학습2", done: false },
    { no: 3, todo: "React학습3", done: true },
    { no: 4, todo: "React학습4", done: false },
  ]);

  const addTodo = (todo: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });

    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(
      todoList,
      (draft: Array<TodoContextListItemType>) => {
        draft[index].done = !draft[index].done;
      }
    );
    setTodoList(newTodoList);
  };

  const values: TodoContextListValueType = {
    state: { todoList },
    actions: { addTodo, deleteTodo, toggleDone },
  };

  return <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>;
};

export default TodoContext;
