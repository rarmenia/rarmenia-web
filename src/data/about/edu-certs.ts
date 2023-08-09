import { EduCertStorage } from "@/types/about/edu-cert/edu-cert";

export const EDU_CERT: EduCertStorage[] = [
  {
    type: 'UNDERGRAD',
    source: 'Champlain College',
    location: 'Burlington, VT',
    timeframe: { start: new Date('2014-08-23'), end: new Date("2018-05-15") },
    classification: 'Bachelor of Science',
    area: 'Computer Science'
  }
];
