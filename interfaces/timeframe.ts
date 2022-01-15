import {Timestamp} from 'firebase/firestore';

export interface Timeframe {
  start: Timestamp;
  end: Timestamp;
}
