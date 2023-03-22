import "./ExpenseStyle.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  console.log("Inside ExpenseItem ...")

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item-description">
        <h2> {props.expenseName}</h2>
      </div>
      <div className="expense-item-price">
        <h2> {props.expenseCost}</h2>
      </div>
    </Card>
  );
}

export default ExpenseItem;
