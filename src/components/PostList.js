import { Link } from "react-router-dom";
import "../App.css";

function PostList({ posts }) {
  return (
    <div>
      <ul className='blist'>
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