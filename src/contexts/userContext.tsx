
import {
  createContext,
  ReactNode,
  useState,
} from "react";


export const UserContextData = createContext({} as userProviderProps);

interface UserContextProviderProps {
  children: ReactNode;
}

type userProviderProps = {
  dataProfiles: object;
  setDataProfiles: React.Dispatch<React.SetStateAction<object>>;
};

export const UserContextProvider  = (
  { children }: UserContextProviderProps,
) => {
  const [dataProfiles, setDataProfiles]= useState({})

  return (
    <UserContextData.Provider value={{ dataProfiles, setDataProfiles }}>
      {children}
    </UserContextData.Provider>
  );
};
