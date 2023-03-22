import "./Card.css";

function Card(props) {
  /*  Childer is reserved ket in React */
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
 