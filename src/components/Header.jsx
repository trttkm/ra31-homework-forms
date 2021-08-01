import { Link } from 'react-router-dom';

export function Header() {
  
  const headerButton = {
    padding: '8px 12px',
    marginRight: '10px',
    backgroundColor: '#ffffff',
    color: '#444444',
    border: '1px solid #444444',
    zIndex: 100,
  };
  
  return (
    <header>
      <Link to="/hex-to-rgb">
        <button style={headerButton}>Hex to RGB</button>
      </Link>
      <Link to="/walks-list">
        <button style={headerButton}>Walks List</button>
      </Link>
    </header>
  );
}
