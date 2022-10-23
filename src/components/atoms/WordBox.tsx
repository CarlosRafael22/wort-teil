import React from 'react';
import {StyleSheet, Text, TouchableHighlight, StyleProps} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 160,
    borderWidth: 2,
    borderRadius: 6,
  },
  translation: {
    fontSize: 20,
    fontWeight: '700',
  },
});

interface Props {
  word: string;
  style?: StyleProps;
  onPress: (selectedWord: {word?: string; translation?: string}) => void;
  isTranslation?: boolean;
  hasMatched: boolean;
}

const WordBox = ({word, style, onPress, isTranslation, hasMatched}: Props) => {
  return (
    <TouchableHighlight
      style={[
        styles.container,
        style,
        {backgroundColor: hasMatched ? 'green' : 'red'},
      ]}
      disabled={hasMatched}
      onPress={() => onPress(isTranslation ? {translation: word} : {word})}>
      <Text style={styles.translation}>{word}</Text>
    </TouchableHighlight>
  );
};

export default WordBox;
