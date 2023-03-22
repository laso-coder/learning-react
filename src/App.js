import "./App.css";
import Expenses from "./component/Expenses";
import NewExpense from "./component/NewExpenses";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    cost: 2034.55,
    expenseDate: new Date(2020, 7, 14),
  },
  {
    id: "2",
    title: "Dinner",
    cost: 200.0,
    expenseDate: new Date(2021, 2, 28),
  },
  {
    id: "3",
    title: "Home Loan",
    cost: 1234.55,
    expenseDate: new Date(2020, 8, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (e) => {
    setExpenses((prevExpenses) => {
      return [e, ...prevExpenses];
    });
  };

  return (
    <div className="app">
      <h3>Welcome to LASO | React Learning course</h3>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
