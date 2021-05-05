import React, { createContext, useState } from "react";
import { empresas, skills, portfolio } from "../data/data";
import { validate } from "../helpers/helpers";

export const FunctionalsContent = createContext();

const FunctionalsProvider = ({ children }) => {
  const [titleContent, setTitleContent] = useState(
    "Mi portafolio - Juan Carlos Avila"
  );
  return (
    <FunctionalsContent.Provider
      value={{
        empresas,
        skills,
        portfolio,
        titleContent,
        setTitleContent,
        validate,
      }}
    >
      {children}
    </FunctionalsContent.Provider>
  );
};
export default FunctionalsProvider;
