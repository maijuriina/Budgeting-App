import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Pöytä (puinen)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // used as a prop on NewExpense to make a call through pointing to addExpenseHandler
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <h2 align="center">Budgeting App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
