export default function FilterBar({ categories, active, onChange }) {
  return <div className="filters" aria-label="Filter posts by category">{categories.map((category) => <button key={category} className={active === category ? 'active' : ''} onClick={() => onChange(category)}>{category}</button>)}</div>;
}
