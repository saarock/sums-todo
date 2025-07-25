
const PendingTask = ({ pendingCount = 0 }) => {
  return (
    <div className="home-stat-card">
      <span className="home-stat-number">{pendingCount}</span>
      <span className="home-stat-label">Pending</span>
    </div>
  );
};

export default PendingTask;
