import React from 'react';
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
  return <View style={styles.outerContainer}></View>;
};

export default Header;
