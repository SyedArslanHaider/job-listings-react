import "./TaskItem.css";
function TaskItem({ job }) {
  return (
    <div className="job-card">
      <div className="job-details">
        <div className="left">
          <img src={job.logo} alt={job.company} className="company-logo" />
          <div>
            <h4 className="company-name">{job.company}</h4>
            <h3 className="job-title">{job.position}</h3>
            <p className="job-meta">
              {job.postedAt} • {job.contract} • {job.location}
            </p>
          </div>
        </div>
        <div className="right">
          {job.languages.map((lang, index) => (
            <span key={index} className="language-badge">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TaskItem;
