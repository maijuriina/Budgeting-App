import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // multi state approach
  /*const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");*/

  // one state approach using object
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    /*the commented out implementation depends on existing values and should not be used! it may not keep updated with scheduled state updates

    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */

    // ~~~~ BELOW A SAFE WAY TO UPDATE STATE IF IT DEPENDS ON PREVIOUS STATE ~~~~
    // below we pass an anonymous arrow function to setUserInput, which receives an up to date snapshot of previous state
    // previous state snapshot has key-value pairs that are copied with spread operator, enteredTitle is set, and object is returned
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  // multi-state approach handler for title
  /*   const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }; */

  const submitHandler = (event) => {
    event.preventDefault(); // prevents default onSubmit-behaviour which sends request to the hosting server and reloads the page

    // if using multi state form, combine data into one object
    /* const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate);
    } */

    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
