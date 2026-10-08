export default function EmptyState({ onReset }) {
  return <div className="empty"><span>⌕</span><h2>No posts found</h2><p>Try a different keyword or remove the current category filter.</p><button onClick={onReset}>Reset filters</button></div>;
}
