import type { Award } from '../data/experience';
import type { ResearchItem } from '../data/research';

export function ResearchList({ items }: { items: ResearchItem[] }) {
  return (
    <ul className="research">
      {items.map((r) => (
        <li className="research-item reveal" key={r.title}>
          <div className="course-top">
            <span className="proj-kind">{r.kind}</span>
            {r.status && <span className="ready-status">{r.status}</span>}
          </div>
          <h4>{r.title}</h4>
          <p className="course-meta">{r.context}</p>
          <p className="research-summary">{r.summary}</p>
          {r.methods && (
            <div className="chips">
              {r.methods.map((m) => (
                <span className="chip" key={m}>
                  {m}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function AwardList({ items }: { items: Award[] }) {
  return (
    <ul className="ready">
      {items.map((a) => (
        <li className="ready-item reveal" key={a.name}>
          <span className="ready-status">{a.date}</span>
          <h4>{a.name}</h4>
          <p className="course-meta">{a.issuer}</p>
          <p>{a.detail}</p>
        </li>
      ))}
    </ul>
  );
}
