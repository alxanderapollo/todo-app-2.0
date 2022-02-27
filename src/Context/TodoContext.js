import { createContext, useEffect, useState } from "react";

// Todo Context which will be exported
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  //for editing todos
  //item attribute will hold all of the iital todo attributes and edit
  //will let us know if are current looking at that thing and chaning anything about it
  const [todoEdit, setTodoEdit] = useState({
    item: {},
    edit: false,
  });

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
    await fetch(`/todos/${id}`, { method: "DELETE" });
    //filter out the item that has the matching id
    setTodo(todo.filter((item) => item.id !== id));
  };
  //edit todos
  //pass the item that we will be editing and then set its flag to true
  const editTodo = async (item) => {
    //to update we need the same kind of object
    setTodoEdit({
      item,
      edit: true,
    });
  };
  //update todos
  const updateTodo = async (id, updateItem) => {
    const response = await fetch(`/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      //set the body of the post method with our object
      body: JSON.stringify(updateItem),
    });
    // now that we have our reponse we can use the data and add it to our array
    const data = await response.json();

    //we get the id of the item we want to change and we do a check setTodo has the item we want to add as our updates items
    //map through our current iteration of items
    //we look for the item that has the same id
    setTodo(
      todo.map((item) =>
        item.id === id
          ? {
              // if we have a match return the newly upated item and its array
              //and the updated item, other wise return only the item
              ...item,
              ...data,
            }
          : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todo, todoEdit, addTodos, deleteTodo, editTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
