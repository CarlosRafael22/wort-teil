import {NounType, AdjectiveType, VerbType} from './types';

type WordType = NounType | AdjectiveType;

export const isNoun = (word: WordType): word is NounType => {
  return !!(word as NounType).article;
};

export const isVerb = (word: WordType): word is VerbType => {
  return !!(word as VerbType).example;
};
