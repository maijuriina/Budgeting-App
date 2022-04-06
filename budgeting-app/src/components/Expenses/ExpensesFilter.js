import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // used to render children
  const classes = "expenses-filter " + props.className;

  const filterHandler = (event) => {
    props.onChangeFilter(event.target.value); // pass value to be used in props at Expenses.js
  };

  return (
    <div className={classes}>
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {props.children}
    </div>
  );
};

export default ExpensesFilter;
