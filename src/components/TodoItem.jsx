import React from "react";
import Card from "../Shared/Card";
export const TodoItem = ({ id, text, rating, date }) => {
  return (
    <Card>
      Todo: <div className="text-display">{text}</div>
      <br />
      Date: {date}
      <br />
      Rating: {rating}
    </Card>
  );
};
