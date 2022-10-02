import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import NounPage from './src/pages/NounPage';
import NOUNS from './src/constants/noun';

import AdjectivePage from './src/pages/AdjectivePage';
import {ADJECTIVES} from './src/constants/adjective';
import {AdjectiveType, NounType} from './src/constants/types';
import {isNoun} from './src/constants/utils';

const PAGE_TYPES = {
  NOUN: 'NOUN',
  ADJECTIVE: 'ADJECTIVE',
};

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

const App: () => React.ReactElement = () => {
  const [page, setPage] = useState({
    pageIndex: 0,
    pageType: PAGE_TYPES.NOUN,
  });

  const WORDS: (AdjectiveType | NounType)[] = [...NOUNS, ...ADJECTIVES];

  const goToNextPage = () => {
    const delay = page.pageType === PAGE_TYPES.NOUN ? 1000 : 500;

    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      const pageNumber = getRandomNumber(WORDS.length);
      const nextPageIndex = pageNumber === WORDS.length ? 0 : pageNumber;

      const nextWord = WORDS[nextPageIndex];
      const nextPage = {
        pageIndex: nextPageIndex,
        pageType: isNoun(nextWord) ? PAGE_TYPES.NOUN : PAGE_TYPES.ADJECTIVE,
      };

      setPage(nextPage);
    }, delay);
  };

  const handleAnswer = (answer: string) => {
    if (answer === (WORDS[page.pageIndex] as NounType).article) {
      goToNextPage();
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {page.pageType === PAGE_TYPES.NOUN && (
            <NounPage
              noun={WORDS[page.pageIndex] as NounType}
              handleAnswer={handleAnswer}
            />
          )}
          {page.pageType === PAGE_TYPES.ADJECTIVE && (
            <AdjectivePage
              adjective={WORDS[page.pageIndex] as AdjectiveType}
              onPressNext={goToNextPage}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
