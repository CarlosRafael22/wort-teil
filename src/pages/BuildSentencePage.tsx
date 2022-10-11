import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

import {SentenceType} from '../constants/types';
import Button from '../atoms/Button';
import AnswerFeedback from '../atoms/AnswerFeedback';

interface Props {
  sentence: SentenceType;
  onPressNext: () => void;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
  },
  container: {
    display: 'flex',
    backgroundColor: '#e5e5e5',
    flexGrow: 1,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
  content: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedback: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet',
    height: 100,
  },
  footer: {
    backgroundColor: 'pink',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  translatedSentence: {
    fontSize: 28,
    fontWeight: '700',
  },
  correctSentence: {
    display: 'flex',
    backgroundColor: '#00FA9A',
    borderRadius: 25,
    height: 100,
    margin: 20,
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 16,
    paddingLeft: 10,
  },
  correctSentenceText: {
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
  },
});

const BUTTON_TEXT = {
  CHECK: 'Check',
  NEXT: 'Next',
};

const BuildSentencePage = ({
  sentence: sentenceObj,
  onPressNext,
}: Props): React.ReactElement => {
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(
    null,
  );
  const [typedSentence, setTypedSentence] = useState('');
  const [buttonText, setButtonText] = useState(BUTTON_TEXT.CHECK);
  const [numberOfTries, setNumberOfTries] = useState(0);

  const {sentence, translatedSentence} = sentenceObj;
  const shouldShowAnswer = numberOfTries > 2 && !answeredCorrectly;

  useEffect(() => {
    if (shouldShowAnswer) {
      setButtonText(BUTTON_TEXT.NEXT);
    }
  }, [shouldShowAnswer]);

  const handlePress = () => {
    if (buttonText === BUTTON_TEXT.NEXT) {
      onPressNext();
    } else {
      if (typedSentence === sentence) {
        setAnsweredCorrectly(true);
        setButtonText(BUTTON_TEXT.NEXT);
      } else {
        setAnsweredCorrectly(false);
        setNumberOfTries(numberOfTries + 1);
        setTimeout(() => {
          setAnsweredCorrectly(null);
        }, 1000);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.translatedSentence}>Translate this sentence</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.translatedSentence}>{translatedSentence}</Text>
          <TextInput
            style={styles.input}
            value={typedSentence}
            onChangeText={setTypedSentence}
            editable={!shouldShowAnswer}
          />
        </View>

        <View style={styles.feedback}>
          {answeredCorrectly !== null && (
            <AnswerFeedback answeredCorrectly={answeredCorrectly} />
          )}
        </View>
        {shouldShowAnswer && (
          <View style={styles.correctSentence}>
            <Text>The correct is:</Text>
            <Text style={styles.correctSentenceText}>{sentence}</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <Button
          text={buttonText}
          onPress={handlePress}
          styles={{
            buttonStyle: {
              backgroundColor:
                buttonText === BUTTON_TEXT.CHECK ? '#00BFFF' : '#3CB371',
            },
          }}
        />
      </View>
    </View>
  );
};

export default BuildSentencePage;
