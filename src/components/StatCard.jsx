function StatCard({ title, count, color }) {
  return (
    <div className="statCard" style={{backgroundColor: color}}>
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}

export default StatCard;
