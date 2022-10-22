import {NounType} from './types';

const OBST: NounType[] = [
  {
    article: 'Der',
    word: 'Apfel',
    translation: 'Apple',
  },
  {
    article: 'Die',
    word: 'Erdbeere',
    translation: 'Strawberry',
  },
  {
    article: 'Die',
    word: 'Traube',
    translation: 'Grapefruit',
  },
  {
    article: 'Die',
    word: 'Orange',
    translation: 'Orange',
  },
  {
    article: 'Die',
    word: 'Orange',
    translation: 'Orange',
  },
  {
    article: 'Die',
    word: 'Banane',
    translation: 'Banana',
  },
  {
    article: 'Die',
    word: 'Ananas',
    translation: 'Pineapple',
  },
  {
    article: 'Die',
    word: 'Zitrone',
    translation: 'Lemon',
  },
];

const KLEIDUNG: NounType[] = [
  {
    article: 'Der',
    word: 'Anzug',
    translation: 'Suit',
  },
  {
    article: 'Die',
    word: 'Bluse',
    translation: 'Blouse',
  },
  {
    article: 'Das',
    word: 'Hemd',
    translation: 'Shirt',
  },
  {
    article: 'Die',
    word: 'Hose',
    translation: 'Pants',
  },
  {
    article: 'Der',
    word: 'Rock',
    translation: 'Skirt',
  },
  {
    article: 'Der',
    word: 'Schuh',
    translation: 'Shoe',
  },
  {
    article: 'Der',
    word: 'Stiefel',
    translation: 'Boot',
  },
  {
    article: 'Der',
    word: 'Handschuh',
    translation: 'Glove',
  },
];

const MOBEL: NounType[] = [
  {
    article: 'Das',
    word: 'Bett',
    translation: 'Bed',
  },
  {
    article: 'Das',
    word: 'Sofa',
    translation: 'Sofa',
  },
  {
    article: 'Das',
    word: 'Wandregal',
    translation: 'Shelf',
  },
  {
    article: 'Der',
    word: 'Hocker',
    translation: 'Stool',
  },
  {
    article: 'Der',
    word: 'Nachttisch',
    translation: 'Nightstand',
  },
  {
    article: 'Der',
    word: 'Spiegel',
    translation: 'Mirror',
  },
  {
    article: 'Der',
    word: 'Tisch',
    translation: 'Table',
  },
  {
    article: 'Der',
    word: 'Wäschkorb',
    translation: 'Laundry basket',
  },
  {
    article: 'Die',
    word: 'Spüle',
    translation: 'The sink',
  },
  {
    article: 'Der',
    word: 'Fernseher',
    translation: 'The TV',
  },
  {
    article: 'Der',
    word: 'Schrank',
    translation: 'The wardrobe',
  },
  {
    article: 'Die',
    word: 'Kommode',
    translation: 'The dresser/commode',
  },
  {
    article: 'Das',
    word: 'Bild',
    translation: 'The picture',
  },
  {
    article: 'Der',
    word: 'Kühlschrank',
    translation: 'The fridge',
  },
  {
    article: 'Der',
    word: 'Sessel',
    translation: 'The armchair',
  },
  {
    article: 'Das',
    word: 'Regal',
    translation: 'The shelf',
  },
  {
    article: 'Der',
    word: 'Herd',
    translation: 'The cooker/stove',
  },
  {
    article: 'Der',
    word: 'Teppich',
    translation: 'The carpet',
  },
];

const NOUNS = [...OBST, ...KLEIDUNG, ...MOBEL];

export default NOUNS;
