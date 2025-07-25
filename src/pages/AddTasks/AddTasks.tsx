
import { Plus } from "lucide-react"
import AddTask from "../../components/AddTask/AddTask"
import "./AddTask.css";
import { useStats } from "../../hooks";

const AddTasks = () => {

const {completedCount,pendingCount, totalCount} = useStats();





  return (
    <div className="home-container">
      <div className="home-content">
        {/* Hero Section */}
        <div className="home-hero">
          <h1 className="home-title">Task Master</h1>
          <p className="home-subtitle">
            Organize your life, boost your productivity, and achieve your goals with our beautiful task management
            system. Start by creating your first task below.
          </p>
        </div>

        {/* Main Task Creation Card */}
        <div className="home-task-card">
          <div className="home-task-header">
            <h2 className="home-task-title">
              <Plus className="home-task-icon" />
              Create New Task
            </h2>
            <p className="home-task-description">
              What would you like to accomplish today? Add a new task to get started on your journey to productivity.
            </p>
          </div>

          <div className="home-task-input-wrapper">
            <AddTask />
          </div>
        </div>

        {/* Stats Section */}
        <div className="home-stats">
          <div className="home-stat-card">
            <span className="home-stat-number">{totalCount}</span>
            <span className="home-stat-label">Total Tasks</span>
          </div>

          <div className="home-stat-card">
            <span className="home-stat-number">{completedCount}</span>
            <span className="home-stat-label">Completed</span>
          </div>

          <div className="home-stat-card">
            <span className="home-stat-number">{pendingCount}</span>
            <span className="home-stat-label">Pending</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTasks
