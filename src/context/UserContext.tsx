import React, { createContext, useState } from "react";
import { AuthUser } from "../model/user";

type UserContextProps = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextProps | null>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState({} as AuthUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
