import React from 'react';
import {View, StyleSheet} from 'react-native';

import Word from '../molecules/Word';
import {AdjectiveType} from '../constants/types';
import Button from '../atoms/Button';

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
    paddingBottom: 200,
    paddingTop: 200,
  },
});

const AdjectivePage = ({
  adjective: adjectiveObject,
  onPressNext,
}: Props): React.ReactElement => {
  const {word: adjective, translation} = adjectiveObject;

  return (
    <View style={styles.container}>
      <Word word={adjective} translation={translation} />
      <Button text="Next" onPress={onPressNext} />
    </View>
  );
};

export default AdjectivePage;
