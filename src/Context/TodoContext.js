import { createContext, useEffect, useState } from "react";

// Todo Context which will be exported
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch(`/todos?_sort=id&_order=desc`);
    const data = await response.json();
    console.log(data);
    setTodo(data);
  };
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};

export default TodoContext;
