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

/** Psychology roles and placements, in the order of the CV. */
export const WORK: ExperienceItem[] = [
  {
    organisation: 'Lifeline Harbour to Hawkesbury',
    role: 'Telephone Crisis Supporter Trainee (volunteer)',
    start: 'Jul 2026',
    end: 'Present',
    location: 'Sydney, NSW',
    context: 'Lifeline is Australia’s national crisis support and suicide prevention service. New crisis supporters complete the Crisis Supporter Workplace Training (CSWT) before taking calls.',
    work: 'I am completing Stage 1 Initial Training through weekly group sessions and eLearning modules covering crisis theory, suicide risk assessment, domestic violence and culturally sensitive support, applying the CARE framework and the Decision Support Tool for safety planning.',
    outcome: 'Reflective practice through group debriefs and individual supervision, and preparation for the Gateway Assessment and the supervised placement from October to December 2026, followed by an 82-hour internship.',
    details: [
      'Crisis theory, suicide risk assessment, domestic violence and culturally sensitive support.',
      'CARE framework and Decision Support Tool (DST) for safety planning.',
      'Group debriefs and individual supervision.',
    ],
    areas: ['Crisis intervention', 'Suicide risk assessment', 'Safety planning', 'Telephone support'],
  },
  {
    organisation: 'Clínica Nuestra Señora de La Paz',
    client: 'Clinical Psychology Practicum',
    role: 'Clinical Psychology Intern',
    start: 'Feb 2024',
    end: 'Jun 2024',
    location: 'Bogotá, Colombia · 360 hours',
    context: 'One of Colombia’s leading psychiatric institutions. The clinic’s Scientific Sub-direction certifies the placement from 6 February to 8 June 2024 as a student of the Sergio Arboleda Psychology programme.',
    work: 'I delivered evidence-based psychological interventions to 63 clients with severe mental health conditions, including suicidal behaviour, schizophrenia, bipolar disorder, borderline personality disorder and substance use, inside a multidisciplinary team.',
    outcome: 'Training and applied practice in CBT, DBT, ACT, group therapy and cognitive stimulation, and a co-authored research proposal with data collection led by me for a correlational study on affective symptoms and quality of life in caregivers of people with Bipolar Affective Disorder.',
    details: [
      'Therapeutic communication, emotional attunement and rapport with people in psychological distress.',
      'Screening and recruitment of a 119-person sample for the caregivers study, with methodological rigour and ethical compliance.',
      'Grade 4.5 out of 5 on the academic transcript.',
    ],
    areas: ['CBT', 'DBT', 'ACT', 'Group therapy', 'Cognitive stimulation', 'Severe mental illness'],
  },
  {
    organisation: 'El Buen Pastor Women’s Penitentiary (INPEC)',
    client: 'Legal Psychology Practicum',
    role: 'Legal Psychology Intern',
    start: 'Aug 2024',
    end: 'Nov 2024',
    location: 'Bogotá, Colombia · 360 hours',
    logoKeys: ['inpec'],
    context: 'The High and Medium Security Women’s Prison and Penitentiary of Bogotá, run by the National Penitentiary and Prison Institute (INPEC). I was assigned to its Evaluation and Treatment Centre (CET) under Resolution 1271 of 6 August 2024.',
    work: 'I conducted semi-structured interviews and psychological assessments of women deprived of liberty for security-phase transitions, developed a psychological profile for each woman, prepared weekly reports and forms, verified records in the SISIPEC system and assigned treatment programmes matching each profile.',
    outcome: 'Worked with 51 women with pre-existing mental health conditions and histories of trauma, administered 129 psychological tools including IVIC 2.0 and ICOC, and prepared psychosocial reports used in official decision-making. The prison’s evaluation scored the placement 100 out of 100, and on 24 December 2024 the director granted the university a Special Recognition for the interns’ work.',
    details: [
      'Supported crisis intervention processes with calm and empathetic support in emotionally acute situations.',
      'Observation, clinical judgement and communication in a high-pressure legal-psychology context.',
      'Grade 4.9 out of 5 on the academic transcript.',
    ],
    areas: ['Forensic assessment', 'IVIC 2.0', 'ICOC', 'Psychosocial reports', 'Social reintegration', 'Crisis support'],
  },
  {
    organisation: 'Private care assistance',
    role: 'Health Support Carer',
    start: 'Aug 2025',
    end: 'May 2026',
    location: 'Sydney, NSW',
    context: 'In-home support for an elderly woman with cognitive decline.',
    work: 'I managed daily care and administrative logistics, supported cognitive health through structured activities and memory aids, facilitated mobility exercises and assisted with daily living routines.',
    outcome: 'A safe, organised living environment that met hygiene and WHS standards, with health status monitored and documented, support for symptoms of depression, and full confidentiality of the person’s records and history.',
    details: ['Structured activities and memory aids for cognitive health.', 'Monitoring and documentation of health status.', 'Confidentiality and privacy of personal records.'],
    areas: ['Aged care', 'Cognitive health', 'Depression support', 'Daily living'],
  },
  {
    organisation: 'Universidad Sergio Arboleda',
    client: 'Faculty of Psychology',
    role: 'Student Representative (elected)',
    start: 'Apr 2023',
    end: 'Apr 2024',
    location: 'Bogotá, Colombia',
    logoKeys: ['sergio_arboleda'],
    context: 'The Dean of Students’ Office certifies that I was elected Student Representative of the Psychology programme for the 2023–2024 period.',
    work: 'I conceptualised and implemented a peer mentorship programme to improve academic performance and student retention through structured guidance and monitoring, and acted as liaison between students and faculty.',
    outcome: 'Feedback loops and administrative meetings that fed into faculty policies and student well-being initiatives, with conflict resolution used to address academic and social needs.',
    details: ['Elected by the students of the programme.', 'Peer mentorship programme with structured guidance and monitoring.', 'Liaison between students, lecturers and the Dean’s Office.'],
    areas: ['Leadership', 'Peer mentoring', 'Conflict resolution', 'Advocacy'],
    images: [{ file: 'honours_ceremony.jpg', caption: 'Academic excellence distinction ceremony, 2023.' }],
  },
  {
    organisation: 'Colegio Colombiano de Psicólogos (COLPSIC)',
    client: 'Bogotá and Cundinamarca Chapter',
    role: 'Mentor and Assistant, diploma courses',
    start: 'Feb 2023',
    end: 'Dec 2023',
    location: 'Bogotá, Colombia · virtual',
    logoKeys: ['colpsic'],
    context: 'COLPSIC is the professional body of psychologists in Colombia. Its Bogotá chapter runs continuing-education diploma courses for practising psychologists.',
    work: 'I supervised the delivery of four professional diploma courses, managing logistics, virtual platforms and participant engagement, and acted as the primary liaison between professors and practitioners, resolving academic and technical enquiries.',
    outcome: 'Four courses delivered to a high standard: Clinical Psychology and Psychological Testing (120 h, Feb–May 2023), Psychopathology and Neuropsychological Disorders (84 h, Jul–Oct 2023), Public Policies in Mental Health (64 h, Jul–Oct 2023) and the second cohort of Strategies for the Prevention of Risk Behaviours and Suicide (120 h, Oct–Dec 2023).',
    details: ['Attendance supervision and course flow.', 'Technical support during virtual sessions.', 'Direct assistance to participants’ continuing professional development.'],
    areas: ['Programme coordination', 'Clinical psychology', 'Psychopathology', 'Mental health policy', 'Suicide prevention'],
  },
];

export type SimpleRole = { organisation: string; role: string; period: string; location: string; bullets: string[] };

/** Other work experience, as listed in the CV. */
export const OTHER_WORK: SimpleRole[] = [
  {
    organisation: 'Officeworks',
    role: 'Retail and Print Assistant',
    period: 'Sep 2025 – Present',
    location: 'Sydney, NSW',
    bullets: [
      'High-volume same-day print orders alongside walk-in customers and self-service support, managing competing priorities across nine-hour shifts.',
      'Regular support for elderly customers with technology, adapting communication style and pace, and daily de-escalation of frustrated customers.',
    ],
  },
  {
    organisation: 'Private family',
    role: 'Babysitter',
    period: 'Jul 2025 – Sep 2025',
    location: 'Sydney, NSW',
    bullets: [
      'Dedicated care for a school-aged child, focusing on emotional regulation and responding with empathy and calm to behavioural challenges.',
      'Daily educational and recreational routines: school transitions, meal preparation and structured playtime.',
    ],
  },
  {
    organisation: 'Foundever · PayPal (Venmo)',
    role: 'Customer Service Agent (CSR Inbound)',
    period: 'Jan 2025 – Jun 2025',
    location: 'Bogotá, Colombia',
    bullets: [
      'High-volume inbound enquiries on account access, transactions, disputes and fraud, using active listening, emotional regulation and de-escalation with distressed users.',
      'Case management in CRM systems with accurate documentation and solution-focused outcomes.',
    ],
  },
  {
    organisation: 'Tienda de Sueños',
    role: 'Retail Sales Assistant (seasonal)',
    period: 'Dec 2023 and Dec 2024',
    location: 'Bogotá, Colombia',
    bullets: [
      'Identified customer needs and recommended products; resolved concerns calmly while handling multiple interactions.',
      'The owner certified commitment, responsibility and strong customer service, with a significant contribution to sales goals.',
    ],
  },
];

export const VOLUNTEERING: SimpleRole[] = [
  {
    organisation: 'Women in Media',
    role: 'Event volunteer',
    period: '15 Aug 2025',
    location: 'ICC Sydney',
    bullets: ['Guest welcoming, registration and audience engagement as Q&A microphone rover for high-profile attendees.', 'Workshop set-up and merchandise sales.'],
  },
  {
    organisation: 'Community dining room',
    role: 'Volunteer',
    period: 'Feb 2023',
    location: 'Bogotá, Colombia',
    bullets: [
      'Designed and led activities promoting social interaction, cognitive stimulation and emotional well-being for senior participants.',
      'Adapted group exercises, games and creative tasks to the physical and cognitive needs of diverse participants.',
    ],
  },
  {
    organisation: 'Nicolás Buenaventura School',
    role: 'English teacher',
    period: 'Feb 2018 – Jul 2018',
    location: 'Bogotá, Colombia',
    bullets: ['Planned lessons, managed classroom groups and assessed student performance.', 'Communicated regularly with students and parents to monitor progress.'],
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
    degree: 'Bachelor in Psychology, cum laude, with a Minor in Humanities',
    period: 'Jan 2020 – Dec 2024 · awarded 2 Apr 2025',
    location: 'Bogotá, Colombia',
    logoKeys: ['sergio_arboleda'],
    notes: [
      'Five-year full-time professional degree (Psicóloga). Cumulative weighted average 4.58 / 5 over 160 credits.',
      'Cum laude distinction for the overall academic average.',
      'Minor in Humanities (Minora Studia Humaniorum Litterarum), 14 credits of the humanities core.',
      'Assessed by the Australian Psychological Society as comparable to five years of study in psychology in Australia (APS-3688, 1 May 2026).',
      'Research group in clinical and health psychology graded 4.9, 5.0 and 5.0 across its three stages; diploma, transcript and certificates officially translated into English.',
    ],
  },
  {
    institution: 'Colegio Anglo Americano',
    degree: 'High school diploma (Bachiller Académico)',
    period: 'Graduated 2 Dec 2019',
    location: 'Bogotá, Colombia',
  },
];

export type Course = { name: string; issuer: string; date: string; detail?: string };

