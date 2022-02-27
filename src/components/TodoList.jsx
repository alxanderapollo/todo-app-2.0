import React, { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import { TodoItem } from "../Components/TodoItem";
const TodoList = () => {
  const { todo } = useContext(TodoContext);
  return (
    <>
      {todo.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          date={todo.date}
          rating={todo.rating}
        />
      ))}
    </>
  );
};

export default TodoList;
