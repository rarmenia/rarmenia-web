import { WorkplaceStorage } from "@/types/about/work/workplace";

export const WORK_EXPERIENCE: WorkplaceStorage[] = [
  {
    name: 'Office of Information Technology Services',
    location: "Albany, NY",
    timeframe: { start: new Date("2019-08-22") },
    positions: [
      {
        title: 'ITS 3 (Programming)',
        timeframe: { start: new Date("2022-12-1") },
        keyExperience: 'Project Ownership',
        description: 'Lead high priority development efforts of web applications.'
      },
      {
        title: 'ITS 2 (Programming)',
        timeframe: { start: new Date("2019-08-22"), end: new Date("2022-12-1") },
        keyExperience: 'Task Management',
        description: 'Participated in high priority development efforts.'
      }
    ]
  },
  {
    name: 'GLOBALFOUNDRIES',
    location: "Essex Junction, VT",
    timeframe: { start: new Date("2018-12-1"), end: new Date("2019-4-1") },
    positions: [
      {
        title: 'Assc. Waferfab Tech',
        timeframe: { start: new Date("2018-12-1"), end: new Date("2019-4-1") },
        keyExperience: 'Blackbox Testing',
        description: 'Provided L1 support for photolithography tools.'
      },
    ]
  },
  {
    name: 'Best Buy',
    location: "Williston, VT",
    timeframe: { start: new Date("2017-04-1"), end: new Date("2018-11-12") },
    positions: [
      {
        title: 'Phone Operator',
        timeframe: { start: new Date("2018-09-1"), end: new Date("2018-11-12") },
        keyExperience: 'Client Relations',
        description: "Provided tech support and other client retail services."
      },
      {
        title: 'Connected Devices Assc.',
        timeframe: { start: new Date("2018-04-1"), end: new Date("2018-9-1") },
        keyExperience: 'Tech Communication',
        description: 'Helped clients navigate consumer networking and build smart home solutions.'
      }
    ]
  },
];