/** Short courses and diploma programmes, from the Education and Certifications section of the CV. */
export const COURSES: Course[] = [
  { name: 'Parenting and Conscious Education', issuer: 'Pontificia Universidad Javeriana', date: '17 Jul – 28 Aug 2024', detail: '18 hours, continuing education.' },
  { name: 'Diploma course: Strategies for Suicide Prevention (second cohort)', issuer: 'Colegio Colombiano de Psicólogos', date: '3 Oct – 6 Dec 2023', detail: '120 hours.' },
  { name: 'Diploma: Psychopathology and Public Policies in Mental Health', issuer: 'Colegio Colombiano de Psicólogos', date: 'Jul – Oct 2023', detail: 'Psychopathology and neuropsychological disorders (84 h) and public policies in mental health (64 h).' },
  { name: 'Comprehensive Approach Course for Victims of Sexual Violence', issuer: 'District Secretariat of Health of Bogotá', date: 'Aug 2023' },
  { name: 'Diploma course in Mental Health', issuer: 'Politécnico de Suramérica', date: 'Jun – Jul 2023' },
  { name: 'Good Clinical Practice for Social and Behavioral Research in Clinical Trials', issuer: 'NIH Office of Behavioral and Social Sciences Research', date: 'Jun 2023' },
  { name: 'Diploma course in Clinical Psychology and Psychological Testing', issuer: 'Colegio Colombiano de Psicólogos', date: '23 Feb – 5 May 2023', detail: '120 hours.' },
  { name: 'mhGAP course', issuer: 'Pan American Health Organization (PAHO/WHO)', date: 'Jan 2023' },
  { name: 'Psychological First Aid', issuer: 'Universitat Autònoma de Barcelona', date: 'Oct 2022' },
];

export type Credential = { name: string; issuer: string; date: string; detail?: string; logoKey?: string };

export const CREDENTIALS: Credential[] = [
  {
    name: 'APS Assessment of Psychology Qualifications',
    issuer: 'Australian Psychological Society',
    date: '1 May 2026',
    detail: 'Degree assessed as comparable to five years of study in psychology in Australia (APS-3688). Not a certificate of registration.',
  },
  {
    name: 'Professional Psychologist Card (Tarjeta Profesional) No. 301907',
    issuer: 'Colegio Colombiano de Psicólogos',
    date: '7 Jul 2025',
    detail: 'Legal licence to practise psychology in Colombia under Law 1090 of 2006. Lifetime validity.',
    logoKey: 'colpsic',
  },
  {
    name: 'PTE Academic · Overall 83 (C1)',
    issuer: 'Pearson',
    date: '20 Sep 2026 · valid to Sep 2028',
    detail: 'Listening 89 · Speaking 90 · Reading 73 · Writing 73.',
  },
  {
    name: 'Cambridge English: First (FCE) · Grade C, level B2',
    issuer: 'Cambridge Assessment English',
    date: 'Nov 2019',
    detail: 'Overall score 163.',
  },
  {
    name: 'National Police Certificate · no disclosable court outcomes',
    issuer: 'NSW Police Force',
    date: '25 Aug 2025',
  },
  {
    name: 'Working With Children Check (volunteer)',
    issuer: 'NSW Office of the Children’s Guardian',
    date: 'Valid to 1 Sep 2030',
  },
];

export type Award = { name: string; issuer: string; date: string; detail: string };

export const AWARDS: Award[] = [
  {
    name: 'Cum Laude',
    issuer: 'Universidad Sergio Arboleda',
    date: '2 Apr 2025',
    detail: 'Degree with honours for an outstanding overall academic average (4.58 / 5) across the five-year Psychology degree.',
  },
  {
    name: 'Academic Excellence Recognition, three times',
    issuer: 'Rodrigo Noguera Laborde Programme, Universidad Sergio Arboleda',
    date: 'Aug 2023 · Aug 2024 · Feb 2025',
    detail: 'A merit distinction awarded each semester to the highest-achieving students of each programme, based solely on academic average. Awarded for 2023-2, 2024-1 and 2024-2.',
  },
  {
    name: 'Special Recognition from El Buen Pastor Women’s Penitentiary',
    issuer: 'INPEC, Ministry of Justice and Law',
    date: '24 Dec 2024',
    detail: 'Issued by the prison director for the psychology interns’ outstanding performance, sense of belonging and contribution to the social reintegration of women deprived of liberty. The placement evaluation scored 100 / 100.',
  },
  {
    name: 'Speaker, II International Congress on the Mental Health of Care Workers',
    issuer: 'Universidad Libre and COLPSIC Valle chapter, Cali',
    date: '1 Dec 2023',
    detail: 'Presented undergraduate research on affective symptoms and quality of life in caregivers of patients with Bipolar Affective Disorder.',
  },
];
