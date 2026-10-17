import type { Testimonial } from '../data/testimonials';

const KIND_LABEL: Record<Testimonial['kind'], string> = {
  recommendation: 'Recommendation letter',
  recognition: 'Institutional recognition',
  certificate: 'Work certificate',
};

export function TestimonialList({ items }: { items: Testimonial[] }) {
  return (
    <ul className="quotes">
      {items.map((t) => (
        <li className="quote reveal" key={t.author}>
          <span className="proj-kind">
            {KIND_LABEL[t.kind]} · {t.date}
          </span>
          <blockquote>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <p>{t.quote}</p>
          </blockquote>
          <footer>
            <strong>{t.author}</strong>
            <span>{t.role}</span>
            <span>{t.organisation}</span>
          </footer>
        </li>
      ))}
    </ul>
  );
}
