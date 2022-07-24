import { useState, useContext, useEffect } from "react";
import AuthpageButton from "../authpage-button/authpage-button.component";
import AuthpageInput from "../authpage-input/authpage-input.component";

import SideInfo from "../side-info/side-info.component";
import { UserContext } from "../../../contexts/users.context";
import { useNavigate } from "react-router-dom";
import "./signin.styles.scss";
const signinValues = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [signinFields, setSignInFields] = useState(signinValues);
  const { email, password } = signinFields;
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://pure-badlands-08295.herokuapp.com//api/user/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(signinFields),
        }
      );
      const result = await response.text();
      await localStorage.setItem("user", result);
      console.log(result);
    } catch (error) {
      window.alert(error.message);
      return;
    }
    console.log("crossed");
    setSignInFields(signinValues);
    window.location.reload();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInFields({ ...signinFields, [name]: value });
  };
  const handleNewAccount = () => {
    navigate("/signup");
  };
  return (
    <div className="signin-page">
      <div className="info-container">
        <SideInfo />
      </div>
      <div className="signin-container">
        <div className="signin-form">
          <form onSubmit={handleSubmit}>
            <AuthpageInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label={"E-Mail"}
            />
            <AuthpageInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              label={"PASSWORD"}
            />
            <AuthpageButton buttonName={"SIGN IN"} />
          </form>
        </div>
        <div className="divide-line"></div>
        <div className="signup-redirect">
          <span>
            New here? No issues,{" "}
            <span onClick={handleNewAccount} className="redirect-link">
              Create a new account
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
