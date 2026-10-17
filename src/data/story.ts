export type ChapterImage = { file: string; caption: string; fit?: 'cover' | 'contain' };

export type Chapter = {
  id: string;
  years: string;
  place: string;
  title: string;
  text: string[];
  images?: ChapterImage[];
};

// Facts below come from Catalina's CV and the certificates in the documents section. Image files live in src/assets/story/.
export const CHAPTERS: Chapter[] = [
  {
    id: 'school',
    years: '2018 – 2019',
    place: 'Bogotá, Colombia',
    title: 'A classroom before a clinic',
    text: [
      'My first job came before university: from February to July 2018 I taught English at the Nicolás Buenaventura School in Bogotá, planning lessons, managing classroom groups and talking to parents about their children’s progress. It was my first experience of working with young learners.',
      'In November 2019 I sat the Cambridge First Certificate in English and obtained level B2, and in December 2019 I graduated from the Colegio Anglo Americano with the title of Bachiller Académico.',
    ],
  },
  {
    id: 'university',
    years: '2020 – 2022',
    place: 'Bogotá, Colombia',
    title: 'Starting Psychology at the Universidad Sergio Arboleda',
    text: [
      'I began the five-year professional Psychology programme in January 2020, weeks before the pandemic moved it online. The first years were the foundations: psychobiology, the history of the discipline, statistics, psychometrics, development across the lifespan, and the behavioural, psychoanalytic, humanistic and systemic schools, each studied as theory and then as method. By the end of 2021 my semester average had reached 4.77 out of 5.',
      'In October 2022 I completed a Psychological First Aid course with the Universitat Autònoma de Barcelona, the first of a series of short courses in mental health that I took alongside the degree.',
    ],
  },
  {
    id: 'representative',
    years: '2023',
    place: 'Bogotá, Colombia',
    title: 'Student representative, COLPSIC and a first congress',
    text: [
      'In 2023 I took on three things at once. From February to December I was mentor and assistant for four diploma courses run by the Bogotá chapter of the Colombian College of Psychologists (COLPSIC): clinical psychology and psychological testing, psychopathology and neuropsychological disorders, public policies in mental health, and strategies for the prevention of risk behaviours and suicide. In April I was elected Student Representative of the Psychology programme for 2023–2024, and I set up a peer mentorship programme to support academic performance and retention.',
      'The same year I volunteered in a community dining room, leading activities for older adults; took the WHO mhGAP course with the Pan American Health Organization, a diploma course in mental health, a course on the comprehensive care of victims of sexual violence with the Bogotá Health Secretariat, and the NIH course on good clinical practice for behavioural research. In August the university awarded me the first of three Rodrigo Noguera Laborde academic excellence distinctions, and on 1 December I presented undergraduate research at the II International Congress on the Mental Health of Care Workers in Cali.',
    ],
    images: [{ file: 'honours_ceremony.jpg', caption: 'Receiving the Rodrigo Noguera Laborde academic excellence distinction, 2023.' }],
  },
  {
    id: 'placements',
    years: '2024',
    place: 'Bogotá, Colombia',
    title: 'Two placements: the psychiatric clinic and the women’s prison',
    text: [
      'From February to June 2024 I completed my clinical placement at the Clínica Nuestra Señora de La Paz, one of Colombia’s leading psychiatric institutions: 360 hours of supervised practice with 63 clients living with severe conditions, including suicidal behaviour, schizophrenia, bipolar disorder, borderline personality disorder and substance use. I trained in CBT, DBT, ACT, group therapy and cognitive stimulation, and co-authored a research proposal on affective symptoms and quality of life in the caregivers of people with bipolar disorder.',
      'From August to November 2024 I joined the Evaluation and Treatment Centre of El Buen Pastor, the high and medium security women’s prison of Bogotá run by INPEC. I interviewed and assessed 51 women deprived of liberty for security-phase transitions, administered 129 psychological instruments including IVIC 2.0 and ICOC, and prepared psychosocial reports used in official decisions. The prison rated the placement 100 out of 100, and in December its director granted the university a Special Recognition for the psychology interns’ work.',
      'In between I took a course on parenting and conscious education at the Pontificia Universidad Javeriana, received the second and third academic excellence distinctions, and worked the Christmas season at Tienda de Sueños for the second year running.',
    ],
  },
  {
    id: 'graduation',
    years: '2025',
    place: 'Bogotá, then Sydney',
    title: 'Graduating cum laude and moving to Sydney',
    text: [
      'On 2 April 2025 the Universidad Sergio Arboleda awarded me the degree of Psychologist with the cum laude distinction, for a cumulative weighted average of 4.58 over 160 credits, together with the Minor in Humanities. My legal psychology professor, Santiago Amaya Nassar, invited me to co-author a chapter on evidence-based practice in forensic psychology, and in July the Colombian College of Psychologists issued my professional licence.',
      'In the first half of the year I also worked as a customer service agent for PayPal and Venmo at Foundever, handling account, dispute and fraud enquiries from distressed customers. In mid-2025 I moved to Sydney as an Australian citizen. While settling in I looked after a school-aged child, volunteered at the Women in Media conference at ICC Sydney, supported an elderly woman with cognitive decline as a private carer, and joined Officeworks as a retail and print assistant.',
    ],
    images: [
      { file: 'graduation_diplomas.jpg', caption: 'Graduation day with the Psychologist diploma and the cum laude distinction, April 2025.' },
      { file: 'graduation_stage.jpg', caption: 'On stage at the Universidad Sergio Arboleda graduation ceremony.' },
      { file: 'graduation_full.jpg', caption: 'After the ceremony, April 2025.' },
    ],
  },
  {
    id: 'sydney',
    years: '2026 – present',
    place: 'Sydney, Australia',
    title: 'Toward registration in Australia',
    text: [
      'On 1 May 2026 the Australian Psychological Society assessed my degree as comparable to five years of study in psychology in Australia. In July I began Lifeline’s Crisis Supporter Workplace Training with Lifeline Harbour to Hawkesbury, learning telephone crisis support, suicide risk assessment and safety planning, with a supervised placement and internship ahead. In September I sat the PTE Academic and scored 83 overall.',
      'The book chapter is under editorial review, and I am working toward registration as a psychologist in Australia under the PsyBA and AHPRA framework. The next chapter is being written now.',
    ],
    images: [{ file: 'graduation_garden.jpg', caption: 'Catalina Espitia, psychologist.' }],
  },
];
