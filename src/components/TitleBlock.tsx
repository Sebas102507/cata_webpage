import portrait from '../assets/me/profile.jpg';
import { PROFILE, SKILLS } from '../data/profile';
import { IconLinkedIn, IconMail, IconPin } from './Icons';
import { LOGOS, LOGO_NAMES } from './logos';
import { emph } from '../lib/emph';

const HERO_TAGS_LEFT = ['Clinical psychology', 'Legal psychology', 'Mental health'];
const HERO_TAGS_RIGHT = ['Community work', 'Research', 'Spanish · English'];

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-head">
          <span className="eyebrow">
            <IconPin /> {PROFILE.location} · from {PROFILE.origin}
          </span>
          <h1 className="hero-title">{emph('Every person deserves to be *heard*.')}</h1>
        </div>

        <div className="hero-stage">
          <span className="hero-ghost" aria-hidden="true">
            PSYCHOLOGIST
          </span>
          <ul className="hero-tags left" aria-label="Focus areas">
            {HERO_TAGS_LEFT.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="hero-photo">
            <img src={portrait} alt={`Portrait of ${PROFILE.shortName} holding her Psychology diploma`} width={969} height={1400} fetchPriority="high" />
          </div>
          <ul className="hero-tags right" aria-label="Strengths">
            {HERO_TAGS_RIGHT.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <span className="hero-bubble a" aria-hidden="true">
            Hello, my name is
          </span>
          <span className="hero-bubble b" aria-hidden="true">
            Psychologist, cum laude
          </span>
        </div>
        <div className="hero-name" aria-hidden="true">
          {PROFILE.shortName}
        </div>

        <div className="hero-below">
          <p className="hero-sub">{PROFILE.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#story">
              Read my story <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-ghost" href={`mailto:${PROFILE.email}`}>
              <IconMail /> Email me
            </a>
          </div>
          <div className="hero-social">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn /> LinkedIn
            </a>
            <span>{PROFILE.title}</span>
            <span className="hero-scroll">Scroll down ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Organisations shown under the hero. A logo file in src/assets/companies/<key>_logo.* replaces the wordmark automatically. */
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
          <h4>{s.area}</h4>
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
