import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Button from '../atoms/Button';

interface Props {
  body: React.ReactElement;
  header: string | React.ReactElement;
  handlePress: () => void;
  buttonText: string;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    paddingRight: 4,
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
  footer: {
    backgroundColor: 'pink',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

const BUTTON_TEXT = {
  CHECK: 'Check',
  NEXT: 'Next',
};

const CardPage = ({
  body,
  header,
  handlePress,
  buttonText,
}: Props): React.ReactElement => {
  const onHandlePress = () => {
    handlePress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {typeof header === 'string' ? (
          <Text style={styles.headerText}>{header}</Text>
        ) : (
          <>{header}</>
        )}
      </View>
      <View style={styles.body}>{body}</View>
      <View style={styles.footer}>
        <Button
          text={buttonText}
          onPress={onHandlePress}
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

export default CardPage;
