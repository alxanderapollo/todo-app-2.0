import React, { useContext } from "react";
import Card from "../Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import TodoContext from "../Context/TodoContext";

export const TodoItem = ({ item }) => {
  const { deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <Card>
      Todo: <div className="text-display">{item.text}</div>
      <br />
      Date: {item.date}
      <br />
      Rating: {item.rating}
      <button onClick={() => deleteTodo(item.id)} className="close">
        <FaTimes className="purple" />
      </button>
      <button className="edit" onClick={() => editTodo(item)}>
        <FaEdit color="purple" />
      </button>
    </Card>
  );
};
