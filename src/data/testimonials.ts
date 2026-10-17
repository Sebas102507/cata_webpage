export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  organisation: string;
  date: string;
  kind: 'recommendation' | 'recognition' | 'certificate';
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Catalina has demonstrated strong skills in reading comprehension, theoretical development, information search, and presentation of scientific elements in an easily understandable manner. I also highlight Catalina as a responsible person, open to learning and improvement, guided by respect and honesty. In fact, based on the skills I identified, I decided to invite her to co-author a chapter in a book currently being coordinated. She has fulfilled all the requested tasks and responsibilities.',
    author: 'Santiago Amaya Nassar',
    role: 'Forensic Psychologist · Academic Director, Colombian Association of Criminology · PhD candidate in Psychology',
    organisation: 'Universidad Sergio Arboleda (lecturer in Legal Psychology and Violence and Conflict)',
    date: '28 April 2025',
    kind: 'recommendation',
  },
  {
    quote:
      'For the participation of the Psychology students in the academic internships at this National Correctional Facility, supporting the social reintegration of the inmates through their knowledge and standing out for their sense of belonging, responsibility, and excellent performance of the assigned duties.',
    author: 'Dr. Miryam Elena Calle García',
    role: 'Director, High and Medium Security Women’s Prison and Penitentiary of Bogotá',
    organisation: 'INPEC · Ministry of Justice and Law, Republic of Colombia · Special Recognition to the Universidad Sergio Arboleda',
    date: '24 December 2024',
    kind: 'recognition',
  },
  {
    quote:
      'During her time with us, Catalina Espitia demonstrated commitment, responsibility, and strong customer service skills, significantly contributing to the achievement of the store’s sales goals.',
    author: 'Francisco Romero',
    role: 'Owner',
    organisation: 'Tienda de Sueños, Bogotá',
    date: '23 December 2024',
    kind: 'certificate',
  },
];
