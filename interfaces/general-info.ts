import {Timestamp} from 'firebase/firestore';
import {Name} from './name';
import {Workplace} from './workplace';


export interface GeneralInfo {
  birthdate: Timestamp;
  name: Name;
  profession: string;
  currentWorkplace: Workplace;

}

