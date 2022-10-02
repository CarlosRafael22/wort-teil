import React from 'react';
import {StyleSheet, TouchableOpacity, Pressable, Text} from 'react-native';

const styles = StyleSheet.create({
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

const Button = ({title, color, onPress}) => {
  const handleOnPress = event => {
    onPress(title);
  };
  return (
    <Pressable
      style={[styles.button, {backgroundColor: color}]}
      onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

interface Props {
  text: string;
  color?: string;
  onPress: (value: string) => void;
}

const ArticleButton = ({text, color, onPress}: Props) => {
  return <Button title={text} color={color} onPress={onPress} />;
};

export default ArticleButton;
