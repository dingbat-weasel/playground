import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>Apeiron</Link>

      <p>Sandbox Collection</p>
    </header>
  );
}

export default Header;
