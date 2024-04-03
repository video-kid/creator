import { ReactNode, createContext, useState } from 'react';
import { user } from '../types/users';

type userContext = {
  changeUser: (user?: user) => void;
  user?: user;
};

export const UserContext = createContext<userContext>({
  changeUser: () => null,
});

const UserDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user | undefined>(undefined);

  const changeUser = (user: user | undefined) => setUser(user);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserDetailsProvider };
