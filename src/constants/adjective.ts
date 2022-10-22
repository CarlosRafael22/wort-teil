import {AdjectiveType} from './types';

const FOOD_RELATED: AdjectiveType[] = [
  {
    word: 'Heiß',
    translation: 'Hot',
  },
  {
    word: 'Kalt',
    translation: 'Cold',
  },
  {
    word: 'Hart',
    translation: 'Hard',
  },
  {
    word: 'Eklig',
    translation: 'Disgusting',
  },
  {
    word: 'Lecker',
    translation: 'Tasty',
  },
  {
    word: 'Saftig',
    translation: 'Juicy',
  },
  {
    word: 'Salzig',
    translation: 'Salty',
  },
  {
    word: 'Sauer',
    translation: 'Sour',
  },
  {
    word: 'Scharf',
    translation: 'Spicy',
  },
  {
    word: 'Süß',
    translation: 'Sweet',
  },
  {
    word: 'Trocken',
    translation: 'Dry',
  },
];

const OBJECT_PLACE_RELATED: AdjectiveType[] = [
  {
    word: 'Teuer',
    translation: 'Expensive',
  },
  {
    word: 'Billig',
    translation: 'Cheap',
  },
  {
    word: 'Gemütlich',
    translation: 'Cosy',
  },
];

export const ADJECTIVES = [...FOOD_RELATED, ...OBJECT_PLACE_RELATED];
