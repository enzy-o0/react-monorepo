import React, { useCallback } from "react";
import MemoTodoList from "./components/MemoTodoList";

export type MemoTodoListItemProps = { id: number; todo: string };

const AppMemoTodoList = () => {
  const [todoList, setTodoList] = React.useState<Array<MemoTodoListItemProps>>(
    []
  );
  const [todo, setTodo] = React.useState<string>("");

  const addTodo = useCallback((todo: string) => {
    let newTodoList = [...todoList, { id: new Date().getTime(), todo }];
    setTodoList(newTodoList);
    setTodo("");
  }, [todoList]);

  const deleteTodo = useCallback((id: number) => {
    let newTodoList = [...todoList];
    const index = newTodoList.findIndex((item) => item.id === id);
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }, [todoList]);

  return (
    <div className="boxStyle">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <MemoTodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todo 개수 : {todoList.length}</div>
    </div>
  );
};

export default AppMemoTodoList;
