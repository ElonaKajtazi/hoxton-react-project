import { Link } from 'react-router-dom';
import { NavBarBtn } from './NavBarBtn';

export function NavBar() {
  return (
    <header className='header'>
      <div className='header-logo'> QuizzApp</div>
      <nav>
        <ul className='nav-list-items'>
          <li className='link'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='link'>
            <Link to='/categories'>Categories</Link>
          </li>
        </ul>
      </nav>
      <NavBarBtn />
    </header>
  );
}
