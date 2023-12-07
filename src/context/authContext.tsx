import { User } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';

export type UserAuthProps = {
  user: User
}

type AuthContextProps = {
  userAuth: UserAuthProps | null,
  handleStateUserChange: (userAuth: UserAuthProps) => void,
  handleClearChange: () => void,
}


const UserContext = createContext<AuthContextProps>({} as AuthContextProps);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userAuth, setUserAuth] = useState<UserAuthProps | null>(null);

  const handleStateUserChange = (userAuth: UserAuthProps) => {
    setUserAuth(userAuth);
  };

  const handleClearChange = () => {
    setUserAuth(null);
  };



  return (
    <UserContext.Provider value={{ userAuth, handleStateUserChange, handleClearChange }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(UserContext)
  return context
}






