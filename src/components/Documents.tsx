import { useEffect, useMemo, useState } from 'react';
import { DOCUMENTS, type Doc } from '../data/documents';

const modules = import.meta.glob('/src/assets/docs/*.{jpg,jpeg,png,webp}', { eager: true }) as Record<string, { default?: string }>;
const FILES: Record<string, string> = {};
for (const [path, mod] of Object.entries(modules)) {
  const name = path.split('/').pop() || path;
  if (mod?.default) FILES[name] = mod.default;
}

type Shown = Doc & { src: string };

export function DocumentGallery() {
  const all = useMemo<Shown[]>(() => DOCUMENTS.map((d) => ({ ...d, src: FILES[d.file] })).filter((d) => Boolean(d.src)), []);
  const groups = useMemo(() => Array.from(new Set(all.map((d) => d.group))), [all]);
  const [filter, setFilter] = useState<string>('All');
  const shown = filter === 'All' ? all : all.filter((d) => d.group === filter);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((v) => (v === null ? v : (v + 1) % shown.length));
      if (e.key === 'ArrowLeft') setOpen((v) => (v === null ? v : (v - 1 + shown.length) % shown.length));
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, shown.length]);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter documents">
        {['All', ...groups].map((g) => {
          const count = g === 'All' ? all.length : all.filter((d) => d.group === g).length;
          return (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={filter === g}
              className={`filter${filter === g ? ' is-active' : ''}`}
              onClick={() => {
                setFilter(g);
                setOpen(null);
              }}
            >
              {g} <span className="count">{count}</span>
            </button>
          );
        })}
      </div>
      <ul className="docs-grid">
        {shown.map((d, i) => (
          <li className="doc reveal" key={d.file}>
            <button type="button" className="doc-thumb" onClick={() => setOpen(i)} aria-label={`Open ${d.title}`}>
              <img src={d.src} alt={`${d.title}, ${d.issuer}`} loading="lazy" />
            </button>
            <div className="doc-body">
              <span className="proj-kind">{d.group}</span>
              <h4>{d.title}</h4>
              <p className="course-meta">
                {d.issuer} · {d.date}
              </p>
              {d.note && <p className="course-note">{d.note}</p>}
            </div>
          </li>
        ))}
      </ul>

      {open !== null && shown[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Document" onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setOpen(null)}>
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            aria-label="Previous document"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => (v === null ? v : (v - 1 + shown.length) % shown.length));
            }}
          >
            ‹
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={shown[open].src} alt={shown[open].title} />
            <figcaption>
              {shown[open].title} · {shown[open].issuer} · {shown[open].date}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav next"
            aria-label="Next document"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => (v === null ? v : (v + 1) % shown.length));
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
