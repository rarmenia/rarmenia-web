import {Timestamp} from 'firebase/firestore';
import {Name} from './name';
import {Workplace} from './workplace';
import {Education} from './education';


export interface GeneralInfo {
  birthdate: Timestamp;
  name: Name;
  profession: string;
  currentWorkplace: Workplace;
  from: string;
  education: Education[];

}

