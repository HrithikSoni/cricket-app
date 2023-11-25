import React, { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
const [modalVisible, setModalVisible] = useState(false);
const [selectedOption, setSelectedOption] = useState(null);
const [optionsArray, setOptionsArray] = useState([]);
const [labels, setLabels] = useState({title:"", searchBarLabel: ""})
  return (
    <AppContext.Provider
      value={{
      modalVisible,
      setModalVisible,
      selectedOption,
      setSelectedOption,
      optionsArray,
      setOptionsArray,
      labels,
      setLabels
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
