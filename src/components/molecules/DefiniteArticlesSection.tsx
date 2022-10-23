import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import ArticleButton from '../atoms/ArticleButton';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginBottom: 20,
  },
});

interface Props {
  handleSelection: (value: string) => void;
}

const DefiniteArticlesSection = ({handleSelection}: Props) => {
  const onArticlePress = (value: string) => {
    handleSelection(value);
  };

  return (
    <View style={style.container}>
      <ArticleButton text="Der" color="#0276DB" onPress={onArticlePress} />
      <ArticleButton text="Die" color="#f194ff" onPress={onArticlePress} />
      <ArticleButton text="Das" color="#45b39d" onPress={onArticlePress} />
    </View>
  );
};

export default DefiniteArticlesSection;
