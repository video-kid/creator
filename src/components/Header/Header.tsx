import { useState } from 'react';
import Avatar from '../Avatar/Avatar';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <h1>Creator</h1>
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        data-testid='menu-button'>
        <Avatar
          name='Cassandra Snail'
          data-testid='avatar'
        />
      </button>
      {isUserMenuOpen ? (
        <ul data-testid='menu-wrapper'>
          <li>
            <a href='/'>Details</a>
          </li>
          <li>
            <button>log out</button>
          </li>
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
