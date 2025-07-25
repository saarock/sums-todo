const TotalTask = ({ totalCount = 0 }) => {
  return (
    <div className="home-stat-card">
      <span className="home-stat-number">{totalCount}</span>
      <span className="home-stat-label">Total Tasks</span>
    </div>
  );
};

export default TotalTask;
