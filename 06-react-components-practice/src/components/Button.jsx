export default function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false }) {
  return <button type={type} className={`button ${variant}`} onClick={onClick} disabled={disabled}>{children}</button>;
}
