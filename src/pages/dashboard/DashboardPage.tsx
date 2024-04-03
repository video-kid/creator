import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import Header from './components/Header/Header';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  const { user, changeUser } = useContext(UserContext);
  const logOutHandler = () => changeUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  return (
    <>
      <nav>
        {!user ? null : (
          <Header
            user={user}
            logOut={logOutHandler}
          />
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardPage;
