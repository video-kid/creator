import { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';

const CreatorPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Create Preview</h2>
      <p>{user?.name}</p>
    </div>
  );
};

export default CreatorPage;
