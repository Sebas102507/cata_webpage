export type Course = { name: string; grade: number; credits: number; semester: number; note?: string };
export type CourseArea = { heading: string; blurb: string; items: Course[] };

/** Semester labels, from the official transcript (Secretaría General, 2 April 2025). */
export const SEMESTERS: { n: number; label: string; average: number }[] = [
  { n: 1, label: 'Jan – Jun 2020', average: 4.44 },
  { n: 2, label: 'Jul – Dec 2020', average: 4.56 },
  { n: 3, label: 'Jan – Jun 2021', average: 4.54 },
  { n: 4, label: 'Jul – Dec 2021', average: 4.77 },
  { n: 5, label: 'Jan – Jun 2022', average: 4.47 },
  { n: 6, label: 'Jul – Dec 2022', average: 4.74 },
  { n: 7, label: 'Jan – Jun 2023', average: 4.62 },
  { n: 8, label: 'Jul – Dec 2023', average: 4.49 },
  { n: 9, label: 'Jan – Jun 2024', average: 4.53 },
  { n: 10, label: 'Jul – Dec 2024', average: 4.69 },
];

export const GPA = 4.58;
export const TOTAL_CREDITS = 160;

export const COURSE_AREAS: CourseArea[] = [
  {
    heading: 'Clinical and health',
    blurb: 'Assessment, psychopathology, intervention and the supervised clinical placement.',
    items: [
      { name: 'Clinical Psychology Practice I', grade: 4.5, credits: 6, semester: 9, note: '20 hours a week, supervised placement' },
      { name: 'Clinical and Health Psychology', grade: 3.9, credits: 3, semester: 8 },
      { name: 'Evaluation and Intervention in Neurodevelopment', grade: 4.0, credits: 3, semester: 9 },
      { name: 'Systemic Intervention Techniques III', grade: 4.7, credits: 3, semester: 7 },
      { name: 'Psychopathology', grade: 4.8, credits: 3, semester: 6 },
      { name: 'Psychometrics', grade: 4.3, credits: 3, semester: 5 },
      { name: 'Research Group in Clinical and Health Psychology', grade: 4.9, credits: 0, semester: 8, note: 'Semillero de investigación' },
      { name: 'Research Group in Clinical and Health Psychology', grade: 3.2, credits: 0, semester: 7, note: 'Semillero de investigación, first term' },
    ],
  },
  {
    heading: 'Legal and forensic',
    blurb: 'The legal psychology track, ending in the placement at the women’s prison of Bogotá.',
    items: [
      { name: 'Legal Psychology Practice II', grade: 4.9, credits: 6, semester: 10, note: '20 hours a week at the INPEC women’s prison' },
      { name: 'Legal Psychology', grade: 4.7, credits: 2, semester: 8 },
      { name: 'Violence and Conflict', grade: 4.5, credits: 3, semester: 9 },
    ],
  },
  {
    heading: 'Social and community',
    blurb: 'Psychosocial intervention, community psychology, education and social projects.',
    items: [
      { name: 'Social Projects Management', grade: 5.0, credits: 3, semester: 10 },
      { name: 'Psychosocial Intervention', grade: 4.9, credits: 3, semester: 8 },
      { name: 'Psychology and Education', grade: 4.9, credits: 3, semester: 8 },
      { name: 'Community Psychology', grade: 4.6, credits: 2, semester: 7 },
      { name: 'Psychology and Politics', grade: 4.6, credits: 3, semester: 7 },
      { name: 'Psychology and Social Change', grade: 4.5, credits: 3, semester: 7 },
      { name: 'Subject, Subjectivity and Power', grade: 4.9, credits: 3, semester: 6 },
      { name: 'Social Psychology', grade: 4.2, credits: 2, semester: 6 },
    ],
  },
  {
    heading: 'Research and statistics',
    blurb: 'The three-stage research project and the quantitative toolkit behind it.',
    items: [
      { name: 'Research Project 3', grade: 4.8, credits: 4, semester: 10 },
      { name: 'Research Project 2', grade: 5.0, credits: 4, semester: 9 },
      { name: 'Research Project 1', grade: 5.0, credits: 2, semester: 8 },
      { name: 'Preliminary Research Project', grade: 4.3, credits: 2, semester: 7 },
      { name: 'Inferential Statistics', grade: 4.7, credits: 2, semester: 4 },
      { name: 'Descriptive Statistics', grade: 4.5, credits: 2, semester: 3 },
      { name: 'Mathematical Thinking', grade: 4.8, credits: 2, semester: 2 },
      { name: 'Construction of Scientific Knowledge', grade: 4.6, credits: 3, semester: 1 },
      { name: 'Epistemological Problems in Psychology', grade: 4.9, credits: 2, semester: 6 },
    ],
  },
  {
    heading: 'Development and organisations',
    blurb: 'Human development across the lifespan, and psychology at work.',
    items: [
      { name: 'Psychology and Development: Childhood and Adolescence', grade: 5.0, credits: 2, semester: 4 },
      { name: 'Psychology and Development: Adulthood and Old Age', grade: 4.8, credits: 2, semester: 5 },
      { name: 'Organizational Change Management', grade: 3.8, credits: 3, semester: 10 },
      { name: 'Psychology, Organizations and Work', grade: 3.8, credits: 3, semester: 8 },
    ],
  },
  {
    heading: 'Foundations and schools of thought',
    blurb: 'Biology, cognition and the four major approaches, each as theory and then as method.',
    items: [
      { name: 'Psychobiology', grade: 4.7, credits: 3, semester: 1 },
      { name: 'Psychophysiology', grade: 4.3, credits: 3, semester: 2 },
      { name: 'Neuropsychology', grade: 4.4, credits: 3, semester: 3 },
      { name: 'Psychological Processes', grade: 4.4, credits: 3, semester: 1 },
      { name: 'Historical Introduction to Psychology', grade: 4.2, credits: 3, semester: 1 },
      { name: 'Behavioral Theory', grade: 4.7, credits: 3, semester: 2 },
      { name: 'Behavioral Method', grade: 4.7, credits: 3, semester: 3 },
      { name: 'Behaviorism Elective', grade: 4.9, credits: 3, semester: 6 },
      { name: 'Psychoanalytical Theory', grade: 4.2, credits: 3, semester: 2 },
      { name: 'Psychoanalysis Method', grade: 4.2, credits: 3, semester: 3 },
      { name: 'Humanistic Theory', grade: 4.8, credits: 3, semester: 2 },
      { name: 'Humanistic Method', grade: 4.5, credits: 3, semester: 5 },
      { name: 'Humanities Elective', grade: 4.9, credits: 3, semester: 7 },
      { name: 'Genetic Structuralist Theory', grade: 4.8, credits: 3, semester: 4 },
      { name: 'Genetic Structuralist Method', grade: 4.5, credits: 3, semester: 5 },
      { name: 'Systemic Theory', grade: 4.5, credits: 3, semester: 4 },
      { name: 'Systemic Method', grade: 4.6, credits: 3, semester: 6 },
    ],
  },
  {
    heading: 'Humanities and general studies',
    blurb: 'The university’s humanities core: writing, culture, law and citizenship.',
    items: [
      { name: 'Communication, Science and Technology', grade: 4.9, credits: 3, semester: 1 },
      { name: 'Grammar, Academic Reading and Writing I', grade: 4.7, credits: 2, semester: 2 },
      { name: 'The World and its Signs', grade: 4.9, credits: 3, semester: 3 },
      { name: 'Ancient Civilizations and Worlds', grade: 4.5, credits: 3, semester: 3 },
      { name: 'Rodrigo Noguera Laborde Lecture', grade: 4.9, credits: 2, semester: 4 },
      { name: 'Anthropology and Cultural Studies', grade: 4.8, credits: 3, semester: 4 },
      { name: 'Seminar: Globalization, Citizenship and ICT', grade: 4.5, credits: 2, semester: 5 },
      { name: 'Political Constitution', grade: 4.3, credits: 2, semester: 5 },
      { name: 'Religious Culture', grade: 3.5, credits: 2, semester: 1 },
    ],
  },
];
