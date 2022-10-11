import {
  NounType,
  AdjectiveType,
  VerbType,
  SentenceType,
  DataType,
} from './types';

export const PAGE_TYPES = {
  NOUN: 'NOUN',
  ADJECTIVE: 'ADJECTIVE',
  VERB: 'VERB',
  SENTENCE: 'SENTENCE',
} as const;

export const isNoun = (word: DataType): word is NounType => {
  return !!(word as NounType).article;
};

export const isVerb = (word: DataType): word is VerbType => {
  return !!(word as VerbType).example;
};

export const isSentence = (word: DataType): word is SentenceType => {
  return !!(word as SentenceType).sentence;
};

export const isAdjective = (word: DataType): word is AdjectiveType => {
  return (
    !!(word as AdjectiveType).word &&
    !(word as NounType).article &&
    !(word as VerbType).example
  );
};

export const getType = (word: DataType): keyof typeof PAGE_TYPES => {
  if (isNoun(word)) {
    return PAGE_TYPES.NOUN;
  } else if (isAdjective(word)) {
    return PAGE_TYPES.ADJECTIVE;
  } else if (isVerb(word)) {
    return PAGE_TYPES.VERB;
  } else {
    return PAGE_TYPES.SENTENCE;
  }
};
