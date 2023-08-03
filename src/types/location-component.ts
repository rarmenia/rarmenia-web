export type LocationComponentType = 'STREET_ADDRESS' |
  'ROUTE' |
  'INTERSECTION' |
  'POLITICAL' |
  'COUNTRY' |
  'ADMIN_AREA_1' |
  'ADMIN_AREA_2' |
  'ADMIN_AREA_3' |
  'ADMIN_AREA_4' |
  'ADMIN_AREA_5' |
  'ADMIN_AREA_6' |
  'ADMIN_LEVEL_7' |
  'COLLOQUIAL_AREA' |
  'LOCALITY' |
  'SUBLOCALITY' |
  'NEIGHBORHOOD' |
  'PREMISE' |
  'SUBPREMISE' |
  'PLUS_CODE' |
  'POSTAL_CODE' |
  'NATURAL_FEATURE' |
  'AIRPORT' |
  'PARK' |
  'POI' |
  'FLOOR' |
  'ESTABLISMENT' |
  'LANDMARK' |
  'PARKING' |
  'POST_BOX' |
  'POSTAL_TOWN' |
  'ROOM' |
  'STREET_NUMBER' |
  'BUS_STATION' |
  'TRAIN_STATION' |
  'TRANSIT_CENTER';

export type LocationComponentStorage = {
  long: string;
  short: string;
  type: LocationComponentType;
}
