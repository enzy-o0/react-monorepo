// App04 참고

import {
  TodoActionCreateor,
  TodoItemType,
  TodoReducer,
} from "@/reducer/TodoReducer";
import { produce } from "immer";
import React, { useCallback, useMemo } from "react";

type TodoListItemType = {
  id: number;
  todo: string;
};

const getTodoListCount = (todoList: Array<TodoListItemType>) => {
  console.log("## TodoList 카운트 : ", todoList.length);
  return todoList.length;
};

const App04 = () => {
  const [todoList, setTodoList] = React.useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = React.useState("");
  const addTodo = useCallback(() => {
    let newTodoList = [...todoList, { id: new Date().getTime(), todo }];
    setTodoList(newTodoList);
    setTodo("");
  }, [todoList]);

  const deleteTodo = useCallback((id: number) => {
    let index = todoList.findIndex((item) => item.id === id);
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }, [todoList]);

  const memoizedCount = useMemo<number>(
    () => getTodoListCount(todoList),
    [todoList]
  );

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>할일 추가</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo}{" "}
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      {/* <div>todo 개수 : {getTodoListCount(todoList)}</div> */}
      <div>todo 개수 : {memoizedCount}</div>
    </div>
  );
};

export default App04;
