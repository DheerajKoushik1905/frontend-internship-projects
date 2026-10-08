export default function SearchBar({ value, onChange }) {
  return <label className="search"><span aria-hidden="true">⌕</span><span className="sr-only">Search posts</span><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search titles, topics, or keywords..." /></label>;
}
