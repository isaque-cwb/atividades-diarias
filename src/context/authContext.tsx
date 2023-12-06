import React, { createContext, useCallback, useState, ReactNode, useContext } from 'react';

type UserContextProps = {
  userContext: string
  handleNameChange: () => void

}

type UserContextChildrenProps = {
  children?: ReactNode
}


export const UserContext = createContext('');

export function UserProvider({ children }: UserContextChildrenProps) {
  const [userStateContext, setUserContext] = useState('');

  const handleNameChange = (newUser: string) => {
    setUserContext(newUser);
  };


  return (
    <UserContext.Provider value={userStateContext}>
      {children}
    </UserContext.Provider>
  );
};






