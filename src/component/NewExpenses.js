import React from "react";
import "./ExpenseStyle.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  console.info("Inside NewExpense..");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
