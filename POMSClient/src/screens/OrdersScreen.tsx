import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../components/home/Header';
import RefInput from '../../components/home/RefInput';
import AllOrders from '../../components/AllOrders';
import * as H from 'history';

interface Props {
  history: H.History;
}

const OrdersScreen: React.FC<Props> = ({ history }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (text: string) => setSearchQuery(text);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="View Orders" history={history}/>
      <RefInput placeholder="Enter PO Ref" onChangeText={(text) => onChangeSearch(text)}/>
      <AllOrders query={searchQuery} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});
export default OrdersScreen;