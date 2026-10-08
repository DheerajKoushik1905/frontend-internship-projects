import { useMemo, useState } from 'react';
import posts from './data/posts.json';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import FilterBar from './components/FilterBar.jsx';
import PostCard from './components/PostCard.jsx';
import EmptyState from './components/EmptyState.jsx';

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const haystack = `${post.title} ${post.excerpt} ${post.category} ${post.author}`.toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [query, category]);

  function reset() { setQuery(''); setCategory('All'); }

  return <div id="top" className="page"><Header /><main>
    <section className="hero"><p className="kicker">React Blog UI · Mini Project</p><h1>Notes on code, design, and learning.</h1><p>A small React blog interface that renders cards from a JSON file and supports real-time search and category filtering.</p></section>
    <section className="controls" id="posts"><SearchBar value={query} onChange={setQuery} /><FilterBar categories={categories} active={category} onChange={setCategory} /></section>
    <section className="results"><div className="results-head"><p><strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}</p>{(query || category !== 'All') && <button className="clear" onClick={reset}>Clear filters</button>}</div>{filteredPosts.length ? <div className="post-grid">{filteredPosts.map((post, index) => <PostCard key={post.id} post={post} featured={index === 0 && category === 'All' && !query} />)}</div> : <EmptyState onReset={reset} />}</section>
  </main><footer><p>React Blog UI by Rolla Dheeraj Koushik.</p><a href="#top">Back to top ↑</a></footer></div>;
}
