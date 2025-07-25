const CompletedTask = ({ completedCount = 0 }) => {
  return (
    <div className="home-stat-card">
      <span className="home-stat-number">{completedCount}</span>
      <span className="home-stat-label">Completed</span>
    </div>
  );
};

export default CompletedTask;
