function post({ post }) {
    return (
        <article className="cmp-post">
            <h2>{post.title}</h2>
            <span>{post.body}</span>
        </article>
    );
}

export default post;