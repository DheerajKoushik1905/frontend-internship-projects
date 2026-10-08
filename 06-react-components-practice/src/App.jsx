import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import Form from './components/Form.jsx';

const starterCards = [
  { id: 1, icon: '⚛', category: 'React', level: 'Core', title: 'Props', description: 'Pass data from a parent component to reusable child components.' },
  { id: 2, icon: '↻', category: 'React', level: 'Core', title: 'State', description: 'Store values that change over time and trigger interface updates.' },
  { id: 3, icon: '⌁', category: 'UI', level: 'Pattern', title: 'Composition', description: 'Build larger interfaces by combining small focused components.' },
  { id: 4, icon: '✓', category: 'Practice', level: 'Hands-on', title: 'Events', description: 'Respond to user actions using click, change, and submit handlers.' }
];

export default function App() {
  const [cards, setCards] = useState(starterCards);
  const [saved, setSaved] = useState([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  function toggleSaved(id) { setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); }
  function addCard(data) {
    const icons = ['✦', '◈', '↗', '◎'];
    setCards((current) => [...current, { id: Date.now(), icon: icons[current.length % icons.length], level: 'New', ...data }]);
  }
  const visibleCards = showSavedOnly ? cards.filter((card) => saved.includes(card.id)) : cards;

  return (
    <div id="top" className="app-shell">
      <Header title="Reusable React Components" subtitle="Props + state + dynamic rendering" savedCount={saved.length} />
      <main>
        <section className="hero">
          <p className="kicker">Assignment 02 · React practice</p>
          <h1>Five reusable components. One interactive interface.</h1>
          <p>This project demonstrates <code>Header</code>, <code>Footer</code>, <code>Card</code>, <code>Button</code>, and <code>Form</code> components while using props and state for dynamic rendering.</p>
          <div className="hero-actions"><Button onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}>Create a card</Button><Button variant="secondary" onClick={() => setShowSavedOnly((value) => !value)}>{showSavedOnly ? 'Show all cards' : 'Show saved only'}</Button></div>
        </section>

        <section className="cards-section">
          <div className="section-head"><div><p className="kicker">Dynamic rendering</p><h2>{showSavedOnly ? 'Saved cards' : 'Component concepts'}</h2></div><span>{visibleCards.length} visible</span></div>
          {visibleCards.length ? <div className="card-grid">{visibleCards.map((item) => <Card key={item.id} item={item} saved={saved.includes(item.id)} onToggle={toggleSaved} />)}</div> : <div className="empty">No saved cards yet. Save a card or show all cards.</div>}
        </section>

        <section className="form-section" id="form"><div><p className="kicker">Stateful form</p><h2>Add a card</h2><p>Form fields are controlled by React state. Submitting valid data updates the card list immediately.</p></div><Form onAdd={addCard} /></section>
      </main>
      <Footer name="Rolla Dheeraj Koushik" />
    </div>
  );
}
