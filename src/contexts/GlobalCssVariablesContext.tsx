import React, { useState, createContext } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IGlobalCssVariablesContext {
  isConfigGearOpen: boolean;
  handleConfigOpen: () => void;
}

const GlobalCssVariablesContext = createContext<IGlobalCssVariablesContext>(
  {} as IGlobalCssVariablesContext
);

export const GlobalCssVariablesProvider: React.FC<IProps> = ({ children }) => {
  const [isConfigGearOpen, setIsConfigGearOpen] = useState<boolean>(true);

  const handleConfigOpen = () => {
    setIsConfigGearOpen(prev => !prev)
  }

  return (
    <GlobalCssVariablesContext.Provider value={{ isConfigGearOpen: isConfigGearOpen, handleConfigOpen }}>
      {children}
    </GlobalCssVariablesContext.Provider>
  );
};

export default GlobalCssVariablesContext;
