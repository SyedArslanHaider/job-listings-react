import "./TaskItem.css";
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
interface TaskItemProps {
  job: Job;
}
function TaskItem({ job }: TaskItemProps) {
  return (
    <div className="job-card">
      <div className="job-details">
        <div className="left">
          <img src={job.logo} alt={job.company} className="company-logo" />
          <div>
            <h4 className="company-name">{job.company}</h4>
            <h3 className="job-title">{job.position}</h3>
            <p className="job-meta">
              {job.postedAt} . {job.contract} . {job.location}
            </p>
          </div>
        </div>
        <div className="right">
          <span className="language-badge">{job.role}</span>
          <span className="language-badge">{job.level}</span>
          {job.languages.map((languages, index) => (
            <span key={index} className="language-badge">
              {languages}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TaskItem;
