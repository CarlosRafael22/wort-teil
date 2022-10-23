import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Word from '../molecules/Word';
import {VerbType} from '../constants/types';
import CardPage from '../templates/CardPage';

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
    <CardPage
      handlePress={onPressNext}
      buttonText="Next"
      header="Learn this verb"
      body={
        <View style={styles.container}>
          <Word word={verb} translation={translation} />
          {example && (
            <>
              <Text>Example:</Text>
              <Text style={styles.example}>{example}</Text>
            </>
          )}
        </View>
      }
    />
  );
};

export default VerbPage;
