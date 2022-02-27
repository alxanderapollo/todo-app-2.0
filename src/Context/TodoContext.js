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
  //need to update back end with the new set of todos
  const addTodos = async (newTodo) => {
    //for making requests to the back end - adding elements
    const response = await fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //set the body of the post method with our object
      body: JSON.stringify(newTodo),
    });
    // now that we have our reponse we can use the data and add it to our array
    const data = await response.json();

    //calling uuid to generate a unique id for us
    // newFeedback.id = uuidv4();

    //so now that we have our new add feedback we must recall that the state is immutable
    // we cannot simply push onto it we need to update our state by copying the current state and creating
    // a New state
    //new feedback is our most our current feedback item, that will be added to the feedback state
    setTodo([data, ...todo]);
  };
  //delete todos
  const deleteTodo = async (id) => {
    //we need to fetch from the api and then use the delete verb
    //deletes on the api
    await fetch(`/todo/${id}`, { method: "DELETE" });
    //filter out the item that has the matching id
    setTodo(todo.filter((item) => item.id !== id));
  };
  //edit todos
  const editTodo = async (item) => {
    //to update we need the same kind of object
  };
  //update todos

  return (
    <TodoContext.Provider value={{ todo, addTodos, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
