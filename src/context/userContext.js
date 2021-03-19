import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userPoint, setUserPoint] = useState("");

  const addUserPoint = (e) => {
    setUserPoint(e);
  };
  return(
      <UserContext.Provider value={{userPoint, addUserPoint}}>
          {children}
      </UserContext.Provider>
  )
};
