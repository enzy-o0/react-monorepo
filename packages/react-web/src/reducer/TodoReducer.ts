import { produce } from "immer";

export type TodoItemType = { id: number; todo: string };

export const TODO_ACTION = {
  ADD: "addTodo" as const,
  DELETE: "deleteTodo" as const,
};

export const TodoActionCreateor = {
  addTodo: (todo: string) => ({ type: TODO_ACTION.ADD, payload: { todo } }),
  deleteTodo: (id: number) => ({ type: TODO_ACTION.DELETE, payload: { id } }),
};

export type TodoActionType =
  | ReturnType<typeof TodoActionCreateor.addTodo>
  | ReturnType<typeof TodoActionCreateor.deleteTodo>;

export const TodoReducer = (
  state: Array<TodoItemType>,
  action: TodoActionType
) => {
  switch (action.type) {
    case TODO_ACTION.ADD:
      return produce(state, (draft: Array<TodoItemType>) => {
        draft.push({ id: new Date().getTime(), todo: action.payload.todo });
      });
    case TODO_ACTION.DELETE:
      let index = state.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft: Array<TodoActionType>) => {
        draft.splice(index, 1);
      });
    default:
      return state;
  }
};
