import "./RouteLine.css";

export default function RouteLine({ waypoints, activeId }) {
  const activeWp = waypoints.find(wp => wp.id === activeId);
  const activeRatio = activeWp ? activeWp.ratio : 0;

  return (
    <div className="routeline" aria-hidden="true">
      <div className="routeline__track">
        <div className="routeline__fill" style={{ height: `${activeRatio * 100}%` }} />
        {waypoints.map((wp) => (
          <div
            key={wp.id}
            className={`routeline__dot ${activeId === wp.id ? "is-active" : ""} ${
              activeRatio >= wp.ratio ? "is-passed" : ""
            }`}
            style={{ top: `${wp.ratio * 100}%` }}
          >
            <span className="routeline__label">{wp.label}</span>
          </div>
        ))}
        <div className="routeline__marker" style={{ top: `${activeRatio * 100}%` }}>
          <span className="routeline__marker-dot" />
        </div>
      </div>
    </div>
  );
}
