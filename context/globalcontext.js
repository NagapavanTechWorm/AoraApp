import { useContext, createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

// Create the context
const GlobalContext = createContext();

// Create a custom hook to use the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Create the provider component
const GlobalProvider = ({ children }) => {
  const [isloggedIn, setisloggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setisloggedIn(true);
          setUser(res);
        } else {
          setisloggedIn(false);
          setUser(null);
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ setisloggedIn, isloggedIn, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
