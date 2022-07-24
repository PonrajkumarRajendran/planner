import "./authpage_header.styles.scss";
const AuthpageHeader = ({ title }) => {
  return (
    <div className="authpageheader-container">
      <span>{title}</span>
    </div>
  );
};
export default AuthpageHeader;
