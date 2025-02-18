import TaskItem from "./TaskItem";
import "./TaskList.css";
function TaskList({ data }) {
  return (
    <>
      {data.map((job) => (
        <TaskItem key={job.id} job={job} />
      ))}
    </>
  );
}
export default TaskList;
