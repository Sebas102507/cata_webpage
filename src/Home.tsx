import { useEffect, useState } from 'react';
import { AWARDS, COURSES, CREDENTIALS, EDUCATION, OTHER_WORK, VOLUNTEERING, WORK } from './data/experience';
import { RESEARCH } from './data/research';
import { TESTIMONIALS } from './data/testimonials';
import { Curriculum, SemesterAverages } from './components/Curriculum';
import { DocumentGallery } from './components/Documents';
import { CourseTimeline, CredentialTimeline, EducationTimeline, SimpleTimeline, WorkTimeline } from './components/Experience';
import { ContactCta, Footer } from './components/Footer';
import { Nav, type NavItem } from './components/Masthead';
import { Interests, Languages, ReadyGrid, ValuePillars } from './components/Personal';
import { AwardList, ResearchList } from './components/Research';
import { Section, SubHead, TwoCol } from './components/Section';
import { Story } from './components/Story';
import { TestimonialList } from './components/Testimonials';
import { About, FocusAreas, Hero, LogoStrip, Skills, Statement } from './components/TitleBlock';
import { emph } from './lib/emph';

const NAV: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'documents', label: 'Documents' },
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
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav items={NAV} activeId={active} />

      <main id="main">
        <Hero />
        <Statement />
        <About />
        <FocusAreas />
        <ValuePillars />
        <LogoStrip />

        <Section id="story" eyebrow="The story" title="From *Bogotá* to Sydney, in six chapters." intro="Where I come from, where I trained, and what each stop added.">
          <Story />
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Every role, told as a *story*: the context, the work, the outcome."
          intro="Placements, crisis-support training and the roles I held while studying and after moving to Sydney."
        >
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Trained where it *matters*.')}</h3>
                <p className="story-aside-text">
                  A psychiatric clinic, a maximum-security women’s prison, the professional body’s diploma courses, an elected student representative, in-home care in Sydney and now
                  Lifeline’s crisis-supporter training. Different settings, the same job: understand the person in front of you and act with respect.
                </p>
              </>
            }
          >
            <WorkTimeline items={WORK} />
            <SubHead title="Other *work* experience" count={OTHER_WORK.length} />
            <SimpleTimeline items={OTHER_WORK} />
            <SubHead title="Volunteering and *teaching*" count={VOLUNTEERING.length} />
            <SimpleTimeline items={VOLUNTEERING} />
          </TwoCol>
          <SubHead title="What I *know how* to do" />
          <Skills />
        </Section>

        <Section
          id="education"
          eyebrow="Education and credentials"
          title="A *cum laude* degree, a professional licence, and the checks to work in Australia."
          intro="Ten semesters at the Universidad Sergio Arboleda, nine short courses and diplomas, and the assessments and checks that followed."
        >
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('Psychologist, *cum laude*.')}</h3>
                <p className="story-aside-text">
                  The Universidad Sergio Arboleda awarded the Psychologist degree on 2 April 2025 with the cum laude distinction and a Minor in Humanities, for a cumulative average of 4.58 out
                  of 5 across 160 credits. The Australian Psychological Society assessed it as comparable to five years of study in psychology in Australia.
                </p>
              </>
            }
          >
            <EducationTimeline items={EDUCATION} />
            <SubHead title="Courses and *diplomas*" count={COURSES.length} />
            <CourseTimeline items={COURSES} />
            <SubHead title="Licence, assessments, language and checks" count={CREDENTIALS.length} />
            <CredentialTimeline items={CREDENTIALS} />
          </TwoCol>
          <SubHead title="Coursework, *course by course*" />
          <p className="sub-intro">Every subject from the official transcript, with its grade out of 5. Filter by area to see the clinical, legal, social or research track.</p>
          <SemesterAverages />
          <div style={{ height: 16 }} />
          <Curriculum />
        </Section>

        <Section id="research" eyebrow="Research and awards" title="Research, a *book chapter*, and the recognitions along the way." intro="A thesis, a chapter under editorial review, five research and community projects, and four distinctions.">
          <ResearchList items={RESEARCH} />
          <SubHead title="Awards and *recognition*" count={AWARDS.length} />
          <AwardList items={AWARDS} />
        </Section>

        <Section id="recommendations" eyebrow="Recommendations" title="What the people I worked with *say*." intro="A recommendation letter, a placement evaluation, an institutional recognition and a work certificate, quoted as written.">
          <TwoCol
            aside={
              <>
                <h3 className="story-aside-title">{emph('In their *words*.')}</h3>
                <p className="story-aside-text">A forensic psychologist who became a co-author, the director of a national prison, and a shop owner who asked me back for a second season. The original documents are in the section below.</p>
              </>
            }
          >
            <TestimonialList items={TESTIMONIALS} />
          </TwoCol>
        </Section>

        <Section id="documents" eyebrow="Documents" title="The *certificates* behind every claim." intro="Diplomas, distinctions, licence, assessments, placement certificates and work certificates, with their official English translations where they exist. Identity numbers are redacted. Click any document to enlarge it.">
          <DocumentGallery />
        </Section>

        <Section id="australia" eyebrow="In Australia" title="Ready to *work* in Australia." intro="Citizenship, assessment, checks, language and documents: what an employer or volunteer organisation usually asks for first.">
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
