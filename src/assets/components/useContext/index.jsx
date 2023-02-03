import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserData = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Clintonrocha98/repos")
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
