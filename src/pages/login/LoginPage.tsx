import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const { changeUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    !!user && navigate('/dashboard', { replace: true });
  }, [user?.id]);

  const loginHandler = () => {
    changeUser({ name: 'Anna Pond', id: '2137' });
  };

  return (
    <div>
      <button
        onClick={loginHandler}
        type='button'>
        login
      </button>
    </div>
  );
};

export default LoginPage;
