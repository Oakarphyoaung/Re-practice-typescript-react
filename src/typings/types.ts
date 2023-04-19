export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
export interface Stations {
  id: number;
  label: string;
}
export interface SearchStations {
  startStation: Stations | null;
  endStation: Stations | null;
}
