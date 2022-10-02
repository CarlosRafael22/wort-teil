import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Word from '../molecules/Word';
import {VerbType} from '../constants/types';
import Button from '../atoms/Button';

interface Props {
  verb: VerbType;
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
  example: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 40,
  },
});

const VerbPage = ({
  verb: verbObject,
  onPressNext,
}: Props): React.ReactElement => {
  const {word: verb, translation, example} = verbObject;

  return (
    <View style={styles.container}>
      <Word word={verb} translation={translation} />
      <Text style={styles.example}>{example}</Text>
      <Button text="Next" onPress={onPressNext} />
    </View>
  );
};

export default VerbPage;
