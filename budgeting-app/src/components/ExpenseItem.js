import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h3>{props.date.toDateString()}</h3>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h3>{props.amount}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
