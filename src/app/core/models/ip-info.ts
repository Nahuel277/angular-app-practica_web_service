export interface Timezone {
    date: string;
    offset: string;
    name: string;
    id: string;
    time: string;
    abbr: string;
  }
  
export interface IpInfo {
    regionCode: string;
    country: string;
    countryCode: string;
    city: string;
    timezone: Timezone;
    ip: string;
    latitude: number;
    valid: boolean;
    isV4Mapped: boolean;
    hostname: string;
    continentCode: string;
    hostDomain: string;
    currencyCode: string;
    region: string;
    isBogon: boolean;
    countryCode3: string;
    isV6: boolean;
    longitude: number;
}