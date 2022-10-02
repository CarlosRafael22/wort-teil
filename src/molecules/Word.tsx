import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Translation from '../atoms/Translation';

const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  article: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 60,
    marginRight: 20,
    fontSize: 18,
    height: '60%',
    fontWeight: '700',
  },
  word: {
    fontSize: 38,
    fontWeight: '700',
  },
});

interface Props {
  word: string;
  article?: string;
  translation: string;
  hasArticle?: boolean;
}

const Word = ({word, article, translation, hasArticle = false}: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {hasArticle && <Text style={styles.article}>{article}</Text>}
        <Text style={styles.word}>{word}</Text>
      </View>
      <Translation translation={translation} />
    </View>
  );
};

export default Word;
