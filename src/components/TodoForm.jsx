import React, { useState } from "react";
import Card from "./Card";
import RatingSelect from "./RatingSelect";
function TodoForm() {
  //what do we need for this form
  //1. we need to store the todo text
  const [text, setText] = useState(null);
  //2. the rating of the item'
  const [rating, setRating] = useState(null);
  //.3 the date of the item stored we can either enter or it implicitly collect it
  //from the machine

  //handle usr submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //we want to know that the user isnt givning us empty data
    if (text === "") {
      //want to disable the button and prompt the user to enter more than 10 characters
      //create message and btn disable hook
    }

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
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1>Rate the importance of this todo</h1>
        {/* collect rating and then set it */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input />
          <button>Submit Todo</button>
        </div>
      </form>
    </Card>
  );
}

export default TodoForm;
