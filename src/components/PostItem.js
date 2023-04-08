function PostItem({ post }) {
  return (
    <article className="blist">
      <h2>{post.title}</h2>
      <p> {post.body}</p>
    </article>
  );
}

export default PostItem;
