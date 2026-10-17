export type ChapterImage = { file: string; caption: string; fit?: 'cover' | 'contain' };

export type Chapter = {
  id: string;
  years: string;
  place: string;
  title: string;
  text: string[];
  lesson?: string;
  images?: ChapterImage[];
};

// Image files are looked up by name in src/assets/story/.
export const CHAPTERS: Chapter[] = [
  {
    id: 'start',
    years: '2020 – 2022',
    place: 'Bogotá, Colombia',
    title: 'Starting Psychology in the middle of a pandemic',
    text: [
      'I was born in Bogotá in 2002 and began the Psychology programme at the Universidad Sergio Arboleda in January 2020, weeks before the world moved online. The first years were the foundations: psychobiology, the history of the discipline, and the four big schools of thought, behavioural, psychoanalytic, humanistic and systemic, each studied first as theory and then as method.',
      'Alongside the core subjects I took statistics, psychometrics, developmental psychology across the whole lifespan and the humanities seminars the university is known for. By the end of 2021 my semester average had reached 4.77 out of 5.',
    ],
    lesson: 'Learn the theory properly before you try to help anyone with it.',
  },
  {
    id: 'representative',
    years: '2023',
    place: 'Bogotá, Colombia',
    title: 'Student representative, honours programme and a first job in the profession',
    text: [
      'In April 2023 I was elected Student Representative of the Psychology programme for the 2023–2024 period, the voice of my classmates before the Dean’s Office. That same semester I was admitted to the university’s Honours Programme (Programa de Honores 2023-I).',
      'From February 2023 I also worked for the Bogotá Chapter of the Colombian College of Psychologists (COLPSIC) as monitor and assistant for three diploma programmes: clinical psychology and psychological testing, psychopathology and public mental-health policy, and a diploma on strategies to prevent risk behaviours and suicide. I supervised attendance, supported the virtual sessions, mediated between participants and instructors and kept the logistics running.',
      'In December 2023 I added my first retail job, as a sales advisor at Tienda de Sueños, and came back for the following Christmas season too.',
    ],
    lesson: 'Representing others taught me to listen first and speak second.',
    images: [{ file: 'honours_ceremony.jpg', caption: 'Honours Programme ceremony, Universidad Sergio Arboleda, 2023-I.' }],
  },
  {
    id: 'practice',
    years: '2024',
    place: 'Bogotá, Colombia',
    title: 'Two placements: the clinic and the women’s prison',
    text: [
      'The final year was practice. In the first semester of 2024 I completed my clinical psychology placement, twenty hours a week of supervised work, while studying violence and conflict and the assessment and intervention of neurodevelopmental conditions.',
      'In the second semester I joined the legal psychology practicum at the High and Medium Security Women’s Prison and Penitentiary of Bogotá, run by the National Penitentiary Institute (INPEC). We supported the social reintegration of women deprived of their liberty. The prison’s director later granted the university a Special Recognition for the psychology interns’ sense of belonging, responsibility and excellent performance. I finished that placement with a 4.9.',
      'In parallel I carried my research project through its three stages (5.0, 5.0 and 4.8) and took part in the research group in clinical and health psychology.',
    ],
    lesson: 'Dignity does not stop at a prison gate.',
  },
  {
    id: 'graduation',
    years: 'April – July 2025',
    place: 'Bogotá, Colombia',
    title: 'Graduating cum laude and becoming a licensed psychologist',
    text: [
      'On 2 April 2025 the Universidad Sergio Arboleda awarded me the degree of Psychologist with the distinction cum laude, in recognition of a cumulative weighted average of 4.58 over 160 credits. My professor Santiago Amaya Nassar, a forensic psychologist, invited me to co-author a chapter in a book he coordinates, and wrote that I combine strong reading comprehension and theoretical development with respect and honesty.',
      'In July 2025 the Colegio Colombiano de Psicólogos issued my professional card, the legal licence to practise psychology in Colombia, valid for life.',
    ],
    lesson: 'Honours are a by-product of caring about the work.',
    images: [
      { file: 'graduation_diplomas.jpg', caption: 'Graduation day with the Psychologist diploma and the cum laude distinction, April 2025.' },
      { file: 'graduation_stage.jpg', caption: 'On stage at the Universidad Sergio Arboleda graduation ceremony.' },
      { file: 'graduation_full.jpg', caption: 'Outside the Dean of Students building after the ceremony.' },
    ],
  },
  {
    id: 'sydney',
    years: '2025 – present',
    place: 'Sydney, Australia',
    title: 'Sydney: a new country, the same vocation',
    text: [
      'I am an Australian citizen, and in 2025 I moved to Sydney to build my career here. I completed the NSW National Police Check and obtained a Working With Children Check so I can volunteer with young people while I settle in, and in September 2026 I sat the PTE Academic, scoring 83 overall with 90 in speaking and 89 in listening.',
      'I am now looking for roles where psychology meets people who need it: mental-health support, community and youth services, case work, research assistance and bilingual Spanish–English settings. The next chapter is being written now.',
    ],
    lesson: 'Wherever I am, the job is the same: help someone feel heard and move forward.',
    images: [{ file: 'graduation_garden.jpg', caption: 'Catalina, psychologist.' }],
  },
];
