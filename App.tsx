/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import NounPage from './src/pages/NounPage';
import {NounType} from './src/constants/types';
import NOUNS from './src/constants/noun';

const Section = ({children, title}): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const App: () => React.ReactElement = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentNounIndex, setCurrentNounIndex] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const goToNextPage = () => {
    setTimeout(() => {
      console.log('GO TO NEXT');
      const page = getRandomNumber(NOUNS.length);
      const nextPage = page === NOUNS.length ? 0 : page;
      setCurrentNounIndex(nextPage);
    }, 1500);
  };

  const handleAnswer = (answer: string) => {
    console.log('ANSWERED PAGE: ', answer);
    if (answer === NOUNS[currentNounIndex].article) {
      goToNextPage();
    } else {
      setCurrentNounIndex(currentNounIndex);
    }
  };

  console.log('APP: ', NOUNS[currentNounIndex].word);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <NounPage
            noun={NOUNS[currentNounIndex]}
            handleAnswer={handleAnswer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
