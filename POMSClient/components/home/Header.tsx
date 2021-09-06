import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import * as H from 'history';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';

interface Props {
  title: string;
  history: H.History;
}
const Header: React.FC<Props> = ({title}, {history}) => {
  return (
    <View style={styles.header}>
      <Icon 
        style={styles.icon}
        name='home'
        size={30}
        type='font-awesome'
        color='white'
        onPress={() => history.push("/orders")} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    backgroundColor: '#12295d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginRight: 30
  },
  icon: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  }
});
export default Header;