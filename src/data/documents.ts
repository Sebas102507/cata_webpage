export type DocGroup = 'Degree and awards' | 'Licence and assessments' | 'Placements and recognitions' | 'Work and training';

export type Doc = { file: string; title: string; issuer: string; date: string; group: DocGroup; note?: string };

/** Scanned documents shown in the Documents section. Identity numbers and dates of birth are redacted in the images. */
export const DOCUMENTS: Doc[] = [
  { file: 'degree_diploma.jpg', title: 'Psychologist diploma (Psicóloga)', issuer: 'Universidad Sergio Arboleda', date: '2 Apr 2025', group: 'Degree and awards' },
  { file: 'cum_laude.jpg', title: 'Cum laude distinction', issuer: 'Universidad Sergio Arboleda', date: '2 Apr 2025', group: 'Degree and awards', note: 'Weighted average 4.58.' },
  { file: 'minor_humanities.jpg', title: 'Minor in Humanities', issuer: 'Faculty of Humanities and Social Sciences', date: '2 Apr 2025', group: 'Degree and awards' },
  { file: 'transcript_p1.jpg', title: 'Academic transcript (official translation), page 1', issuer: 'Secretary General’s Office', date: '2025', group: 'Degree and awards' },
  { file: 'honours_1.jpg', title: 'Rodrigo Noguera Laborde distinction, first', issuer: 'Rector, Universidad Sergio Arboleda', date: '18 Aug 2023', group: 'Degree and awards' },
  { file: 'honours_2.jpg', title: 'Rodrigo Noguera Laborde distinction, second (2024-1)', issuer: 'Universidad Sergio Arboleda', date: '6 Aug 2024', group: 'Degree and awards' },
  { file: 'honours_3.jpg', title: 'Rodrigo Noguera Laborde distinction, third (2024-2)', issuer: 'Universidad Sergio Arboleda', date: '18 Feb 2025', group: 'Degree and awards' },
  { file: 'congress_speaker.jpg', title: 'Speaker certificate, II International Congress on the Mental Health of Care Workers', issuer: 'Universidad Libre · COLPSIC Valle', date: '1 Dec 2023', group: 'Degree and awards' },
  { file: 'high_school.jpg', title: 'High school diploma (Bachiller Académico)', issuer: 'Colegio Anglo Americano', date: '2 Dec 2019', group: 'Degree and awards' },

  { file: 'professional_card.jpg', title: 'Professional Psychologist Card No. 301907', issuer: 'Colegio Colombiano de Psicólogos', date: '7 Jul 2025', group: 'Licence and assessments' },
  { file: 'aps_assessment.jpg', title: 'Assessment of Psychology Qualifications (APS-3688)', issuer: 'Australian Psychological Society', date: '1 May 2026', group: 'Licence and assessments' },
  { file: 'pte_score.jpg', title: 'PTE Academic score report, overall 83', issuer: 'Pearson', date: '20 Sep 2026', group: 'Licence and assessments' },
  { file: 'cambridge_fce.jpg', title: 'Cambridge English: First, grade C (B2)', issuer: 'Cambridge Assessment English', date: 'Nov 2019', group: 'Licence and assessments' },

  { file: 'clinic_internship.jpg', title: 'Clinical placement certificate', issuer: 'Clínica Nuestra Señora de La Paz', date: '13 Jun 2024', group: 'Placements and recognitions' },
  { file: 'inpec_duties.jpg', title: 'Legal placement: duties performed (official translation)', issuer: 'INPEC, Women’s Penitentiary of Bogotá', date: 'Aug – Nov 2024', group: 'Placements and recognitions' },
  { file: 'inpec_evaluation.jpg', title: 'Legal placement: overall evaluation, 100 / 100', issuer: 'INPEC, Women’s Penitentiary of Bogotá', date: '29 Nov 2024', group: 'Placements and recognitions' },
  { file: 'inpec_recognition.jpg', title: 'Special Recognition to the Universidad Sergio Arboleda', issuer: 'INPEC, Ministry of Justice and Law', date: '24 Dec 2024', group: 'Placements and recognitions' },
  { file: 'recommendation_letter.jpg', title: 'Recommendation letter', issuer: 'Santiago Amaya Nassar, forensic psychologist', date: '28 Apr 2025', group: 'Placements and recognitions' },
  { file: 'student_representative.jpg', title: 'Student Representative, Psychology programme 2023–2024', issuer: 'Dean of Students, Universidad Sergio Arboleda', date: '17 Apr 2023', group: 'Placements and recognitions' },

  { file: 'colpsic_work_certificate.jpg', title: 'Work certificate, mentor and assistant', issuer: 'Colegio Colombiano de Psicólogos', date: '2023', group: 'Work and training' },
  { file: 'colpsic_clinical_testing.jpg', title: 'Diploma course: Clinical Psychology and Psychological Testing (120 h)', issuer: 'COLPSIC Bogotá chapter', date: 'May 2023', group: 'Work and training' },
  { file: 'colpsic_psychopathology.jpg', title: 'Diploma course: Psychopathology and Neuropsychological Disorders (84 h)', issuer: 'COLPSIC Bogotá chapter', date: 'Oct 2023', group: 'Work and training' },
  { file: 'colpsic_public_policy.jpg', title: 'Diploma course: Public Policies in Mental Health (64 h)', issuer: 'COLPSIC Bogotá chapter', date: 'Oct 2023', group: 'Work and training' },
  { file: 'colpsic_suicide_prevention.jpg', title: 'Diploma course: Strategies for the Prevention of Risk Behaviours and Suicide (120 h)', issuer: 'COLPSIC Bogotá chapter', date: 'Dec 2023', group: 'Work and training' },
  { file: 'parenting_course.jpg', title: 'Parenting and Conscious Education (18 h)', issuer: 'Pontificia Universidad Javeriana', date: 'Sep 2024', group: 'Work and training' },
  { file: 'foundever_certificate.jpg', title: 'Employment certificate, CSR Inbound (official translation)', issuer: 'Foundever de Colombia', date: '4 Jul 2025', group: 'Work and training' },
  { file: 'retail_certificate.jpg', title: 'Work certificate, retail sales assistant', issuer: 'Tienda de Sueños', date: '23 Dec 2024', group: 'Work and training' },
];
