import {NounType, AdjectiveType} from './types';

type WordType = NounType | AdjectiveType;

export const isNoun = (word: WordType): word is NounType => {
  return !!(word as NounType).article;
};
