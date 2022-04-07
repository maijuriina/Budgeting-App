import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // this is userInput from ExpenseForm, spread to copy
      id: Math.random().toString(), // potentially generates two of the same so not valid solution
    };

    // use prop to call onAddExpense in App.js, also passing expenseData originally from ExpenseForm
    props.onAddExpense(expenseData);

    setIsAdding(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true); // opens form
  };

  const stopAddingHandler = () => {
    setIsAdding(false); // closes form
  };

  // onSaveExpenseData is a prop which points to handler - therefore it can be accessed in ExpenseForm
  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={startAddingHandler}>Lisää uusi kulu</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
