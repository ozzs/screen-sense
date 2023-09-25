'use client';
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from 'react';

interface UserContextProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<UserContextProps>({
  userName: '',
  setUserName: (): string => ''
});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState('');

  return <UserContext.Provider value={{ userName, setUserName }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
