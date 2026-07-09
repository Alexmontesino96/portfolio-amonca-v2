import { Fragment } from "react";

export default function BigMarquee() {
  return (
    <div className="bigmq" aria-hidden="true">
      <div className="bigmq__lane" id="bigmqLane">
        {Array.from({ length: 4 }).map((_, i) => (
          <Fragment key={i}>
            <span>Bring the problem</span><em>—</em><span className="o">take it home running</span><em>—</em>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
