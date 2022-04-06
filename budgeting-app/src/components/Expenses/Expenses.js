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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filter}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={new Date(expense.date)}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
