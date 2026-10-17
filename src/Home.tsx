import { useEffect, useState } from 'react';
import { CREDENTIALS, EDUCATION, WORK } from './data/experience';
import { TESTIMONIALS } from './data/testimonials';
import { Curriculum, SemesterAverages } from './components/Curriculum';
import { CredentialTimeline, EducationTimeline, WorkTimeline } from './components/Experience';
import { ContactCta, Footer } from './components/Footer';
import { Nav, type NavItem } from './components/Masthead';
import { Interests, Languages, ReadyGrid, ValuePillars } from './components/Personal';
import { Section, SubHead, TwoCol } from './components/Section';
import { Story } from './components/Story';
import { TestimonialList } from './components/Testimonials';
import { Hero, LogoStrip, Skills } from './components/TitleBlock';
import { emph } from './lib/emph';

const NAV: NavItem[] = [
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'australia', label: 'In Australia' },
  { id: 'contact', label: 'Contact' },
];
const NAV_IDS = NAV.map((n) => n.id);

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length || !('IntersectionObserver' in window)) return;
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) visible.set(en.target.id, en.boundingClientRect.top);
          else visible.delete(en.target.id);
        }
        if (visible.size) setActive([...visible.entries()].sort((a, b) => a[1] - b[1])[0][0]);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export default function Home() {
  const active = useActiveSection(NAV_IDS);
  useReveal();

  return (
    <>
      <a className="skip-link" href="#story">
        Skip to content
      </a>
      <Nav items={NAV} activeId={active} />

      <main id="main">
        <Hero />
        <LogoStrip />
        <ValuePillars />

        <Section id="story" eyebrow="The story" title="From *Bogotá* to Sydney, in five chapters." intro="Where I come from, what I trained in, and what each stop taught me.">
          <Story />
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Every role, told as a *story*: the context, the work, the outcome."
          intro="Placements, professional work and the responsibilities I took on while studying."
        >
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Trained where it *matters*.')}</h3>
                <p className="story-aside-text">
                  A clinical placement, a legal psychology practicum inside a women’s prison, a year assisting the professional body’s diploma programmes, an elected student
                  representative and a book chapter in progress. Different settings, the same job: understand the person in front of you and act with respect.
                </p>
              </>
            }
          >
            <WorkTimeline items={WORK} />
          </TwoCol>
          <SubHead title="What I *know how* to do" />
          <Skills />
        </Section>

        <Section
          id="education"
          eyebrow="Education and credentials"
          title="A *cum laude* degree, a professional licence, and the checks to work in Australia."
          intro="Ten semesters at the Universidad Sergio Arboleda, then the paperwork that lets me practise and work."
        >
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Psychologist, *cum laude*.')}</h3>
                <p className="story-aside-text">
                  The Universidad Sergio Arboleda awarded the Psychologist degree on 2 April 2025 with the cum laude distinction, for a cumulative average of 4.58 out of 5 across 160
                  credits. The Colegio Colombiano de Psicólogos issued the professional licence three months later.
                </p>
              </>
            }
          >
            <EducationTimeline items={EDUCATION} />
            <SubHead title="Licence, language and checks" count={CREDENTIALS.length} />
            <CredentialTimeline items={CREDENTIALS} />
          </TwoCol>
        </Section>

        <Section
          id="coursework"
          eyebrow="Coursework"
          title="What I *studied*, course by course."
          intro="Every subject from the official transcript, with its grade out of 5. Filter by area to see the clinical, legal, social or research track."
        >
          <SemesterAverages />
          <SubHead title="Courses by *area*" />
          <Curriculum />
        </Section>

        <Section id="recommendations" eyebrow="Recommendations" title="What the people I worked with *say*." intro="A recommendation letter, an institutional recognition and a work certificate, quoted as written.">
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('In their *words*.')}</h3>
                <p className="story-aside-text">
                  A forensic psychologist who became a co-author, the director of a national prison, and a shop owner who asked me back for a second season. Full documents are
                  available on request.
                </p>
              </>
            }
          >
            <TestimonialList items={TESTIMONIALS} />
          </TwoCol>
        </Section>

        <Section id="australia" eyebrow="In Australia" title="Ready to *work* in Australia." intro="Citizenship, checks, language and documents: everything an employer or volunteer organisation usually asks for first.">
          <ReadyGrid />
          <SubHead title="Languages" />
          <Languages />
          <SubHead title="What I *care* about" />
          <Interests />
        </Section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
