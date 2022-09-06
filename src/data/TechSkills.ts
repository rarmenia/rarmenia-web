const TechSkills = [
  {
    text: 'React',
    value: 85,
  },
  {
    text: 'CSS',
    value: 85,
  },
  {
    text: 'HTML',
    value: 90,
  },
  {
    text: 'C#',
    value: 70,
  },
  {
    text: '.NET',
    value: 70,
  },
  {
    text: 'Java',
    value: 75,
  },
  {
    text: 'REST',
    value: 90,
  },
  {
    text: 'GraphQL',
    value: 70,
  },
  {
    text: 'RxJS',
    value: 80,
  },
  {
    text: 'Python',
    value: 75,
  },
  {
    text: 'Swagger',
    value: 65,
  },
];

export type Technology = {
  strength: number;
  experience: string;
  blurb: string;
  prefferedTechnology: boolean;
  prefferedAlternative?: string;
};

export const TechnologiesMap: { [key: string]: Technology } = {
  Angular: {
    strength: 100,
    experience: '4 Years',
    blurb: '',
    prefferedTechnology: true,
  },
  HTML: {
    strength: 85,
    experience: '10 Years',
    blurb: '',
    prefferedTechnology: true,
  },
  Javascript: {
    strength: 80,
    experience: '10 Years',
    blurb: '',
    prefferedTechnology: false,
    prefferedAlternative: 'Typescript',
  },

  Python: {
    strength: 87,
    experience: '10 years',
    blurb: '',
    prefferedTechnology: false,
  },
  React: {
    strength: 85,
    experience: '3 years',
    blurb: '',
    prefferedTechnology: true,
  },
  TypeScript: {
    strength: 90,
    experience: '5 Years',
    blurb: '',
    prefferedTechnology: true,
  },
};

export const TechnologiesList = Object.keys(TechnologiesMap).map((key) => ({
  name: key,
  ...(TechnologiesMap[key] ?? {}),
}));

export const WordCloudTechData = TechnologiesList.map((technology) => ({
  text: technology.name,
  value: technology.strength,
})).sort((a, b) => b.value - a.value);
