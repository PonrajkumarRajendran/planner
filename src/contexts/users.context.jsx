import { createContext, useState, useEffect, Children } from "react";

export const UserContext = createContext({
  user: "",
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const verifyUser = async () => {
        const response = await fetch(
          "https://pure-badlands-08295.herokuapp.com//api/user/verify",
          {
            method: "POST",
            headers: {
              "auth-token": localStorage.getItem("user"),
            },
          }
        );
        const result = await response.text();
        if (result != "Invalid Token") {
          setUser(localStorage.getItem("user"));
        } else {
          setUser("");
        }
      };
      verifyUser();
    }
  }, []);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserProvider;
