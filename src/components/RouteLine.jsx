import "./RouteLine.css";

export default function RouteLine({ progress, waypoints, activeId }) {
  return (
    <div className="routeline" aria-hidden="true">
      <div className="routeline__track">
        <div className="routeline__fill" style={{ height: `${progress * 100}%` }} />
        {waypoints.map((wp) => (
          <div
            key={wp.id}
            className={`routeline__dot ${activeId === wp.id ? "is-active" : ""} ${
              progress * 100 >= wp.ratio * 100 ? "is-passed" : ""
            }`}
            style={{ top: `${wp.ratio * 100}%` }}
          >
            <span className="routeline__label">{wp.label}</span>
          </div>
        ))}
        <div className="routeline__marker" style={{ top: `${progress * 100}%` }}>
          <span className="routeline__marker-dot" />
        </div>
      </div>
    </div>
  );
}
