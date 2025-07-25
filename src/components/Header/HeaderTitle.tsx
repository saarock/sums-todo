
// Header title
const HeaderTitle = ({ title = "Task Dashboard" }) => {
  return (
    <div className="logo-section">
      <h1 className="logo-text">{title}</h1>
      <div className="logo-accent"></div>
    </div>
  );
};

export default HeaderTitle;
