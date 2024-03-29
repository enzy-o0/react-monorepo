import {
  TodoActionCreateor,
  TodoItemType,
  TodoReducer,
} from "@/reducer/TodoReducer";
import { produce } from "immer";
import React from "react";

let idNow = new Date().getTime();
const initialTodoList: Array<TodoItemType> = [
  { id: idNow, todo: "운동" },
  { id: idNow + 1, todo: "독서" },
  { id: idNow + 2, todo: "음악감상" },
];

const App04 = () => {
  const [todoList, dispatchTodoList] = React.useReducer(
    TodoReducer,
    initialTodoList
  );
  const [todo, setTodo] = React.useState("");
  const addTodo = () => {
    dispatchTodoList(TodoActionCreateor.addTodo(todo));
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoActionCreateor.deleteTodo(id));
  };

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
    </div>
  );
};

export default App04;
