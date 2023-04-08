function PostItem({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p> {post.body}</p>
    </article>
  );
}


export default PostItem;