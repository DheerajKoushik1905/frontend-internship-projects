import Button from './Button.jsx';

export default function Card({ item, saved, onToggle }) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">{item.icon}</div>
      <div className="card-top"><span>{item.category}</span><small>{item.level}</small></div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Button variant={saved ? 'secondary active' : 'secondary'} onClick={() => onToggle(item.id)}>{saved ? 'Saved ✓' : 'Save card'}</Button>
    </article>
  );
}
