export interface NounType {
  word: string;
  article: string;
  translation: string;
}

export interface AdjectiveType {
  word: string;
  translation: string;
}

export interface VerbType {
  word: string;
  translation: string;
  example: string;
}

export interface SentenceType {
  sentence: string;
  translatedSentence: string;
}

export type DataType = NounType | AdjectiveType | VerbType | SentenceType;

export interface PageState {
  count: number;
  index: number;
  type: string | null;
}
