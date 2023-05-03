import { Workplace } from '@models/workplace';

export const WorkExperience: Workplace[] = [
  {
    employer: [
      'NYS ITS',
      'New York State Office of Information Technology Services',
    ],
    location: [['U.S.', 'United States'], ['NY', 'New York'], 'Albany'],
    frame: ['2019-08-22'],
    cover: {
      src: '/img/albany-capitol.jpg',
      width: 1920,
      height: 1080,
      alt: 'Albany NY Capitol Building',
    },
    teams: [
      {
        name: 'HCR Business Solutions',
        frame: ['2019-08-2022'],
      },
      {
        name: 'COVID Emergency Team',
        frame: ['2020-04', '2021-05'],
      },
    ],

    positions: [
      {
        title: [
          'ITS 3 PROG',
          'Information Technology Specialist 3 (Programming)',
        ],
        frame: ['2022-12'],
        duties: [],
      },
      {
        title: [
          'ITS 2 PROG',
          'Information Technology Specialist 2 Programming',
        ],
        frame: ['2019-08-22', '2022-12'],
        duties: [],
      },
    ],

    projects: [
      {
        name: ['General Agency Support'],
        frame: ['2019-08-22'],
        technologies: {
          frontend: ['angular', 'typescript', 'html', 'css', 'tailwindcss'],
          backend: ['.net', 'c#', 'swagger'],
          database: ['mssql'],
          misc: [],
        },
      },
    ],
  },
];
