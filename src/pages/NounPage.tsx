import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import DefiniteArticlesSection from '../molecules/DefiniteArticlesSection';
import Word from '../molecules/Word';
import {NounType} from '../constants/types';
import AnswerFeedback from '../atoms/AnswerFeedback';

interface Props {
  noun: NounType;
  handleAnswer: (value: string) => void;
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

const NounPage = ({
  noun: nounObject,
  handleAnswer,
}: Props): React.ReactElement => {
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(
    null,
  );
  const {word: noun, article, translation} = nounObject;
  console.log('NOUN PAGE: ', answeredCorrectly);

  useEffect(() => {
    console.log('NOUN CHANGED THEN RE-RENDERED: ', noun);
    setAnsweredCorrectly(null);
  }, [noun]);

  useEffect(() => {
    console.log('ANSWERED CORRECTLY ONCE: ', answeredCorrectly);
    setAnsweredCorrectly(null);
  }, []);

  const handleArticleSelection = (value: string) => {
    console.log('HANDLE: ', value);
    if (value === article) {
      setAnsweredCorrectly(true);
    } else {
      setAnsweredCorrectly(false);
      setTimeout(() => {
        setAnsweredCorrectly(null);
      }, 1000);
    }
    handleAnswer(value);
  };

  return (
    <View style={styles.container}>
      <Word
        word={noun}
        article={(answeredCorrectly && article) || undefined}
        translation={translation}
        hasArticle
      />
      <DefiniteArticlesSection handleSelection={handleArticleSelection} />
      {answeredCorrectly !== null && (
        <AnswerFeedback answeredCorrectly={answeredCorrectly} />
      )}
    </View>
  );
};

export default NounPage;
