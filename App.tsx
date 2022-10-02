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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NounPage, {NounType} from './src/pages/NounPage';

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
];

const NOUNS = [...OBST, ...KLEIDUNG, ...MOBEL];

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
