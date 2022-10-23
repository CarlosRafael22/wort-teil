import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: '10%',
  },
});

const Header = () => {
  const [pageCounter, setPageCounter] = useState(0);
  return (
    <View style={styles.outerContainer}>
      <Text>Page {pageCounter}</Text>
    </View>
  );
};

export default Header;
