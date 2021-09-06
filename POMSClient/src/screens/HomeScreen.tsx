import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../components/home/Header';
import { Button, Text } from 'react-native-paper';
import * as H from 'history';

interface Props {
  history: H.History;
}

const HomeScreen: React.FC<Props> = ({ history }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Purchase Order Management System" history={history}/>
      <Button contentStyle={{ height: 100 }} style={styles.button} mode="outlined" onPress={() => history.push("/orders")}>
        <Text style={{color:"white", fontSize: 26}}>View Orders</Text>
      </Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
    alignItems: 'center',
  },
  button: {
    width: 600,
    backgroundColor: '#12295d',
    color: 'white',
    marginTop: 300
  }
});
export default HomeScreen;