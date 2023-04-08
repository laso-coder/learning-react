import { useLoaderData } from "react-router-dom";
import PostList from "../components/PostList";
import PageContent from "../components/PageContent";

function BlogPage() {
  const post = useLoaderData();

  return (
    <PageContent title="List of your favoutite List">
      <PostList posts={post} />
    </PageContent>
  );
}

export default BlogPage;

export function loader() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}
