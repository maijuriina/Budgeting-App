import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 5).toDateString();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 355;

  return (
    <div className="expense-item">
      <h3>{expenseDate}</h3>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">
        <h3>{expenseAmount}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
