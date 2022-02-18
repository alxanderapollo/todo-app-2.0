import React, { useState } from "react";
import Card from "./Card";
function TodoForm() {
  //what do we need for this form
  //1. we need to store the todo text
  const [text, setText] = useState(null);
  //2. the rating of the item'
  const [rating, setRating] = useState(null);
  //.3 the date of the item stored

  return (
    <Card>
      <form>
        <h1>Here here enter your todo</h1>
        <div className="input-group">
          <input />
          <input />
          <input />
        </div>
      </form>
    </Card>
  );
}

export default TodoForm;
