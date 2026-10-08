import { useState } from 'react';
import Button from './Button.jsx';

export default function Form({ onAdd }) {
  const [formData, setFormData] = useState({ title: '', description: '', category: 'Practice' });
  const [error, setError] = useState('');

  function handleChange(event) { setFormData((current) => ({ ...current, [event.target.name]: event.target.value })); }
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.title.trim().length < 3 || formData.description.trim().length < 8) {
      setError('Add a title of 3+ characters and a description of 8+ characters.');
      return;
    }
    onAdd({ ...formData, title: formData.title.trim(), description: formData.description.trim() });
    setFormData({ title: '', description: '', category: 'Practice' });
    setError('');
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <div><label htmlFor="title">Card title</label><input id="title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. State practice" /></div>
      <div><label htmlFor="category">Category</label><select id="category" name="category" value={formData.category} onChange={handleChange}><option>Practice</option><option>React</option><option>UI</option></select></div>
      <div className="wide"><label htmlFor="description">Description</label><textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" placeholder="What will this card demonstrate?" /></div>
      {error && <p className="form-error wide" role="alert">{error}</p>}
      <div className="wide"><Button type="submit">Add dynamic card →</Button></div>
    </form>
  );
}
