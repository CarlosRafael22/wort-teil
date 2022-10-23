import React from 'react';
import {View, StyleSheet} from 'react-native';

import Word from '../molecules/Word';
import {AdjectiveType} from '../constants/types';
import CardPage from '../templates/CardPage';

interface Props {
  adjective: AdjectiveType;
  onPressNext: () => void;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
});

const AdjectivePage = ({
  adjective: adjectiveObject,
  onPressNext,
}: Props): React.ReactElement => {
  const {word: adjective, translation} = adjectiveObject;

  return (
    <CardPage
      handlePress={onPressNext}
      buttonText="Next"
      header="Learn this adjective"
      body={
        <View style={styles.container}>
          <Word word={adjective} translation={translation} />
        </View>
      }
    />
  );
};

export default AdjectivePage;
