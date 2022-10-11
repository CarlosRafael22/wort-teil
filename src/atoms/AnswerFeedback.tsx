import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

interface Props {
  answeredCorrectly: boolean;
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});

const AnswerFeedback = ({answeredCorrectly}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: answeredCorrectly ? 'green' : 'red'},
      ]}>
      {answeredCorrectly ? (
        <Icon name="check" size={30} />
      ) : (
        <Icon name="cross" size={30} />
      )}
    </View>
  );
};

export default AnswerFeedback;
