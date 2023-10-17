export type SkillAreaIconType = 'people' | 'monitor' | 'cpu' | 'cloud' | 'rects';

export type SkillAreaStorage = {

  icon: SkillAreaIconType,
  name: string;

  key: string;
  other: string[];

}
