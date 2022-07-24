import NavigationItem from "../navigation-items/navigation-item.component";
import NavigationHeader from "../navigation-header/navigation-header.component";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { navigationValues } from "./navigation.utils";
import { UserContext } from "../../../contexts/users.context";
import { useContext } from "react";
import { useEffect } from "react";
import "./navigation.styles.scss";
const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("pageHeader")) {
      localStorage.setItem("pageHeader", "HOME");
    }
    if (!user) {
      navigate("/signin");
    } else {
      if (localStorage.getItem("pageTitle")) {
        navigate("/" + localStorage.getItem("pageTitle"));
      }
    }
  }, [user]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pageHeader");
    localStorage.removeItem("pageTitle");
    setUser("");
    navigate("/signin");
  };
  const logoClick = () => {
    localStorage.setItem("pageHeader", "HOME");
    localStorage.setItem("pageTitle", "");
  };
  return (
    <div className="navigation-container">
      <div className="navigation-left">
        <div className="app-logo">
          <Link onClick={logoClick} to={"/"}>
            <div className="logoimage"></div>
          </Link>
        </div>
        <div className="navigation-items">
          {navigationValues.map((navitem) => {
            return (
              <NavigationItem
                key={navitem.id}
                title={navitem.title}
                iconname={navitem.iconName}
                topage={navitem.toPage}
              />
            );
          })}
        </div>
      </div>
      <div className="navigation-right">
        <NavigationHeader signOutFunction={handleSignOut} />
        <div className="navigationright-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
