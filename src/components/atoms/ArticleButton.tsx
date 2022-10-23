import React from 'react';

import Button from './Button';

interface Props {
  text: string;
  color?: string;
  onPress: (value: string) => void;
}

const ArticleButton = ({text, color, onPress}: Props) => {
  return (
    <Button
      text={text}
      styles={{buttonStyle: {backgroundColor: color}}}
      onPress={() => onPress(text)}
    />
  );
};

export default ArticleButton;
