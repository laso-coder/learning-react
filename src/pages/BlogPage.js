import { useLoaderData } from 'react-router-dom';
import PostList from '../components/PostList' 

function BlogPage() {
  const post= useLoaderData();
  return <PostList posts={post}/>
}

export default BlogPage;


export function loader(){
  return fetch("https://jsonplaceholder.typicode.com/posts");
}