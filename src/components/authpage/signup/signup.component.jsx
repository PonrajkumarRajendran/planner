import SideInfo from "../side-info/side-info.component";
import AuthpageInput from "../authpage-input/authpage-input.component";
import AuthpageButton from "../authpage-button/authpage-button.component";
import { useNavigate } from "react-router-dom";
import "./signup.styles.scss";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/users.context";
const signupValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const [signupFields, setSignupFields] = useState(signupValues);
  const { name, email, password, confirm_password } = signupFields;
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
        "https://pure-badlands-08295.herokuapp.com/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(signupFields),
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
    setSignupFields(signupValues);
    window.location.reload();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupFields({ ...signupFields, [name]: value });
  };
  const handleOldAccount = () => {
    navigate("/signin");
  };
  return (
    <div className="signup-page">
      <div className="info-container">
        <SideInfo />
      </div>
      <div className="signup-container">
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <AuthpageInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              label={"USERNAME"}
            />
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
            <AuthpageInput
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange}
              label={"CONFIRM PASSWORD"}
            />
            <AuthpageButton type="submit" buttonName={"SIGN UP"} />
          </form>
        </div>
        <div className="divide-line"></div>
        <div className="signin-redirect">
          <span>
            Already a member, then{" "}
            <span onClick={handleOldAccount} className="redirect-link">
              Let's get you in.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
