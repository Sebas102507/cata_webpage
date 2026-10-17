export type ExperienceItem = {
  organisation: string;
  client?: string;
  role: string;
  start: string;
  end: string;
  location: string;
  logoKeys?: string[];
  context: string;
  work: string;
  outcome: string;
  details: string[];
  areas: string[];
  links?: { label: string; url: string }[];
  images?: { file: string; caption: string }[];
};

export const WORK: ExperienceItem[] = [
  {
    organisation: 'Book chapter in legal psychology',
    client: 'with Santiago Amaya Nassar',
    role: 'Co-author',
    start: '2025',
    end: 'Present',
    location: 'Bogotá · remote',
    context:
      'Santiago Amaya Nassar, forensic psychologist and Academic Director of the Colombian Association of Criminology, taught me Legal Psychology and Violence and Conflict, and interviewed me for the legal psychology internship.',
    work: 'Based on the skills he saw in class and in the internship, he invited me to co-author a chapter in a book he is coordinating. I research, draft and revise the chapter with him.',
    outcome: 'In his words, I have fulfilled all the requested tasks and responsibilities. The chapter is in preparation.',
    details: [
      'Literature search and synthesis of scientific sources for the chapter.',
      'Theoretical development and presentation of scientific material in an accessible way.',
      'Working to deadlines with an academic co-author.',
    ],
    areas: ['Legal psychology', 'Criminology', 'Scientific writing', 'Research'],
  },
  {
    organisation: 'INPEC · Women’s Prison and Penitentiary of Bogotá',
    client: 'Legal Psychology Practicum II',
    role: 'Legal Psychology Intern',
    start: 'Jul 2024',
    end: 'Dec 2024',
    location: 'Bogotá, Colombia · 20 h/week',
    logoKeys: ['inpec'],
    context:
      'The High and Medium Security Women’s Prison and Penitentiary of Bogotá is a national correctional facility run by the National Penitentiary and Prison Institute (INPEC). Psychology students from the Universidad Sergio Arboleda complete their legal psychology practicum there.',
    work: 'I worked with women deprived of their liberty, supporting the facility’s social reintegration (resocialización) programme with the knowledge from my clinical and legal training, under academic and institutional supervision.',
    outcome:
      'On 24 December 2024 the prison’s director granted the university a Special Recognition for the psychology interns, highlighting their sense of belonging, responsibility and excellent performance of the assigned duties. I completed the practicum with a grade of 4.9 out of 5.',
    details: [
      'Supported resocialisation activities for the prison population.',
      'Applied legal psychology, violence and conflict and psychosocial intervention frameworks in a high-security setting.',
      'Worked within institutional protocols and confidentiality requirements.',
    ],
    areas: ['Legal and forensic psychology', 'Social reintegration', 'Psychosocial intervention', 'Group work'],
  },
  {
    organisation: 'Clinical placement',
    client: 'Clinical Psychology Practicum I',
    role: 'Clinical Psychology Intern',
    start: 'Jan 2024',
    end: 'Jun 2024',
    location: 'Bogotá, Colombia · 20 h/week',
    context: 'The first of the two supervised placements of the Psychology programme, worth six credits and twenty hours a week, alongside coursework in violence and conflict and in neurodevelopmental assessment and intervention.',
    work: 'Supervised clinical practice: interviewing, assessment, case formulation and intervention planning, with weekly academic supervision.',
    outcome: 'Completed with a grade of 4.5 out of 5 and the foundation for the legal psychology placement that followed.',
    details: [
      'Clinical interview and psychological assessment under supervision.',
      'Case formulation drawing on the systemic, humanistic and behavioural approaches studied in the programme.',
      'Documentation and ethical handling of clinical information.',
    ],
    areas: ['Clinical psychology', 'Assessment', 'Case formulation', 'Supervision'],
  },
  {
    organisation: 'Tienda de Sueños',
    client: 'Cedritos 151 Shopping Centre',
    role: 'Sales Advisor (seasonal)',
    start: 'Dec 2023',
    end: 'Dec 2024',
    location: 'Bogotá, Colombia',
    logoKeys: ['tienda_de_suenos'],
    context: 'A retail store in a Bogotá shopping centre during its busiest weeks of the year: 1–27 December 2023 and 3–26 December 2024.',
    work: 'I assisted customers with product selection, processed sales, organised and replenished merchandise, kept the visual presentation of the store and supported inventory tasks.',
    outcome: 'The owner, Francisco Romero, certified that I showed commitment, responsibility and strong customer service skills, and contributed significantly to the store’s sales goals. He asked me back for the second season.',
    details: ['Customer inquiries and a positive shopping experience in a high-volume season.', 'Point-of-sale transactions and stock organisation.'],
    areas: ['Customer service', 'Sales', 'Teamwork'],
  },
  {
    organisation: 'Universidad Sergio Arboleda',
    client: 'Psychology Programme',
    role: 'Student Representative (elected)',
    start: 'Apr 2023',
    end: '2024',
    location: 'Bogotá, Colombia',
    logoKeys: ['sergio_arboleda'],
    context: 'The Dean of Students’ Office certifies that I was elected Student Representative of the Psychology Programme for the 2023–2024 period.',
    work: 'I represented my classmates before the programme and the university, carried their concerns to academic staff and helped communicate decisions back.',
    outcome: 'Two years of listening to a whole programme of students and negotiating on their behalf, in the same period I was admitted to the Honours Programme.',
    details: ['Elected by the students of the programme.', 'Liaison between students, lecturers and the Dean’s Office.'],
    areas: ['Leadership', 'Communication', 'Advocacy'],
    images: [{ file: 'honours_ceremony.jpg', caption: 'Honours Programme ceremony, 2023-I.' }],
  },
  {
    organisation: 'Colegio Colombiano de Psicólogos (COLPSIC)',
    client: 'Bogotá Chapter',
    role: 'Monitor and Assistant, diploma programmes',
    start: 'Feb 2023',
    end: 'Dec 2023',
    location: 'Bogotá, Colombia · virtual',
    logoKeys: ['colpsic'],
    context: 'COLPSIC is the professional body of psychologists in Colombia. Its Bogotá Chapter runs continuing-education diploma programmes for practising psychologists.',
    work: 'I was the monitor and assistant for three diplomas: Clinical Psychology and Psychological Testing (23 Feb – 5 May 2023), Psychopathology and Public Health Policies in Mental Health (from 12 Jul 2023) and the second cohort of Mental Health: Strategies for the Prevention of Risk Behaviours and Suicide (3 Oct – 6 Dec 2023).',
    outcome: 'Three programmes delivered smoothly, and a year of exposure to the clinical topics practising psychologists train in, two years before my own graduation.',
    details: [
      'Supervised class attendance and provided technical support during virtual sessions.',
      'Mediated communication between participants and instructors and resolved participant queries.',
      'Logistical support to ensure the successful development of each programme.',
    ],
    areas: ['Programme coordination', 'Clinical psychology', 'Mental health', 'Suicide prevention'],
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  logoKeys?: string[];
  notes?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Universidad Sergio Arboleda',
    degree: 'Psychologist (Psicóloga) · professional degree, cum laude',
    period: 'Jan 2020 – Dec 2024 · awarded 2 Apr 2025',
    location: 'Bogotá, Colombia',
    logoKeys: ['sergio_arboleda'],
    notes: [
      'Cumulative weighted average 4.58 / 5 over 160 approved credits and ten semesters.',
      'Cum laude distinction for academic performance.',
      'Two supervised placements: clinical psychology (2024-1) and legal psychology at the women’s prison of Bogotá (2024-2).',
      'Research project in three stages graded 5.0, 5.0 and 4.8; member of the research group in clinical and health psychology.',
      'Diploma, transcript and certificates officially translated into English by a sworn translator (July 2025).',
    ],
  },
  {
    institution: 'Universidad Sergio Arboleda',
    degree: 'Honours Programme (Programa de Honores) 2023-I',
    period: '2023',
    location: 'Bogotá, Colombia',
    logoKeys: ['sergio_arboleda'],
    notes: ['Admitted to the university’s honours programme for high-performing students.'],
  },
  {
    institution: 'Universidad Sergio Arboleda',
    degree: 'Student Representative, Psychology Programme',
    period: '2023 – 2024',
    location: 'Bogotá, Colombia',
    logoKeys: ['sergio_arboleda'],
    notes: ['Elected representative, certified by the Dean of Students’ Office on 17 April 2023.'],
  },
];

export type Credential = { name: string; issuer: string; date: string; detail?: string; logoKey?: string };

export const CREDENTIALS: Credential[] = [
  {
    name: 'Professional Psychologist Card (Tarjeta Profesional) No. 301907',
    issuer: 'Colegio Colombiano de Psicólogos',
    date: '7 Jul 2025',
    detail: 'Legal licence to practise psychology in Colombia under Law 1090 of 2006. Lifetime validity.',
    logoKey: 'colpsic',
  },
  {
    name: 'PTE Academic · Overall 83',
    issuer: 'Pearson',
    date: '20 Sep 2026 · valid to Sep 2028',
    detail: 'Listening 89 · Speaking 90 · Reading 73 · Writing 73.',
    logoKey: 'pearson',
  },
  {
    name: 'National Police Certificate · no disclosable court outcomes',
    issuer: 'NSW Police Force',
    date: '25 Aug 2025',
    detail: 'Employment name and date-of-birth check.',
    logoKey: 'nsw_police',
  },
  {
    name: 'Working With Children Check (volunteer)',
    issuer: 'NSW Office of the Children’s Guardian',
    date: 'Valid to 1 Sep 2030',
    detail: 'Cleared to work with children in volunteer roles.',
    logoKey: 'wwcc',
  },
];
