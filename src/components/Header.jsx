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
      <Link to="/teacher-dashboard">
        <button style={headerButton}>TeacherDashboard</button>
      </Link>
      <Link to="/olympic-form">
        <button style={headerButton}>OlympicForm</button>
      </Link>
      <Link to="/hex-to-rgb">
        <button style={headerButton}>Hex to RGB</button>
      </Link>
    </header>
  );
}
