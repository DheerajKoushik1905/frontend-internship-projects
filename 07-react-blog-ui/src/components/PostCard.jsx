export default function PostCard({ post, featured = false }) {
  return <article className={`post-card ${featured ? 'featured' : ''}`}>
    <div className="post-art" style={{ background: post.accent }} aria-hidden="true"><span>{post.emoji}</span></div>
    <div className="post-content"><div className="post-meta"><span>{post.category}</span><small>{post.date} · {post.readTime}</small></div><h2>{post.title}</h2><p>{post.excerpt}</p><div className="post-footer"><span>By {post.author}</span><button type="button" aria-label={`Read ${post.title}`}>Read article →</button></div></div>
  </article>;
}
