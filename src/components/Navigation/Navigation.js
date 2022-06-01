import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.active}>
      Home
    </NavLink>

    <NavLink to="/authors" className={s.link} activeClassName={s.active}>
      Authors
    </NavLink>

    <NavLink to="/books" className={s.link} activeClassName={s.active}>
      Books
    </NavLink>
  </nav>
);

export default Navigation;
