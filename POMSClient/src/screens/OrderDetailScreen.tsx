import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Order } from '../../models/order';
import { Icon } from 'react-native-elements';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
import { useParams } from 'react-router';
import * as H from 'history';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Button, DataTable, Text, Card, Title, Paragraph } from 'react-native-paper';
import Header from '../../components/home/Header';
import OrderCard from '../../components/home/OrderCard';

interface Props {
  history: H.History;
}

const OrderDetailScreen: React.FC<Props> = ({ history }) => {
  const {id} = useParams<{id: string}>();
  const [rendered, setRendered] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    console.log("called use effect")
    axios
      .get<Order[]>('http://localhost:5000/api/orders/'+id)
      .then(response => {
          if(response.data){
            setOrders(response.data);
          }
      })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header title="View Order" history={history}/>
      {!!orders !== undefined && orders.length != 0 ?
        <OrderCard description={orders.description} supplier={orders.supplier} history={history} quantity={orders.quantity} />
      : ''}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
    alignItems: 'center',
  },
});
export default OrderDetailScreen;