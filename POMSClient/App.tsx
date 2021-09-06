import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NativeRouter, Switch, Route } from 'react-router-native';
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/orders" component={OrdersScreen} />
          <Route exact path={"/orders/:id"} component={OrderDetailScreen} />
        </Switch>
      </SafeAreaView>
    </NativeRouter>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});
export default App;