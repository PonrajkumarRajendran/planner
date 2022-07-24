import "./authpage-button.styles.scss";
const AuthpageButton = ({ buttonName, ...otherProps }) => {
  return (
    <div className="authpagebutton-container">
      <button {...otherProps} className="authpage-button">
        {buttonName}
      </button>
    </div>
  );
};
export default AuthpageButton;
