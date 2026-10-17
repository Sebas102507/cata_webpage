export const PROFILE = {
  name: 'Catalina Espitia Martínez',
  shortName: 'Catalina Espitia',
  initials: 'CE',
  title: 'Psychologist · APS-assessed · working toward registration in Australia',
  affiliation: 'Universidad Sergio Arboleda · Colegio Colombiano de Psicólogos',
  location: 'Sydney, NSW',
  origin: 'Bogotá, Colombia',
  email: 'cataespitia02@gmail.com',
  linkedin: 'https://www.linkedin.com/in/catalina-espitia-3b68431a7/',
  site: 'https://cataespitia.com',
  tagline:
    'I’m Catalina, a psychology graduate from Bogotá now based in Sydney. I trained in a psychiatric clinic and a maximum-security women’s prison, graduated cum laude, and I am working toward registration as a psychologist in Australia.',
  abstract: [
    'I am a Psychology graduate from Sergio Arboleda University in Colombia, where I completed a five-year professional degree with a Minor in Humanities and earned a cum laude distinction for my overall academic average. The Australian Psychological Society has assessed my degree as comparable to five years of study in psychology in Australia (APS reference 3688).',
    'My clinical training includes placements at one of Colombia’s leading psychiatric institutions and at a maximum-security women’s prison, where I worked with CBT, ACT and DBT and with forensic risk tools such as IVIC 2.0 and ICOC. I am a licensed psychologist in Colombia, an Australian citizen, and I am currently completing Lifeline’s Crisis Supporter training in Sydney. I am also a contributing author of a book chapter on evidence-based practice in forensic psychology, now under editorial review.',
  ],
  keywords: ['Clinical assessment', 'CBT · ACT · DBT', 'Forensic risk evaluation', 'Crisis intervention', 'Research', 'Bilingual: Spanish and English'],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'PTE Academic 83, C1 (2026) · Cambridge First, B2 (2019)' },
  ],
};

/** Quote shown in the hero panel: Catalina's own words, from her CV. */
export const HERO_QUOTE = {
  text: 'I am committed to ethical, person-centred psychological care, and to continuing my professional development within the Australian framework.',
  author: 'Catalina Espitia',
};

/** The one-sentence statement band under the hero. */
export const STATEMENT = 'Evidence-based, person-centred psychological support, shaped by clinical and forensic training and by the people I have worked with along the way.';

/** Areas of practice and tools, from the skills section of the CV and the placement certificates. */
export const FOCUS_AREAS: string[] = [
  'Clinical interviewing and mental health screening',
  'BDI-II, MMSE, MoCA and DASS-21',
  'Case formulation with CBT, DBT and ACT',
  'Forensic risk evaluation with IVIC 2.0 and ICOC',
  'Psychological reports for judicial decision-making',
  'Crisis intervention and safety planning',
  'Suicide risk assessment',
  'Group therapy and cognitive stimulation',
  'Ethical practice, consent and confidentiality',
  'Literature review and data analysis',
  'Psychometrics and research methodology',
  'Spanish and English',
];

export type Skill = { area: string; items: string[] };

export const SKILLS: Skill[] = [
  {
    area: 'Clinical assessment and mental health screening',
    items: ['Clinical interviewing', 'BDI-II', 'MMSE', 'MoCA', 'DASS-21', 'Diagnostic support and treatment planning'],
  },
  {
    area: 'Evidence-based intervention',
    items: ['Clinical case formulation', 'Cognitive Behavioural Therapy', 'Dialectical Behaviour Therapy', 'Acceptance and Commitment Therapy', 'Group therapy', 'Cognitive stimulation'],
  },
  {
    area: 'Forensic and risk evaluation',
    items: ['IVIC 2.0', 'ICOC', 'Psychosocial interviews', 'Behavioural risk assessment', 'Social reintegration potential', 'Psychological profiles'],
  },
  {
    area: 'Reporting, crisis and ethics',
    items: ['Psychological reports for judicial and administrative decisions', 'Crisis intervention', 'Lifeline CARE framework and Decision Support Tool', 'Confidentiality and informed consent', 'PsyBA and AHPRA standards', 'Culturally safe care'],
  },
  {
    area: 'Research and evidence-based practice',
    items: ['Scientific methodology', 'Literature reviews', 'Quantitative and qualitative data analysis', 'ATLAS.ti', 'Psychometric evaluation', 'Academic writing'],
  },
];
