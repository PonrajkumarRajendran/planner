import "./authpage-input.styles.scss";
const AuthpageInput = ({ label, ...otherProps }) => {
  return (
    <div className="authpageinput-container">
      <input {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default AuthpageInput;
