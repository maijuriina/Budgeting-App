import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Hedelmiä",
    amount: 94.35,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Autovakuutus",
    amount: 294.65,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Pöytä (puinen)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // used as a prop on NewExpense to make a call through pointing to addExpenseHandler
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // pass function with prevExpenses to add previous state snapshot with new expense
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <h2 align="center">Kulunseuranta</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
