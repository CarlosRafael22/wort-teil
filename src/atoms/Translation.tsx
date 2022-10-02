import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 20,
    borderWidth: 2,
    borderRadius: 6,
  },
  translation: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 28,
    fontWeight: '700',
  },
});

interface Props {
  translation: string;
}

const Translation = ({translation}: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [translation]);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
      {visible ? (
        <Text style={styles.translation}>{translation}</Text>
      ) : (
        <Icon name="eye-slash" size={30} />
      )}
    </TouchableOpacity>
  );
};

export default Translation;
