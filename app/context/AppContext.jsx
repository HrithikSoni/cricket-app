import React, { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({selectedOptions: ""});

  return (
    <AppContext.Provider
      value={{
       userData,
       setUserData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
