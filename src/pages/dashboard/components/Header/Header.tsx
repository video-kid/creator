import { useState } from 'react';
import Avatar from '../../../../components/Avatar/Avatar';
import { user } from '../../../../types/users';
import { Link } from 'react-router-dom';

type headerProps = {
  logOut: () => void;
  user: user;
};

const Header = ({ user, logOut }: headerProps) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <h1>Panel</h1>
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        data-testid='menu-button'>
        <Avatar
          name={user.name}
          data-testid='avatar'
        />
      </button>
      {isUserMenuOpen ? (
        <ul data-testid='menu-wrapper'>
          <li>
            <Link to='creator'>Creator</Link>
          </li>
          <li>
            <button onClick={logOut}>log out</button>
          </li>
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
