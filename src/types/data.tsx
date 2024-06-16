export interface Text {
  zh: string;
  en?: string;
  dk?: string;
}

export interface Data {
  name: Text;
  total_season_count: number;
  total_month_count: number;
  total_solar_term_count: number;
  total_card_count: number;
  total_color_count: number;
  seasons: Season[];
}

export interface Season {
  id: number;
  name: Text;
  description: Text;
  months: Month[];
}

export interface Month {
  id: number;
  name: Text;
  solar_terms: SolarTerm[];
}

export interface SolarTerm {
  id: number;
  name: Text;
  cards: Card[];
}

export interface Card {
  id: number;
  name: Text;
  description: Text;
  colors: Color[];
}

export interface Color {
  id: number;
  name: Text;
  description: Text;
  structure_term: Text;
  CMYK: number[];
  HEX: string;
  HSL: number[];
  HSV: number[];
  RGB: number[];
}

export const enum Type {
  SEASON = 1,
  MONTH = 2,
  SOLAR_TERM = 3,
  CARD = 4,
  COLOR = 5,
}
