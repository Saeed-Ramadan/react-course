function Stats({ tasks }) {
const total = tasks.length;
const completed = tasks.filter(t => t.completed).length;
const pending = total - completed;
  return (
    <div className="stats">
      <h3>إحصائيات المهام</h3>
      <div className="stats-grid">
        <span> الكل : {total}</span>
        <span> المكتمل : {completed}</span>
        <span> المعلق : {pending}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
        //   style={{ width: `${presentage}%` }}
        ></div>
        {/* <p>{presentage}% مكتمل</p> */}
      </div>
    </div>
  );
}

export default Stats;
