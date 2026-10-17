export const PROFILE = {
  name: 'Catalina Espitia Martínez',
  shortName: 'Catalina Espitia',
  initials: 'CE',
  title: 'Psychologist · Clinical and Legal Psychology',
  affiliation: 'Universidad Sergio Arboleda · Colegio Colombiano de Psicólogos',
  location: 'Sydney, Australia',
  origin: 'Bogotá, Colombia',
  // TODO: replace the placeholders below with Catalina's real contact details.
  email: 'catalina.espitia@example.com',
  linkedin: 'https://www.linkedin.com/in/catalina-espitia-martinez/',
  site: 'https://catalinaespitia.com',
  tagline:
    'I’m Catalina, a psychologist from Bogotá now based in Sydney. I graduated cum laude, trained in clinical and legal psychology, and I care most about the moment a person feels heard and starts to move forward.',
  abstract: [
    'I hold a degree in Psychology from the Universidad Sergio Arboleda in Bogotá, awarded with honours (cum laude) in April 2025 with a cumulative average of 4.58 out of 5. I am a licensed psychologist in Colombia, registered with the Colegio Colombiano de Psicólogos.',
    'My training combined clinical practice with legal and forensic psychology, including a supervised placement inside the women’s prison of Bogotá. I am an Australian citizen, hold a NSW Working With Children Check and a National Police Check, and I am building my career in Sydney.',
  ],
  keywords: ['Clinical psychology', 'Legal and forensic psychology', 'Psychosocial intervention', 'Mental health', 'Research', 'Community psychology', 'Bilingual: Spanish and English'],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'PTE Academic 83 (C1)' },
  ],
};

export type Skill = { area: string; items: string[] };

export const SKILLS: Skill[] = [
  {
    area: 'Clinical and health psychology',
    items: ['Clinical interview', 'Psychological assessment and psychometrics', 'Psychopathology', 'Systemic intervention techniques', 'Neurodevelopment assessment', 'Suicide and risk-behaviour prevention'],
  },
  {
    area: 'Legal and forensic psychology',
    items: ['Legal psychology', 'Violence and conflict', 'Social reintegration programmes', 'Work with people deprived of liberty', 'Criminology'],
  },
  {
    area: 'Social and community work',
    items: ['Psychosocial intervention', 'Community psychology', 'Social project management', 'Psychology and education', 'Psychology and social change'],
  },
  {
    area: 'Research and methods',
    items: ['Research design', 'Descriptive and inferential statistics', 'Scientific writing', 'Literature search', 'Academic co-authorship'],
  },
  {
    area: 'Organisational and people skills',
    items: ['Organisational change management', 'Programme coordination and logistics', 'Customer service and sales', 'Virtual-session support', 'Spanish and English'],
  },
];

/** Quote shown in the hero panel. */
export const HERO_QUOTE = {
  text: 'I am not what happened to me, I am what I choose to become.',
  author: 'Carl Jung',
};

/** The one-sentence statement band under the hero. */
export const STATEMENT = 'Compassionate, evidence-based psychological support, dedicated to helping people feel heard, understood and able to move forward.';

/** Areas of practice, drawn from the degree programme, the placements and the COLPSIC diplomas. */
export const FOCUS_AREAS: string[] = [
  'Clinical and health psychology',
  'Psychopathology and assessment',
  'Legal and forensic psychology',
  'Violence and conflict',
  'Social reintegration',
  'Psychosocial intervention',
  'Community psychology',
  'Development across the lifespan',
  'Neurodevelopment assessment',
  'Mental health and suicide prevention',
  'Psychology and education',
  'Research and psychometrics',
];
