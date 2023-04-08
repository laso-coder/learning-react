import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

function PostList({ posts }) {
  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={p.id.toString()}>{p.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default PostList;