import React from "react";
import { CallbacksType, StatesType } from "./RouteTodoListAppContainer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

type Props = {
  states: StatesType;
  callbacks: CallbacksType;
};

const RouteTodoListApp = ({ states, callbacks }: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="todos"
            element={<TodoList states={states} callbacks={callbacks} />}
          />
          <Route path="todos/add" element={<AddTodo callbacks={callbacks} />} />
          <Route
            path="todos/edit/:id"
            element={<EditTodo states={states} callbacks={callbacks} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteTodoListApp;
