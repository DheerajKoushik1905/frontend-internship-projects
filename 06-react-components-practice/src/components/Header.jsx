export default function Header({ title, subtitle, savedCount }) {
  return (
    <header className="site-header">
      <a href="#top" className="brand">Component<span>Lab</span></a>
      <div className="header-copy"><strong>{title}</strong><small>{subtitle}</small></div>
      <div className="saved-badge" aria-label={`${savedCount} saved cards`}>Saved <span>{savedCount}</span></div>
    </header>
  );
}
