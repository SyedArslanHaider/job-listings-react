import "./App.css";
import TaskList from "./TaskItem/TaskList";
import Data from "./data.json";
function App() {
  return (
    <>
      <div className="header">
        <img
          src="/images/bg-header-desktop.svg"
          alt="Background Header"
          className="header-img"
        />
      </div>
      <div className="app-container">
        <TaskList data={Data} />
      </div>
    </>
  );
}
export default App;
