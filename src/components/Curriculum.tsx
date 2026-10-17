import { useMemo, useState } from 'react';
import { COURSE_AREAS, GPA, SEMESTERS, TOTAL_CREDITS, type Course } from '../data/curriculum';

const INITIAL = 9;

function gradeClass(g: number) {
  if (g >= 4.8) return 'is-top';
  if (g >= 4.5) return 'is-high';
  return '';
}

function CourseCard({ course, area }: { course: Course; area: string }) {
  const sem = SEMESTERS.find((s) => s.n === course.semester);
  return (
    <article className="course">
      <div className="course-top">
        <span className="proj-kind">{area}</span>
        <span className={`grade ${gradeClass(course.grade)}`} aria-label={`Grade ${course.grade.toFixed(1)} out of 5`}>
          {course.grade.toFixed(1)}
        </span>
      </div>
      <h4>{course.name}</h4>
      <p className="course-meta">
        Semester {course.semester} · {sem?.label}
        {course.credits > 0 ? ` · ${course.credits} credits` : ''}
      </p>
      {course.note && <p className="course-note">{course.note}</p>}
    </article>
  );
}

export function Curriculum() {
  const [filter, setFilter] = useState<string>('All');
  const [all, setAll] = useState(false);
  const flat = useMemo(() => COURSE_AREAS.flatMap((a) => a.items.map((c) => ({ c, area: a.heading }))), []);
  const filtered = filter === 'All' ? flat : flat.filter((x) => x.area === filter);
  const shown = filter === 'All' && !all ? filtered.slice(0, INITIAL) : filtered;
  const hidden = filtered.length - shown.length;
  const blurb = COURSE_AREAS.find((a) => a.heading === filter)?.blurb;

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter courses by area">
        {['All', ...COURSE_AREAS.map((a) => a.heading)].map((f) => {
          const count = f === 'All' ? flat.length : flat.filter((x) => x.area === f).length;
          return (
            <button key={f} type="button" role="tab" aria-selected={filter === f} className={`filter${filter === f ? ' is-active' : ''}`} onClick={() => setFilter(f)}>
              {f} <span className="count">{count}</span>
            </button>
          );
        })}
      </div>
      {blurb && <p className="sub-intro">{blurb}</p>}
      <div className="course-grid">
        {shown.map(({ c, area }) => (
          <CourseCard key={`${c.name}-${c.semester}`} course={c} area={area} />
        ))}
      </div>
      {hidden > 0 && (
        <div className="more-row">
          <button type="button" className="btn btn-secondary" onClick={() => setAll(true)}>
            Show {hidden} more courses
          </button>
        </div>
      )}
      {filter === 'All' && all && flat.length > INITIAL && (
        <div className="more-row">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setAll(false)}>
            Show fewer
          </button>
        </div>
      )}
    </>
  );
}

/** Semester averages from the transcript, drawn as simple bars. Scale starts at 3.0 so the differences are visible. */
export function SemesterAverages() {
  const min = 3.0;
  const max = 5.0;
  return (
    <div className="averages">
      <div className="averages-head">
        <div>
          <span className="averages-gpa">{GPA.toFixed(2)}</span>
          <span className="averages-gpa-label">cumulative weighted average out of 5.0</span>
        </div>
        <div>
          <span className="averages-gpa">{TOTAL_CREDITS}</span>
          <span className="averages-gpa-label">credits approved over ten semesters</span>
        </div>
      </div>
      <ol className="bars" aria-label="Average grade per semester">
        {SEMESTERS.map((s) => {
          const pct = ((s.average - min) / (max - min)) * 100;
          return (
            <li key={s.n}>
              <span className="bar-label">
                <b>S{s.n}</b> {s.label}
              </span>
              <span className="bar-track" aria-hidden="true">
                <span className="bar-fill" style={{ width: `${pct}%` }} />
              </span>
              <span className="bar-value">{s.average.toFixed(2)}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
