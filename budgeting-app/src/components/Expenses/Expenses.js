import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022"); // useState is done in parent component (Expenses = parent of ExpensesFilter)

  const filterChangeHandler = (chosenFilterYear) => {
    setFilter(chosenFilterYear);
  };

  // create a new list based on original list to filter based on year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter; // returns true for those that match criteria and adds to list
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filter}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
