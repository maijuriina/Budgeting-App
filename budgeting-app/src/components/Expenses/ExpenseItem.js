import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // useState always returns array of value and function setValue

  const clickHandler = () => {
    setTitle("Updated title"); // setTitle sets value and calls component functions again, updating the value in instance of component
    // now every time the click handler is called, the expense item instance is evaluated by React
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        <h3>{props.amount}</h3>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
