import Card from "./Card";
import "./ExpenseStyle.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  console.info("Inside Expenses....");
  const [filteredYear, setFilteredYear] = useState("2020"); // Initialize value as 2000

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  });

  console.info(props.items);
  console.info("filteredYear %s", filteredYear);

  return (
    <div>
      <Card className="expense-item">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <br />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

{
  /* <ExpenseItem
expenseName={props.items[0].titile}
expenseCost={props.items[0].cost}
expenseDate={props.items[0].expenseDate}
/>

<ExpenseItem
expenseName={props.items[1].titile}
expenseCost={props.items[1].cost}
expenseDate={props.items[1].expenseDate}
/> */
}

/**
 * ! Using Arrow fucntion is just JScript stype and
 * * Its optional to use in React
 * ? This style using by Better Comments plugin for VSCode
 * TODO :: So will add more style in future
 *
 *  */
