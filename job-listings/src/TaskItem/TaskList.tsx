import TaskItem from "./TaskItem";
import "./TaskList.css";
interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface TaskListProps {
  data: Job[];
}
function TaskList({ data }: TaskListProps) {
  return (
    <>
      {data.map((job) => (
        <TaskItem key={job.id} job={job} />
      ))}
    </>
  );
}
export default TaskList;
