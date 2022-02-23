import React, { useState, useContext } from "react";
import Card from "../Shared/Card";
import Button from "../Shared/Button";
import TodoContext from "../Context/TodoContext";

import RatingSelect from "./RatingSelect";
function TodoForm() {
  //bring in add function from context
  const { addTodos } = useContext(TodoContext);

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

  //handle usr submit
  const handleSubmit = (e) => {
    e.preventDefault();
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
    addTodos(newTodo);
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
