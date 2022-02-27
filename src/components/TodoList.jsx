import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import { TodoItem } from "../Components/TodoItem";
const TodoList = () => {
  const { todo } = useContext(TodoContext);
  return (
    <>
      {todo.map((item, index) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default TodoList;
