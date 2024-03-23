import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "../src/pages/RouteTest/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
// import AppUserList from "./pages/UserList/AppUserList.tsx";
// import APP01 from "./pages/App01/index.tsx";
// import App02 from "./pages/App01/App02.tsx";
// import AppComponent from "./pages/Clock/AppClock.tsx";
// import AppClock2 from "./pages/Clock/AppClock2.tsx";
// import App03 from "./pages/App01/App02.tsx";
// import App04 from "./pages/App01/App04.tsx";
// import App05 from "./pages/App01/App05.tsx";
// import App06 from "./pages/App01/App06.tsx";
// import App07 from "./pages/App01/App07.tsx";
// import App09 from "./pages/App01/App09.tsx";
// import App08 from "./pages/App01/App08.tsx";
// import AppChild from "./pages/Child/AppChild.tsx";
// import MemoTodoList from "./pages/MemoTodoList/index.tsx";
import AppMemoTodoList from "./pages/MemoTodoList/index.tsx";
import { TodoProvider } from "./pages/TodoContext/index.tsx";
import TodoContextApp from "./pages/TodoContext/TodoContextApp.tsx";
import RouteApp from "./pages/RouteTest/RouteApp.tsx";
import RouteTodoListAppContainer from "./pages/RouteTodoList/RouteTodoListAppContainer.tsx";
// import AppComponent from "./pages/Clock/AppClock";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AppUserList /> */}
    {/* <App /> */}
    {/* <AppComponent /> */}
    {/* <AppClock2 /> */}
    {/* <APP01 /> */}
    {/* <App02 /> */}
    {/* <App03 /> */}
    {/* <App04 /> */}
    {/* <App05 /> */}
    {/* <App06 /> */}
    {/* <App07 /> */}
    {/* <App08 /> */}
    {/* <App09 /> */}
    {/* <AppChild /> */}
    {/* <AppMemoTodoList /> */}
    {/* <TodoProvider>
      <TodoContextApp />
    </TodoProvider> */}
    {/* <RouteApp /> */}
    <RouteTodoListAppContainer />
  </React.StrictMode>
);
