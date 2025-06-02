import { useState } from "react";
// import CompletedTaskList from "../components/CompletedTaskList";
// import PendingTaskList from "../components/PendingTaskList";
// import TaskForm from "../components/TaskForm";

const Home = () => {

  const [activeTab, setActiveTab] = useState<"pending" | "completed">("pending");

  return (
    <div className="container">
      <header>
        <div>
          <h2>My organizer</h2>
        </div>
      </header>
      <div className="task-layout">
      <div className="form-section">
        {/* <TaskForm /> */}
      </div>

      <div className="tabbed-section">
        <div className="tabs">
          <button
            className={activeTab === "pending" ? "active" : ""}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={activeTab === "completed" ? "active" : ""}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        <div className="tasks-display">
          {/* {activeTab === "pending" && <PendingTaskList />}
          {activeTab === "completed" && <CompletedTaskList />} */}
        </div>
      </div>
    </div>

    </div>
  );
};

export default Home;