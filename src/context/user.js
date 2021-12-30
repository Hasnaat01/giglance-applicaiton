import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("authUser")) || null;

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(user));
  }, [user]);

  const addUser = (authUser) => {
    setUser(authUser);
  };

  const signOut = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  const UserDetails = user;

  return (
    <UserContext.Provider value={{ user, UserDetails, addUser, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
