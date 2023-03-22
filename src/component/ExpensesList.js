import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseStyle.css";

const ExpensesList = (props) => {
  console.info("Size of ExpensesList %s : ", props.items.length);

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          expenseName={e.title}
          expenseCost={e.cost}
          expenseDate={e.expenseDate}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
