import { Link, useSubmit, useRouteLoaderData } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  const token = useRouteLoaderData("root");

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && (
        <menu className={classes.actions}>
          <button>
            <Link to="edit">Edit Event</Link>
          </button>
          <button onClick={startDeleteHandler}>Delete Event</button>
        </menu>
      )}
    </article>
  );
}

export default EventItem;
