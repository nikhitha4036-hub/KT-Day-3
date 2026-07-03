import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="Navbar">
      <NavLink className="Navbar__brand" to="/">
        Smartlogix AI
      </NavLink>
      <nav className="Navbar__links" aria-label="Primary navigation">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'Navbar__link Navbar__link--active' : 'Navbar__link'
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'Navbar__link Navbar__link--active' : 'Navbar__link'
          }
          to="/careers"
        >
          Careers
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
