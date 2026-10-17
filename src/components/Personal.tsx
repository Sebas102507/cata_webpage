import { INTERESTS, READY, VALUE_PILLARS } from '../data/personal';
import { PROFILE } from '../data/profile';
import { emph } from '../lib/emph';

export function ValuePillars() {
  return (
    <section className="pillars-wrap" aria-labelledby="pillars-h">
      <div className="container">
        <div className="pillars-head reveal">
          <span className="eyebrow">What I bring</span>
          <h2 id="pillars-h">{emph('A psychologist trained in the *clinic*, the *courtroom’s* shadow and the *community*.')}</h2>
          <p>
            Five years of training at the Universidad Sergio Arboleda, two supervised placements and a cum laude degree. Underneath all of it, one question: what does this person
            need in order to be heard, and to move forward?
          </p>
        </div>
        <ul className="pillars">
          {VALUE_PILLARS.map((p, i) => (
            <li className="pillar reveal" key={p.title}>
              <span className="pillar-num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ReadyGrid() {
  return (
    <ul className="ready">
      {READY.map((r) => (
        <li className="ready-item reveal" key={r.title}>
          <span className="ready-status">{r.status}</span>
          <h4>{r.title}</h4>
          <p>{r.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Languages() {
  return (
    <ul className="langs">
      {PROFILE.languages.map((l) => (
        <li key={l.name}>
          <strong>{l.name}</strong>
          <span>{l.level}</span>
        </li>
      ))}
    </ul>
  );
}

export function Interests() {
  return (
    <ul className="hobbies">
      {INTERESTS.map((h) => (
        <li className="hobby reveal" key={h.title}>
          <h4>{h.title}</h4>
          <p>{h.text}</p>
        </li>
      ))}
    </ul>
  );
}
