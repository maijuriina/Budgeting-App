import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h3>Date</h3>
      <div className="expense-item__description">
        <h2>Expense Title</h2>
      </div>
      <div className="expense-item__price">
        <h3>Amount</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
