import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import NounPage from './src/pages/NounPage';
import NOUNS from './src/constants/noun';

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

const App: () => React.ReactElement = () => {
  const [currentNounIndex, setCurrentNounIndex] = useState(0);

  const goToNextPage = () => {
    setTimeout(() => {
      const page = getRandomNumber(NOUNS.length);
      const nextPage = page === NOUNS.length ? 0 : page;
      setCurrentNounIndex(nextPage);
    }, 1000);
  };

  const handleAnswer = (answer: string) => {
    if (answer === NOUNS[currentNounIndex].article) {
      goToNextPage();
    } else {
      setCurrentNounIndex(currentNounIndex);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <NounPage
            noun={NOUNS[currentNounIndex]}
            handleAnswer={handleAnswer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
