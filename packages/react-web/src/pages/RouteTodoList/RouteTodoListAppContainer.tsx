import { produce } from "immer";
import React, { useState } from "react";
import RouteTodoListApp from "./RouteTodoListApp";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

export type StatesType = {
  todoList: Array<TodoItemType>;
};

export type CallbacksType = {
  addTodo: (todo: string, desc: string) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void;
};

const RouteTodoListAppContainer = () => {
  const [todoList, setTodoList] = useState<Array<TodoItemType>>([
    { id: 1, todo: "ES6 학습", desc: "설명1", done: false },
    { id: 2, todo: "React 학습", desc: "설명1", done: false },
    { id: 3, todo: "Context API 학습", desc: "설명1", done: true },
    { id: 4, todo: "야구 경기 관람", desc: "설명1", done: false },
  ]);

  const addTodo = (todo: string, desc: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false });
    });

    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });

    setTodoList(newTodoList);
  };

  const toggleDone = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const updateTodo = (
    id: number,
    todo: string,
    desc: string,
    done: boolean
  ) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index] = { ...draft[index], todo, desc, done };
    });

    setTodoList(newTodoList);
  };

  const callbacks: CallbacksType = {
    addTodo,
    deleteTodo,
    updateTodo,
    toggleDone,
  };
  const states: StatesType = { todoList };

  return <RouteTodoListApp callbacks={callbacks} states={states} />;
};

export default RouteTodoListAppContainer;
