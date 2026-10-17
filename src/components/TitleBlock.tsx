import portrait from '../assets/me/profile.jpg';
import aboutPhoto from '../assets/story/graduation_garden.jpg';
import { FOCUS_AREAS, HERO_QUOTE, PROFILE, SKILLS, STATEMENT } from '../data/profile';
import { IconLinkedIn, IconMail } from './Icons';
import { LOGOS, LOGO_NAMES } from './logos';
import { emph } from '../lib/emph';

export function Hero() {
  return (
    <section className="hero2" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero2-panel">
          <div className="hero2-quote">
            <blockquote>
              <p>“{HERO_QUOTE.text}”</p>
              <cite>{HERO_QUOTE.author}</cite>
            </blockquote>
            <div className="hero2-actions">
              <a className="btn btn-outline" href="#about">
                Meet Catalina
              </a>
              <a className="btn btn-link" href={`mailto:${PROFILE.email}`}>
                <IconMail /> Email me
              </a>
            </div>
          </div>
          <div className="hero2-photo">
            <img src={portrait} alt={`Portrait of ${PROFILE.shortName}`} width={969} height={1400} fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Statement() {
  return (
    <section className="statement" aria-label="Approach">
      <div className="container">
        <p>{STATEMENT}</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-h">
      <div className="container about-grid">
        <div className="about-photo">
          <img src={aboutPhoto} alt={`${PROFILE.shortName} after her graduation ceremony`} loading="lazy" />
          <span className="decor-half" aria-hidden="true" />
        </div>
        <div className="about-text">
          <span className="kicker">Welcome</span>
          <h2 id="about-h" className="script">
            I am Catalina!
          </h2>
          {PROFILE.abstract.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="about-actions">
            <a className="btn btn-outline" href="#story">
              My story
            </a>
            <a className="btn btn-link" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19l8-8" />
    </svg>
  );
}

export function FocusAreas() {
  return (
    <section className="focus" aria-labelledby="focus-h">
      <div className="container">
        <h3 id="focus-h" className="kicker">
          Areas of practice
        </h3>
        <ul className="focus-list">
          {FOCUS_AREAS.map((f) => (
            <li key={f}>
              <IconLeaf />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Organisations strip. A logo file in src/assets/companies/<key>_logo.* replaces the wordmark automatically. */
const ORGS: { key: string; name: string }[] = [
  { key: 'sergio_arboleda', name: 'Universidad Sergio Arboleda' },
  { key: 'colpsic', name: 'Colegio Colombiano de Psicólogos' },
  { key: 'inpec', name: 'INPEC' },
  { key: 'tienda_de_suenos', name: 'Tienda de Sueños' },
  { key: 'pearson', name: 'Pearson PTE Academic' },
];

export function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Organisations">
      <div className="container">
        <p>Studied at, trained with and worked for</p>
        <div className="logo-row">
          {ORGS.map((o) => {
            const logo = LOGOS.find((l) => l.key === o.key);
            return logo ? (
              <img key={o.key} src={logo.src} alt={LOGO_NAMES[o.key] || o.name} title={o.name} />
            ) : (
              <span className="wordmark" key={o.key}>
                {o.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <div className="skills compact">
      {SKILLS.map((s) => (
        <div className="skill" key={s.area}>
          <h4>{emph(s.area)}</h4>
          <div className="chips">
            {s.items.map((i) => (
              <span className="chip" key={i}>
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
