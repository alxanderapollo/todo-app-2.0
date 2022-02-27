import React, { useState, useContext, useEffect } from "react";
import Card from "../Shared/Card";
import Button from "../Shared/Button";
import TodoContext from "../Context/TodoContext";

import RatingSelect from "./RatingSelect";
function TodoForm() {
  //bring in add function from context
  const { addTodos, todoEdit, updateTodo } = useContext(TodoContext);

  //what do we need for this form
  //1. we need to store the todo text
  const [text, setText] = useState("");
  //2. the rating of the item'
  const [rating, setRating] = useState(null);
  //2a button state
  const [disabled, isDisabled] = useState(true);
  //.3 the date of the item stored we can either enter or it implicitly collect it
  //from the machine
  //error message if user doesn't enter enough characters
  const [message, setMessage] = useState("");

  useEffect(() => {
    //what we want is for when a user clicks on edit - to dsiable the button
    if (todoEdit.edit === true) {
      //1. enable the send button
      isDisabled(false);
      //set the text of the case inside of the text bar
      setText(todoEdit.item.text);
      //get the rating of the item into the obj
      setRating(todoEdit.item.rating);
    }
  }, [todoEdit]);

  //handle usr submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      // if it is construct a new object called new feed back
      //bellow is a short hand for creating this object instead of doing text:text we can just write text
      //create new date
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + " " + time;
      console.log(dateTime);
      const newTodo = {
        text,
        rating,
        dateTime,
      };

      //if we are editing and item, check the edit atribute to see if its true, if it is pass the id and a new feed back item
      if (todoEdit.edit === true) updateTodo(todoEdit.item.id, newTodo);
      else addTodos(newTodo);

      setText("");
    }
  };
  const handleTextSubmit = (e) => {
    //we want to know that the user isnt givning us empty data
    if (text === "" || text.length < 10) {
      //want to disable the button and prompt the user to enter more than 10 characters
      isDisabled(true);
      //create message and btn disable hook
      setMessage("you must enter more than ten characters");
    } else {
      isDisabled(false);
      setMessage(" ");
    }
    //store the text set by the user
    setText(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1>Rate the importance of this todo</h1>
        {/* collect rating and then set it */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextSubmit}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button isDisabled={disabled} type="submit">
            send
          </Button>
        </div>
        {disabled && <div>{message}</div>}
      </form>
    </Card>
  );
}

export default TodoForm;
