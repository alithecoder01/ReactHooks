import { Login } from "./Login";
import { User } from "./User";
import { useState, createContext } from "react";

export const AppContext = createContext(null);

export const Context = () => {
  const [UserName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{UserName,setUserName}}>
      <h1>UseContext Ex</h1>
      <Login />
      <User />
    </AppContext.Provider>
  );
};
