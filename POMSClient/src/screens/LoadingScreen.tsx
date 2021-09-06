import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Home Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
    backgroundColor: '#12295d',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },
});
export default LoadingScreen;