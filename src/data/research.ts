export type ResearchItem = {
  kind: 'Thesis' | 'Book chapter' | 'Research project' | 'Community intervention';
  title: string;
  context: string;
  summary: string;
  methods?: string[];
  status?: string;
};

export const RESEARCH: ResearchItem[] = [
  {
    kind: 'Book chapter',
    title: 'Discussions on evidence-based practice and its implications in Forensic Psychology',
    context: 'Chapter in “Epistemology and Forensic Psychology II” (Amaya et al., 2025), under editorial review by Manual Moderno Colombia and the Latin American Association of Legal and Forensic Psychology.',
    summary:
      'Analyses evidence-based practice in forensic psychology: its epistemological foundations, levels of justification and statistical tools, and challenges such as the replicability crisis, publication bias and the limits of traditional metrics in the legal context.',
    status: 'Under editorial review',
  },
  {
    kind: 'Thesis',
    title: 'Perception of the efficacy and effectiveness of the treatment of emotional disorders in psychology students at Sergio Arboleda University',
    context: 'Undergraduate thesis, Universidad Sergio Arboleda.',
    summary:
      'A qualitative study of which psychotherapeutic interventions students perceive as most effective and the barriers that affect the process, contributing to clinical psychology and public mental health.',
    methods: ['Semi-structured interviews', 'ATLAS.ti', 'Qualitative analysis'],
  },
  {
    kind: 'Research project',
    title: 'Affective symptoms (depression, anxiety, stress) and quality of life in caregivers of people with Bipolar Affective Disorder',
    context: 'Practice report from the clinical placement at the Clínica Nuestra Señora de La Paz, 2024. Presented at the II International Congress on the Mental Health of Care Workers.',
    summary:
      'Co-authored the research proposal and led data collection for a non-experimental, correlational, cross-sectional study, managing the screening and recruitment of a 119-person sample with methodological rigour and ethical compliance.',
    methods: ['Quantitative', 'Correlational', 'Cross-sectional', 'Sample of 119'],
  },
  {
    kind: 'Research project',
    title: 'Strengthening the phase-change process for women at El Buen Pastor Penitentiary',
    context: 'Legal psychology placement, 2024.',
    summary:
      'A perception study among correctional staff on the effectiveness of the current reintegration (phase change) protocols and the systemic limits of inmate assessment. We proposed adding the 16PF personality questionnaire to the psychosocial interviews so that programme assignments match individual profiles.',
    methods: ['Staff perception study', '16PF', 'Psychosocial interview'],
  },
  {
    kind: 'Research project',
    title: 'Academic stressors and sleep disorder symptoms in psychology students in Bogotá',
    context: 'Academic research project, Universidad Sergio Arboleda.',
    summary:
      'A correlational study of the relationship between the number of academic stressors and sleep disorder symptoms, identifying evaluative pressure and workload as triggers that affect sleep hygiene, as a basis for preventive mental health strategies.',
    methods: ['Quantitative', 'Correlational'],
  },
  {
    kind: 'Community intervention',
    title: 'Building notions of mental health with older adult former students of the Mater Dei school who make diaper bags in Bogotá',
    context: 'Community psychology project.',
    summary:
      'Group sessions and collective activities for women aged 60 to 70 who shared an occupation and were often navigating widowhood, grief and isolation, creating a space for peer connection that strengthened belonging and resilience.',
    methods: ['Group sessions', 'Community psychology'],
  },
  {
    kind: 'Research project',
    title: 'Colombian women in the armed conflict and their resilience',
    context: 'Qualitative study, Universidad Sergio Arboleda.',
    summary:
      'Explored how women who survived forced displacement and kidnapping make sense of their experiences over time, moving from private burden to collective political identity. Dialogue and social networks were central. The project also produced an art-based theatrical intervention so participants could share testimonies without reliving them harmfully.',
    methods: ['Semi-structured interviews', 'Moscovici’s social representations', 'Art-based intervention'],
  },
];
