import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });

    /*the commented out implementation depends on existing values and should not be used! it may not keep updated with scheduled state updates

    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */

    // ~~~~ UNCOMMENTED ABOVE IS A SAFE WAY TO UPDATE STATE IF IT DEPENDS ON PREVIOUS STATE ~~~~
    // below we pass an anonymous arrow function to setUserInput, which receives an up to date snapshot of previous state
    // previous state snapshot has key-value pairs that are copied with spread operator, enteredTitle is set, and object is returned
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value }; // + adds multiple values
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

    // if using multi state form, combine data into one object here AND in object approach to conform Date
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };

    // call function through the passed prop from child to parent to pass the user-filled form to be used in NewExpense
    props.onSaveExpenseData(expenseData);

    // resetting data on form
    setUserInput(() => {
      return { title: "", amount: "", date: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Nimi</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Hinta</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Päivämäärä</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Peruuta
        </button>
        <button type="submit">Lisää kulu</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
