import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022"); // useState is done in parent component (Expenses = parent of ExpensesFilter)

  const filterChangeHandler = (chosenFilterYear) => {
    setFilter(chosenFilterYear);
    console.log(chosenFilterYear);
  };

  // create a new list based on original list to filter based on year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter; // returns true for those that match criteria and adds to list
  });

  let expensesContent = <p>No expenses found in {filter}.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={new Date(expense.date)}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filter}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
