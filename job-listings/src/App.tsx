import "./App.css";
import TaskList from "./TaskItem/TaskList";
import Data from "./data.json";
function App() {
  return (
    <>
      <div className="app-container">
        <TaskList data={Data} />
      </div>
    </>
  );
}
export default App;
