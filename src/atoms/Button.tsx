import React from 'react';
import {StyleSheet, Pressable, Text, StyleProps} from 'react-native';

const defaultStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

interface Props {
  styles?: {
    buttonStyle?: StyleProps;
    textStyle?: StyleProps;
  };
  text: string;
  onPress: () => void;
}

const Button = ({text, styles, onPress}: Props) => {
  return (
    <Pressable
      style={[defaultStyles.button, styles?.buttonStyle]}
      onPress={onPress}>
      <Text style={[defaultStyles.text, styles?.textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
