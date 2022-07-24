import { useState } from "react";
import { createContext } from "react";

export const PageHeader = createContext({
  header: "",
});

const PageHeaderProvider = ({ children }) => {
  const [header, setHeader] = useState("HOME");
  const value = { header, setHeader };
  return <PageHeader.Provider value={value}>{children}</PageHeader.Provider>;
};

export default PageHeaderProvider;
